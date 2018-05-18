/*
    Enumérations
*/

const Lang = {
    FR : "fr",
    EN : "en"
};

function LangExists(lang) {
    let _result = false;
    for (let key in Lang)
        _result = _result || Lang[key] === lang;
    return _result;
}


/*
    Routeur
*/

const Routes = [
    {
        name : 'Base',
        path : '/',
        redirect : to => {
            let _lang = localStorage.getItem('Lang');
            if (_lang !== undefined && LangExists(_lang))
                return '/' + _lang;
            return '/' + Lang.FR;
        }
    },
    {
        name : 'Index',
        path : '/:lang'
    },
    {
        name : 'Update',
        path : '/:lang/update',
        component : Vue.component('update', httpVueLoader('/page/update.vue'))
    },
    {
        name : 'About',
        path : '/:lang/about',
        component : Vue.component('about', httpVueLoader('/page/about.vue'))
    },
    {
        name : 'Contact',
        path : '/:lang/contact',
        component : Vue.component('contact', httpVueLoader('/page/contact.vue'))
    },
    {
        name : 'Monster',
        path : '/:lang/monster/:id',
        component : Vue.component('monster', httpVueLoader('/page/monster.vue'))
    },
    {
        name : 'Dungeon',
        path : '/:lang/dungeon/:id',
        component : Vue.component('dungeon', httpVueLoader('/page/dungeon.vue'))
    },
    {
        name : 'Error',
        path : '/:lang/404',
        component : Vue.component('undefined', httpVueLoader('/page/undefined.vue'))
    },  
    {
        name : 'ErrorRedirection',
        path : '/:lang/*',
        redirect : to => {
            return '/' + to.params.lang + '/404';
        }
    }
];

const Router = new VueRouter({
    mode : 'history',
    routes : Routes
});


/*
    Application
*/

