<template>
    <div id="Monster" class="monster">
        <h1 class="title" v-if="MultiIdentities">{{ Monster.length }} {{ Text.Monster.TitlePart }}</h1>

        <div v-if="MultiIdentities" class="item" v-for="(monster, index) in Monster" :key="index">
            <div class="link" @click="ShowIdentity(index)">
                <h3 class="column">
                    {{ monster.Name }}
                </h3>
                <div class="column info">
                    {{ GetInfoText(monster) }}
                </div>
            </div>
            <transition name="fade">
                <section v-if="ContentMonster[index].Loaded" v-show="monster.Show" :is="ContentMonster[index].Id" :data="{ Monster : monster }"></section>
            </transition>
        </div>

        <section v-else :is="ContentMonster[0].Id" :data="{ Monster : Monster[0] }"></section>
    </div>
</template>

<script type="text/javascript">
    module.exports = {
        props : {
            data : {
                type : Object,
                default : undefined
            }
        },

        data : function() {
            return {
                Text : DoFensive.Text,
                HttpVueLoader : DoFensive.HttpVueLoader,
                Ga : DoFensive.Ga,
                Monster : undefined,
                MultiIdentities : false,
                ContentMonster : [],
                JsonData : undefined
            }
        },

        watch : {
            '$route.params.id' : function(to, from) {
                if (to !== undefined) {
                    if (this.JsonData !== undefined)
                        this.GetMonsterFromUri();
                    else
                        this.InitFromUri();
                }
            }
        },

        methods : {
            Init : function(data) {
                // Réinitialisation des variables
                this.Monster = undefined;
                this.MultiIdentities = false;
                this.ContentMonster = [];

                // Mise à jour de la structure Monstre
                this.Monster = data.Monster.map(monster => {
                    monster.Show = false;
                    return monster;
                });

                // Initialise les composants
                this.Monster.forEach(monster => {
                    this.ContentMonster.push({ 'Id' : 'identity' + monster.Id, 'Loaded' : false });
                    this.Ga('send', {
                        hitType : "event",
                        eventCategory : "Monster",
                        eventAction : "Fetch",
                        eventLabel : monster.Id,
                        eventValue : monster.Id
                    });
                });

                if (this.Monster.length > 1)
                    this.MultiIdentities = true;
                else
                    this.Open(0);
            },

            InitFromUri : function() {
                DoFensive.Fetch('/data/' + DoFensive.Lang + '/MonsterPreviews.json').then(data => {
                    this.JsonData = JSON.parse(data);
                    this.GetMonsterFromUri();
                }).catch(e => console.error("Failed to fetch " + e.file + " (" + e.status + ")"));
            },

            GetMonsterFromUri : function() {
                let _monsters = this.$route.params.id.split(',').map(id => { return parseInt(id); }),
                    _result = this.JsonData.filter(monster => {
                        return _monsters.indexOf(monster.Id) !== -1;
                    });

                if (_result.length > 0)
                    this.Init({
                        Monster : _result
                    });
                else
                    this.$router.push({ name : 'Error', params : { lang : DoFensive.Lang }});
            },

            Open : function(index) {
                if (!this.ContentMonster[index].Loaded) {
                    Vue.component(this.ContentMonster[index].Id, this.HttpVueLoader('/page/identity.vue'));
                    this.ContentMonster[index].Loaded = true;
                }
            },

            ShowIdentity : function(index) {
                this.Open(index);

                let _monster = this.Monster[index];
                _monster.Show = !_monster.Show;
                this.$set(this.Monster, index, _monster);
            },

            GetInfoText : function(monster) {
                let _text = '';
                
                switch (monster.Type) {
                    case 1 : _text += this.Text.Common.Quest;
                    break;

                    case 2 : _text += this.Text.Common.Archi;
                    break;

                    case 3 : _text += this.Text.Common.Boss;
                    break;

                    default : _text += this.Text.Common.Monster;
                }

                _text += ' ' + this.Text.Monster.OfLevel + ' ' + monster.MinLvl;

                if (monster.MinLvl !== monster.MaxLvl)
                    _text += ' ' + this.Text.Common.To + ' ' + monster.MaxLvl;
                
                return _text;
            }
        },

        created : function() {
            if (this.data !== undefined)
                this.Init(this.data);
            else
                this.InitFromUri();
        },

        metaInfo : function() {
            return {
                title : this.Monster === undefined ? this.Text.Monster.Title : () => {
                    let _title = '';
                    this.Monster.forEach((monster, index) => {
                        _title += monster.Name;
                        if (index < this.Monster.length - 1)
                            _title += ', ';
                    });
                    return _title;
                },
                meta : [
                    {
                        vmid : 'description',
                        name : 'description',
                        content : this.Monster === undefined ? this.Text.Monster.DescriptionDefault : () => {
                            let _description = (this.Monster.length === 1) ? this.Text.Monster.Description : this.Text.Monster.DescriptionPlurial,
                                _innerDescription = '';
                            this.Monster.forEach((monster, index) => {
                                _innerDescription += monster.Name;
                                if (index < this.Monster.length - 1)
                                    _innerDescription += ', ';
                            });
                            return _description.replace(/#2/g, _innerDescription);
                        },
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
                        content : this.Monster === undefined ? this.Text.Common.Tags : () => {
                            let _tags = this.Text.Common.Tags;
                            this.Monster.forEach(monster => {
                                _tags += ', ' + monster.Name.replace(/\s/g, ', ');
                            });
                            return _tags;
                        },
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
    }
</script>

<style type="text/css" src="/style/monster.css"></style>