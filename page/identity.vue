<template>
    <section class="identity" v-if="Loaded">
        <nav class="level protected">
            <ul>
		        <li :class="{ 'selected' : SelectedGrade === index }" v-for="(grade, index) in Monster.Grades" :key="index" @click="ChangeGrade(index)">
                    <div class="grade">{{ index + 1 }}</div>
                    <div class="text">{{ Text.Common.Level }} {{ grade.Level }}</div>
                </li>
            </ul>
        </nav>

        <header class="global">
            <div class="title">
                <h2>{{ Monster.Name }}
                </h2><div class="type">
                    <popover v-if="Monster.Type === 3" class="icon boss" :data="Text.Common.Boss"></popover>
                    <popover v-if="Monster.Type === 2" class="icon archi" :data="Text.Common.Archi"></popover>
                    <popover v-if="Monster.Type === 1" class="icon quest" :data="Text.Common.Quest"></popover>
                </div><div class="complement">
                    <div class="family">
                        <div class="column key">{{ Text.Monster.Type }}</div>{{ Monster.Family }} > {{ Monster.Race }}
                    </div>
                    <div class="localisation">
                        <div class="column key">{{ Monster.Subareas.length > 1 ? Text.Monster.Localisations : Text.Monster.Localisation }}
                        </div><div class="column">
                            <div v-if="Monster.Subareas.length === 0">{{ Text.Monster.NoneLocalisation }}</div>
                            <popover :class="['inline', { 'icon' : subarea.IsFavorite }]" :body="subarea.Name" :data="subarea.IsFavorite ? Text.Monster.MajorLocalisation : false" v-for="(subarea, index) in Monster.Subareas" :key="index"></popover>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        <section class="card">
            <div class="information">
                <div class="column sheet">
                    <div class="column skin">
                        <img class="bone protected" :src="'/data/picture/' + Monster.Id + '.png'" :alt="Monster.Name" @error="DefaultPicture($event)" />
                    </div>
                    <div class="column stats">
                        <popover class="icon heart" :body="LifePoints" :data="Text.Monster.LifePoints"></popover>
                        <popover class="icon ap" :body="Monster.Grades[SelectedGrade].ActionPoints" :data="Text.Monster.ActionPoints"></popover>
                        <popover class="icon mp" :body="Monster.Grades[SelectedGrade].MovementPoints" :data="Text.Monster.MovementPoints"></popover>
                    </div>
                </div><div class="column charac">
                    <div class="column half property">
                        <div class="behavior">
                            <div class="column value" v-if="!Monster.CanPlay">{{ Text.Monster.CantPlay }}
                            </div><div class="column value" v-if="!Monster.CanTackle">{{ Text.Monster.CantTackle }}                               
                            </div><div class="column value" v-if="!Monster.CanBePushed">{{ Text.Monster.CantBePushed }}
                            </div><div class="column value" v-if="!Monster.CanSwitchPos">{{ Text.Monster.CantSwitchPos }}</div>
                        </div><div class="column half resistance">
                            <popover class="icon neutral" :body="Monster.Grades[SelectedGrade].Resistances.Neutral + '%'" :data="Text.Monster.NeutralResistance">
                            </popover><popover class="icon earth" :body="Monster.Grades[SelectedGrade].Resistances.Earth + '%'" :data="Text.Monster.EarthResistance">
                            </popover><popover class="icon fire" :body="Monster.Grades[SelectedGrade].Resistances.Fire + '%'" :data="Text.Monster.FireResistance">
                            </popover><popover class="icon water" :body="Monster.Grades[SelectedGrade].Resistances.Water + '%'" :data="Text.Monster.WaterResistance">
                            </popover><popover class="icon air" :body="Monster.Grades[SelectedGrade].Resistances.Air + '%'" :data="Text.Monster.AirResistance"></popover>
                        </div><div class="column half miscellaneous">
                            <popover class="icon apImpede" :body="Impede" :data="Text.Monster.ApImpede"></popover>
                            <popover class="icon mpImpede" :body="Impede" :data="Text.Monster.MpImpede"></popover>
                            <popover class="icon apDodge" :body="DodgeAP" :data="Text.Monster.ApDodge"></popover>
                            <popover class="icon mpDodge" :body="DodgeMP" :data="Text.Monster.MpDodge"></popover>
                            <popover class="icon reflect" :body="Monster.Grades[SelectedGrade].DamageReflect" :data="Text.Monster.ReflectDamage"></popover>
                        </div>
                    </div><div class="column half loot">
                        <popover class="icon column xp" :body="Experience" :data="Text.Monster.Experience"></popover>
                        <ul class="drop">
                            <li :class="['item', { 'conditional' : drop.IsConditional }]" v-for="(drop, index) in Monster.Grades[SelectedGrade].Drops" :key="index">
                                <div class="column probability">{{ drop.Probability }}%</div>
                                <div class="column name">{{ drop.Name }}</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
	    </section>

        <section class="fight">
            <div class="column half">
                <div class="column losange idol">
                    <div class="picture"></div>
                </div><h3 class="column">{{ (Monster.IncompatibleIdols.length > 1 || Monster.AllIdolsDisabled) ? Text.Monster.ForbiddenIdols : Text.Monster.ForbiddenIdol }}</h3>
                <ul class="content">
                    <li v-if="Monster.AllIdolsDisabled">{{ Text.Monster.AllIdols }}</li>
                    <li v-else-if="Monster.IncompatibleIdols.length === 0">{{ Text.Monster.NoneIdol }}</li>
                    <li class="inline" v-for="(idol, index) in Monster.IncompatibleIdols" :key="index">{{ idol.Name }}</li>
                </ul>
            </div><div class="column half">
                <div class="column losange challenge">
                    <div class="picture"></div>
                </div><h3 class="column">{{ Monster.IncompatibleChallenges.length > 1 ? Text.Monster.ForbiddenChallenges : Text.Monster.ForbiddenChallenge }}</h3>
                <ul class="content">
                    <li v-if="Monster.IncompatibleChallenges.length === 0">{{ Text.Monster.NoneChallenge }}</li>
                    <li class="inline" v-for="(challenge, index) in Monster.IncompatibleChallenges" :key="index">{{ challenge.Name }}</li>
                </ul>
            </div>
        </section>

        <section class="spell" ref="spell">
            <h3>{{ Monster.Spells.length > 1 ? Text.Monster.Spells : Text.Monster.Spell }}</h3>
            <ul class="list protected">
                <li v-if="Monster.Spells.length === 0">Aucun</li>
                <li v-for="(spell, index) in Monster.Spells" :key="index" :class="['column', 'value', { 'selected' : (Spell !== undefined && Spell.Index === index) }]" @click="ChangeSpell(index, spell.Id)">{{ spell.Name }}</li>
            </ul>

            <transition name="drop-down">
                <div class="card" v-if="Spell !== undefined && ShowSpell">
                    <div class="spellInformation">
                        <div class="spellDescription">
                            <div class="content">
                                <div class="header">
                                    <div class="value column">{{ Text.Common.Level }} {{ SelectedLevels[Spell.Index] + 1 }}</div><div class="title column">
                                        <h4><a :href="'https://www.dofus.com' + Text.Spell.Uri + '?id=' + Spell.Value.Id + '&level=' + (SelectedLevels[Spell.Index] + 1)" target="_blank">{{ Spell.Value.Name }}</a></h4>
                                        <div class="subinfo">
                                            <popover :class="['column', 'icon', { 'range' : SpellLevel.EditableRange }, { 'static_range' : !SpellLevel.EditableRange }]" :body="Range + ' ' + Text.Spell.Range" :data="SpellLevel.EditableRange ? Text.Spell.EditableRange : Text.Spell.NotEditableRange">
                                            </popover><popover class="cost column icon" :body="SpellLevel.ActionPoints + ' ' + Text.Spell.AP" :data="Text.Spell.Cost">
                                            </popover><popover class="critical column icon" :body="SpellLevel.CriticalProbability + Text.Spell.PercentCritical" :data="Text.Spell.Critical"></popover>
                                        </div>
                                    </div>
                                </div><div class="effects">
                                    <div class="effect column half">
                                        <h5>{{ EffectTitle }}</h5>
                                        <effects v-if="SpellLevel.Effects.length > 0" :data="{ Bus : Bus, Spell : Spell, SpellSelection : this.SelectedLevels[this.Spell.Index], Type : 'Effects', SubSpells : SubSpells[Spell.Index], LocalSubSpells : [], Depth : 0, States : States }"></effects>
                                    </div><div class="criticalEffect column half">
                                        <h5>{{ CriticalEffectTitle }}</h5>
                                        <effects v-if="SpellLevel.CriticalEffects.length > 0" :data="{ Bus : Bus, Spell : Spell, SpellSelection : this.SelectedLevels[this.Spell.Index], Type : 'CriticalEffects', SubSpells : SubSpells[Spell.Index], LocalSubSpells : [], Depth : 0, States : States }"></effects>
                                    </div><hr class="separation" /><div class="miscellaneous">
                                        <div class="column half">
                                            <div v-if="SpellLevel.InitialCooldown > 0">{{ Text.Spell.InitialCooldown }} {{ SpellLevel.InitialCooldown }} {{ Plurial(Text.Spell.Turn, SpellLevel.InitialCooldown) }}</div>
                                            <div v-if="SpellLevel.GlobalCooldown > 0">{{ Text.Spell.GlobalCooldown }} {{ SpellLevel.GlobalCooldown }} {{ Plurial(Text.Spell.Turn, SpellLevel.GlobalCooldown) }}</div>
                                            <div v-if="SpellLevel.MaxCastPerTurn > 0">{{ Plurial(Text.Spell.CastPerTurn, SpellLevel.MaxCastPerTurn) }} {{ SpellLevel.MaxCastPerTurn }}</div>
                                            <div v-if="SpellLevel.MaxCastPerTarget > 0">{{ Plurial(Text.Spell.CastPerTarget, SpellLevel.MaxCastPerTarget) }} {{ SpellLevel.MaxCastPerTarget }}</div>
                                            <div v-if="SpellLevel.MinCastInterval > 0">{{ Text.Spell.CastInterval }} {{ SpellLevel.MinCastInterval }} {{ Plurial(Text.Spell.Turn, SpellLevel.MinCastInterval) }}</div>
                                        </div><div class="column half">
                                            <div v-if="SpellLevel.CastInLine && SpellLevel.CastInDiagonal">{{ Text.Spell.CastLineDiagonal }}</div>
                                            <div v-else-if="SpellLevel.CastInLine">{{ Text.Spell.CastLine }}</div>
                                            <div v-else-if="SpellLevel.CastInDiagonal">{{ Text.Spell.CastDiagonal }}</div>

                                            <div v-if="SpellLevel.CastLineOfSight">{{ Text.Spell.CastLOS }}</div>
                                            <div v-else>{{ Text.Spell.CastNoLOS }}</div>

                                            <div v-if="SpellLevel.NeedFreeCell && SpellLevel.NeedFreeTrapCell">{{ NeedFullyFreeCell }}</div>
                                            <div v-else-if="SpellLevel.NeedFreeCell">{{ Text.Spell.NeedFreeCell }}</div>
                                            <div v-else-if="SpellLevel.NeedFreeTrapCell">{{ Text.Spell.NeedNoTrapCell }}</div>
                                            <div v-else-if="SpellLevel.NeedTakenCell">{{ Text.Spell.NeedTakenCell }}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div><div class="spellLevel protected">
                            <div v-for="(level, index) in Spell.Value.Levels" :key="index" :class="['grade', { 'selected' : SelectedLevels[Spell.Index] === index }]" @click="ChangeLevel(Spell.Index, index)">{{ index + 1 }}</div>
                        </div>
                    </div>
                </div>
            </transition>
        </section>
    </section>
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
                Bus : new Vue(),
                Loaded : false,
                Text : DoFensive.Text,
                HttpVueLoader : DoFensive.HttpVueLoader,
                InputMonster : this.data.Monster,
                Monster : undefined,
                SelectedGrade : 0,
                Spells : [],
                SubSpells : [],
                Spell : undefined,
                SelectedLevels : [],
                ShowSpell : false,
                States : []
            }
        },

        computed : {
            SpellLevel : function() {
                return this.Spell.Value.Levels[this.SelectedLevels[this.Spell.Index]];
            },

            LifePoints : function() {
                return new Intl.NumberFormat('DIGIT', { maximumSignificantDigits : 3 }).format(this.Monster.Grades[this.SelectedGrade].LifePoints);
            },

            Impede : function() {
                return Math.floor(this.Monster.Grades[this.SelectedGrade].Wisdom / 10);
            },
            
            DodgeAP : function() {
                return this.Monster.Grades[this.SelectedGrade].PaDodge + Math.floor(this.Monster.Grades[this.SelectedGrade].Wisdom / 10);
            },

            DodgeMP : function() {
                return this.Monster.Grades[this.SelectedGrade].PmDodge + Math.floor(this.Monster.Grades[this.SelectedGrade].Wisdom / 10);
            },

            Experience : function() {
                return new Intl.NumberFormat('DIGIT', { maximumSignificantDigits : 3 }).format(this.Monster.Grades[this.SelectedGrade].Experience);
            },

            Range : function() {
                return (this.SpellLevel.MinRange === 0 && this.SpellLevel.Range === 0) ? 0 : (this.SpellLevel.MinRange + ' - ' + this.SpellLevel.Range);
            },

            EffectTitle : function() {
                let _count = this.SpellLevel.Effects.length,
                    _text = this.Text.Spell.NoEffect;
                if (_count > 0)
                    _text = this.Plurial(this.Text.Spell.Effect, _count);

                return _text;
            },

            CriticalEffectTitle : function() {
                let _count = this.SpellLevel.CriticalEffects.length,
                    _text = this.Text.Spell.NoCriticalEffect;
                if (_count > 0)
                    _text = this.Plurial(this.Text.Spell.CriticalEffect, _count);

                return _text;
            }
        },

        methods :  {
            Fetch : function(file, data, type = 'application/x-www-form-urlencoded') {
                return new Promise((resolve, reject) => {
                    const _xhr = new XMLHttpRequest();
                    _xhr.open('GET', file + '?' + this.ObjectToParam(data));
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

            ObjectToParam : function(obj) {
                let _encodedString = '';
                for (let prop in obj) {
                    if (obj.hasOwnProperty(prop)) {
                        if (_encodedString.length > 0)
                            _encodedString += '&';
                        _encodedString += encodeURI(prop + '=' + obj[prop]);
                    }
                }

                return _encodedString;
            },

            DefaultPicture : function(el) {
                el.target.src = '/data/picture/undefined.png';
            },

            Plurial : function(text, value) {
                return DoFensive.Plurial(text, value);
            },

            ChangeGrade : function(index) {
                if (this.SelectedGrade !== index)
                    this.SelectedGrade = index;
            },

            ChangeSpell : function(index, spellId) {
                if (this.Spell !== undefined && this.Spell.Index === index) {
                    this.ShowSpell = !this.ShowSpell;
                    if (!this.ShowSpell) {
                        this.Spell = undefined;
                        return;
                    }
                }
                else {
                    this.ShowSpell = true;
                    this.Bus.$emit('reset');
                }

                if (this.Spells[index] !== undefined)
                    this.Spell = this.Spells[index];
                else
                    this.Fetch('/app/spell.php', {
                        'Id' : spellId,
                        'Language' : DoFensive.Lang
                    }).then(data => {
                        this.Spell = {
                            Index : index,
                            Value : JSON.parse(data)
                        };
                        this.Spells[index] = this.Spell;
                        this.SubSpells[index] = [];
                        this.SelectedLevels[index] = 0;
                    }).catch(e => console.error("Failed to fetch " + e.file + " (" + e.status + ")"));
            },

            ChangeLevel : function(index, level) {
                if (this.SelectedLevels[index] !== level)
                    this.$set(this.SelectedLevels, index, level);
            }
        },

        created : function() {
            this.Fetch('/app/monster.php', {
                'Id' : this.InputMonster.Id,
                'Language' : DoFensive.Lang
            }).then(data => {
                this.Monster = JSON.parse(data);
                this.Loaded = true;
            }).catch(e => console.error("Failed to fetch " + e.file + " (" + e.status + ")"));

            Vue.component('popover', this.HttpVueLoader('/page/popover.vue'));
            Vue.component('effects', this.HttpVueLoader('/page/effects.vue'));

            // Délégation d'événement pour les 'subspell'
            this.Bus.$on('fetch', (file, data, callback) => {
                this.Fetch(file, data)
                    .then(data => callback(data))
                    .catch(e => console.error("Failed to fetch " + e.file + " (" + e.status + ")"));
            });

            this.Bus.$on('update-subspell', (index, subspell) => {
                if (this.SubSpells[index] === undefined)
                    this.SubSpells[index] = [];

                this.SubSpells[index].push(subspell);
            });

            this.Bus.$on('update-state', (state) => {
                this.States.push(state);
            });
        }
    }
</script>