var DoFensive = new Vue({
    el : '#DoFensive',
    mixins : Mixin,
    router : Router,

    data : {
        Languages : Lang,
        ShowLanguages : false,
        Lang : undefined,
        Text : undefined,
        ShowPage : false,
        DataPage : undefined,
        HttpVueLoader : httpVueLoader,
        Ga : ga
    },

    computed : {
        BaseLoaded : function() {
            return this.Text !== undefined;
        }
    },

    watch : {
        '$route' : function(to, from) {
            if (from.name === null || (to.params.lang !== from.params.lang)) {
                to.params.lang = this.Lang;
                this.$router.push({ name : to.name, params : to.params });
            }
            
            if (to.name !== 'Index') {
                this.ShowPage = true;
                document.body.classList.add('fixed');
                document.addEventListener('keyup', this.Escape);
            }
            else if (this.ShowPage)
                this.Close();
        }
    },

    methods : {
        // Récupère le contenu d'un fichier au format text
        Fetch : function(file, type = 'application/json') {
            return new Promise((resolve, reject) => {
                const _xhr = new XMLHttpRequest();
                _xhr.open('GET', file);
                _xhr.setRequestHeader('Content-Type', type);
                _xhr.onload = () => {
                    if (_xhr.status >= 200 && _xhr.status < 300) {
                        resolve(_xhr.responseText);
                    }
                    else {
                        reject({ file : file, status : _xhr.status });
                    }
                };
                _xhr.onerror = () => reject({ file : file, status : _xhr.status });
                _xhr.send();
            });
        },

        // Récupère la langue sélectionnée (par défaut, FR)
        InitLang : function() {
            let _lang = localStorage.getItem('Lang'),
                _uriLang = this.$route.params.lang;
            if (_uriLang !== undefined && this.LangExists(_uriLang)) {
                this.Lang = _uriLang;
            }
            else {
                if (_lang === null || !this.LangExists(_lang)) {
                    this.Lang = this.Languages.FR;
                    localStorage.setItem('Lang', this.Lang);
                }
                else
                    this.Lang = _lang;
            }
        },

        // Gère l'affichage de la liste des langues au clic sur la page
        ToggleLanguages : function(event) {
            let _languagesDOM = this.$refs.Lang;
            let _targetDOM = event.target;

            if (_languagesDOM !== undefined && _languagesDOM !== _targetDOM && !_languagesDOM.contains(_targetDOM))
                this.ShowLanguages = false;
            else
                this.ShowLanguages = !this.ShowLanguages;
        },

        // Change la langue
        SetLang : function(lang) {
            if (this.Lang === lang)
                return;
            else if (!this.LangExists(lang))
                this.InitLang();
            else {
                this.Lang = lang;
                localStorage.setItem('Lang', this.Lang);
            }

            this.$router.push('/' + this.Lang);
            location.reload();
        },

        // Vérifie l'existence de la langue
        LangExists : function(lang) {
            let _exists = false;
            Object.keys(this.Languages).forEach(key => {
                if (this.Languages[key] === lang) {
                    _exists = true;
                    return;
                }
            });

            return _exists;
        },

        // Récupère les traductions correspondant à la langue saisie
        LoadText : function() {
            this.Fetch('/data/' + this.Lang + '/Default.json').then(data => {
                this.Text = JSON.parse(data);
            }).catch(e => console.error("Failed to fetch " + e.file + " (" + e.status + ")"));
        },

        // Ouvre une page flottante
        Open : function(page, data = undefined) {
            this.DataPage = data;

            let _route = {
                path : '/' + this.Lang + '/' + page
            };

            if (this.DataPage !== undefined && this.DataPage.Monster) {
                _route.path += '/';
                this.DataPage.Monster.forEach((monster, index) => {
                    _route.path += monster.Id;
                    if (index < this.DataPage.Monster.length - 1)
                        _route.path += ',';
                });
            }
            else if (this.DataPage !== undefined && this.DataPage.Dungeon) {
                _route.path += '/';
                this.DataPage.Dungeon.forEach((dungeon, index) => {
                    _route.path += dungeon.Id;
                    if (index < this.DataPage.Dungeon.length - 1)
                        _route.path += ',';
                });
            }

            this.Ga('set', 'page', _route);
            this.Ga('send', 'pageview');
            this.$router.push(_route);
        },

        // Ferme une page flottante
        Close : function() {
            this.$router.push('/' + this.Lang);
            this.ShowPage = false;
            document.removeEventListener('keyup', this.Escape);
        },

        // Retire la classe 'fixed' au body (déclenché à la fin de l'animation)
        EndedClose : function() {
            document.body.classList.remove('fixed');
        },

        // Raccourci 'Echap'
        Escape : function(e) {
            if (e.keyCode === 27)
                this.Close();
        },

        // Ajoute la marque du pluriels en fonction de 'value' en remplaçant les masques '#1'
        Plurial : function(text, value) {
            return value > 1 ? text.replace(/#1/g, 's') : text.replace(/#1/g, '');
        },

        // Créé un lien vers une page
        Link : function(link) {
            return '/' + this.Lang + '/' + link;
        },

        // Evénement personnalisé pour GA
        GaFor : function(page) {
            this.Ga('send', {
                hitType : "event",
                eventCategory : "Page",
                eventAction : "Show",
                eventLabel : page
            });
        }
    },

    created : function() {
        // Charge le fichier de langue
        this.InitLang();
        this.LoadText();
    },

    mounted : function() {
        // Cache la liste des langues au clic sur la page
        document.addEventListener('click', this.ToggleLanguages);

        // Google Adsense
        (adsbygoogle = window.adsbygoogle || []).push({});
    },

    metaInfo : function() {
        return {
            title : this.Text === undefined ? 'Index' : () => { return this.Text.Index.Title; },
            titleTemplate : title => {
                if (title === undefined)
                    return 'DoFensive';
                else if (typeof title === 'function')
                    return title() + ' - DoFensive';
                else
                    return title + ' - DoFensive';
            },
            meta : [
                {
                    vmid : 'description',
                    name : 'description',
                    content : this.Text === undefined ? 'Découvrez toutes les moindres spécificités de chaque monstre et donjon du MMORPG Dofus. Caractéristiques, sorts, loots... Vos ennemis n\'auront plus de secret pour vous !' : () => { return this.Text.Index.Description; },
                    template : description => {
                        if (typeof description === 'function')
                            return description();
                        else
                            return description;
                    }
                },
                {
                    vmid : 'keywords',
                    name : 'keywords',
                    content : this.Text === undefined ? 'dofensive, dofus, sackey, bestiaire, recherche, entraide, help, search, encyclopédie, mob, monster, monstre, ennemi, stratégie, strategy, spell, cast, sort, technique, boss, donjon, ankama, amakna, portée, range, characteristic, caractéristique, résistance, faiblesse, pm, pa, retrait, entrave' : () => { return this.Text.Common.Tags; },
                    template : keywords => {
                        if (typeof keywords === 'function')
                            return keywords();
                        else
                            return keywords;
                    }
                }
            ]
        };
    }
});