<template>
    <div id="Dungeon" class="dungeon monster">
        <div v-for="(dungeon, indexDungeon) in Dungeon" :key="indexDungeon">
            <h1 class="title">{{ dungeon.Name }} ({{ Text.Common.Level }} {{ dungeon.Lvl }})</h1>
            
            <div class="item" v-for="(monster, indexMonster) in dungeon.Monsters" :key="indexMonster">
                <div class="link" @click="ShowIdentity(indexDungeon, indexMonster)">
                    <h3 class="column">
                        {{ monster.Name }}
                    </h3>
                    <div class="column info">
                        {{ GetInfoText(monster) }}
                    </div>
                </div>
                <transition name="fade">
                    <section v-if="ContentDungeon[indexDungeon][indexMonster].Loaded" v-show="monster.Show" :is="ContentDungeon[indexDungeon][indexMonster].Id" :data="{ Monster : monster }"></section>
                </transition>
            </div>
        </div>
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
                Dungeon : [],
                ContentDungeon : [],
                MonsterJsonData : undefined,
                DungeonJsonData : undefined
            }
        },

        watch : {
            '$route.params.id' : function(to, from) {
                if (to !== undefined) {
                    if (this.DungeonJsonData !== undefined)
                        this.GetDungeonFromUri();
                    else
                        this.InitFromUri();
                }
            }
        },

        methods : {
            Init : function(data) {
                // Réinitialisation des variables
                this.Dungeon = [];
                this.ContentDungeon = [];

                // Initialisation de la structure Donjon
                this.FetchMonster(data.Dungeon);
            },

            InitFromUri : function() {
                DoFensive.Fetch('/data/' + DoFensive.Lang + '/DungeonPreviews.json').then(data => {
                    this.DungeonJsonData = JSON.parse(data);
                    this.GetDungeonFromUri();
                }).catch(e => console.error("Failed to fetch " + e.file + " (" + e.status + ")"));
            },

            GetDungeonFromUri : function() {
                let _dungeons = this.$route.params.id.split(',').map(id => { return parseInt(id); }),
                    _result = this.DungeonJsonData.filter(dungeon => {
                        return _dungeons.indexOf(dungeon.Id) !== -1;
                    });

                if (_result.length > 0)
                    this.Init({
                        Dungeon : _result
                    });
                else
                    this.$router.push({ name : 'Error', params : { lang : DoFensive.Lang }});
            },

            FetchMonster : function(dungeons) {
                DoFensive.Fetch('/data/' + DoFensive.Lang + '/MonsterPreviews.json').then(data => {
                    this.MonsterJsonData = JSON.parse(data);
                    dungeons.forEach(dungeon => {
                        this.GetMonster(dungeon);
                    });

                    // Initialise les composants
                    this.Dungeon.forEach((dungeon, indexDungeon) => {
                        dungeon.Monsters.forEach((monster, indexMonster) => {
                            monster.Show = false;

                            if (this.ContentDungeon[indexDungeon] === undefined)
                                this.ContentDungeon[indexDungeon] = [];
                            this.ContentDungeon[indexDungeon][indexMonster] = { 'Id' : 'identity' + dungeon.Id + '-' + monster.Id, 'Loaded' : false };
                            
                            this.Ga('send', {
                                hitType : "event",
                                eventCategory : "Monster",
                                eventAction : "Fetch",
                                eventLabel : monster.Id,
                                eventValue : monster.Id
                            });
                        });

                        this.Ga('send', {
                            hitType : "event",
                            eventCategory : "Dungeon",
                            eventAction : "Fetch",
                            eventLabel : dungeon.Id,
                            eventValue : dungeon.Id
                        });
                    });
                }).catch(e => console.error("Failed to fetch " + e.file + " (" + e.status + ")"));
            },

            GetMonster : function(dungeon) {
                let _result = this.MonsterJsonData.filter(monster => {
                        return dungeon.Monsters.indexOf(monster.Id) !== -1;
                    });

                if (_result.length > 0)
                    this.AddDungeon(dungeon, _result);
                else
                    this.$router.push({ name : 'Error', params : { lang : DoFensive.Lang }});
            },

            AddDungeon : function(dungeon, monsters) {
                this.Dungeon.push({
                    Id : dungeon.Id,
                    Lvl : dungeon.Lvl,
                    Name : dungeon.Name,
                    Monsters : monsters
                });
            },

            Open : function(index1, index2) {
                if (!this.ContentDungeon[index1][index2].Loaded) {
                    Vue.component(this.ContentDungeon[index1][index2].Id, this.HttpVueLoader('/page/identity.vue'));
                    this.ContentDungeon[index1][index2].Loaded = true;
                }
            },

            ShowIdentity : function(index1, index2) {
                this.Open(index1, index2);

                let _monster = this.Dungeon[index1].Monsters[index2];
                _monster.Show = !_monster.Show;
                this.$set(this.Dungeon[index1].Monsters, index2, _monster);
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
                title : this.Dungeon === undefined ? this.Text.Dungeon.Title : () => {
                    let _title = '';
                    this.Dungeon.forEach((dungeon, index) => {
                        _title += dungeon.Name;
                        if (index < this.Dungeon.length - 1)
                            _title += ', ';
                    });
                    return _title;
                },
                meta : [
                    {
                        vmid : 'description',
                        name : 'description',
                        content : this.Dungeon === undefined ? this.Text.Dungeon.DescriptionDefault : () => {
                            let _description = (this.Dungeon.length === 1) ? this.Text.Dungeon.Description : this.Text.Dungeon.DescriptionPlurial,
                                _innerDescription = '';
                            this.Dungeon.forEach((dungeon, index) => {
                                _innerDescription += dungeon.Name;
                                if (index < this.Dungeon.length - 1)
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
                        content : this.Dungeon === undefined ? this.Text.Common.Tags : () => {
                            let _tags = this.Text.Common.Tags;
                            this.Dungeon.forEach(dungeon => {
                                _tags += ', ' + dungeon.Name.replace(/\s/g, ', ');
                                dungeon.Monsters.forEach(monster => {
                                    _tags += ', ' + monster.Name.replace(/\s/g, ', ');
                                });
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