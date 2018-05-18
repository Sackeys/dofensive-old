<template>
    <section>
        <ul v-if="IsSubSpell" class="subline">
            <div v-for="(spellLevel, indexLevel) in ComputedSpell.Value.Levels" :key="indexLevel">
                <h5><a :href="'https://www.dofus.com' + Text.Spell.Uri + '?id=' + ComputedSpell.Value.Id + '&level=' + (indexLevel + 1)" target="_blank">{{ Text.Common.Level }} {{ indexLevel + 1 }}</a></h5>
                <li class="line" v-for="(effect, index) in DynamicEffect(indexLevel)" :key="index">
                    <popover v-if="effect.Picture.Id !== 0" class="picture icon" :style="'background : url(\'/picture/template/effect/' + effect.Picture.Id + '.png\');'" :data="effect.Picture.Name">
                    </popover><div v-else class="picture icon"></div><div class="text">
                        <span v-if="effect.Type.Id === -1 && effect.Name.length === 0">Aucun effet</span>
                        <span v-else-if="effect.Type.Id <= 0" v-html="effect.Name"></span>
                        <a v-else-if="effect.Type.Id === 1 && !IsRecursive(effect.Type.Value)" href="javascript:void(0);" v-html="effect.Name" @click="GetSubSpell(effect.Type.Value, indexLevel, index)"></a>
                        <span v-else-if="effect.Type.Id === 1" v-html="effect.Name + ' <strong>(récursif)</strong>'"></span>
                        <popover class="icon state" v-else-if="effect.Type.Id === 2" href="javascript:void(0);" :body="effect.Name" :data="GetStateInfos(effect.Type.Value)"></popover>
                        <a v-else-if="effect.Type.Id === 3" :href="GetMonsterUri(effect.Type.Value)" target="_blank" v-html="effect.Name"></a>
                        <span class="effectInfos">{{ GetEffectInfos(effect) }}</span>
                    </div><popover class="icon area" :style="'background-image : url(\'/picture/template/area/' + effect.Zone.Id + '.png\');'" :data="GetZoneInfos(effect)"></popover>
                    <transition name="drop-right">
                        <effects v-if="effect.Type.Id === 1 && IsVisible(indexLevel, index) && ComputedSubSpell !== undefined" :data="{ Bus : Bus, Spell : ComputedSubSpell, SpellSelection : ComputedSubSpell.Index, Type : data.Type, SubSpells : ComputedSubSpells, LocalSubSpells : JSON.parse(JSON.stringify(ComputedLocalSubSpells)), IsSubSpell : true, Depth : ComputedDepth + 1, States : States }"></effects>
                    </transition>
                </li>
            </div>
        </ul>
        <ul v-else>
            <li class="line" v-for="(effect, index) in ComputedEffects" :key="index">
                <popover v-if="effect.Picture.Id !== 0" class="picture icon" :style="'background-image : url(\'/picture/template/effect/' + effect.Picture.Id + '.png\');'" :data="effect.Picture.Name">
                </popover><div v-else class="picture icon"></div><div class="text">
                    <span v-if="effect.Type.Id === -1 && effect.Name.length === 0">Aucun effet</span>
                    <span v-else-if="effect.Type.Id <= 0" v-html="effect.Name"></span>
                    <a v-else-if="effect.Type.Id === 1 && !IsRecursive(effect.Type.Value)" href="javascript:void(0);" v-html="effect.Name" @click="GetSubSpell(effect.Type.Value, data.SpellSelection, index)"></a>
                    <span v-else-if="effect.Type.Id === 1" v-html="effect.Name + ' <strong>(récursif)</strong>'"></span>
                    <popover class="icon state" v-else-if="effect.Type.Id === 2" href="javascript:void(0);" :body="effect.Name" :data="GetStateInfos(effect.Type.Value)"></popover>
                    <a v-else-if="effect.Type.Id === 3" :href="GetMonsterUri(effect.Type.Value)" target="_blank" v-html="effect.Name"></a>
                    <span class="effectInfos">{{ GetEffectInfos(effect) }}</span>
                </div><popover class="icon area" :style="'background-image : url(\'/picture/template/area/' + effect.Zone.Id + '.png\');'" :data="GetZoneInfos(effect)"></popover>
                <transition name="drop-right">
                    <effects v-if="effect.Type.Id === 1 && IsVisible(data.SpellSelection, index) && ComputedSubSpell !== undefined" :data="{ Bus : Bus, Spell : ComputedSubSpell, SpellSelection : ComputedSubSpell.Index, Type : data.Type, SubSpells : ComputedSubSpells, LocalSubSpells : JSON.parse(JSON.stringify(ComputedLocalSubSpells)), IsSubSpell : true, Depth : ComputedDepth + 1, States : States }"></effects>
                </transition>
            </li>
        </ul>
    </section>
</template>
<script type="text/javascript">
    module.exports = {
        name : "subspell-effect",

        props : {
            data : {
                type : Object,
                default : {}
            }
        },

        data : function() {
            return {
                Bus : this.data.Bus,
                Text : DoFensive.Text,
                HttpVueLoader : DoFensive.HttpVueLoader,
                Show : [],
                SubSpell : undefined,
                LocalSubSpells : this.data.LocalSubSpells,
                IsSubSpell : this.data.IsSubSpell,
                States : this.data.States
            }
        },

        computed : {
            ComputedSpell : function() {
                return this.data.Spell;
            },

            ComputedEffects : function() {
                return this.ComputedSpell.Value.Levels[this.data.SpellSelection][this.data.Type];
            },

            ComputedSubSpells : function() {
                return this.data.SubSpells;
            },

            ComputedSubSpell : function() {
                return this.SubSpell;
            },

            ComputedLocalSubSpells : function() {
                return this.LocalSubSpells;
            },

            ComputedDepth : function() {
                return this.data.Depth;
            },

            ComputedStates : function() {
                return this.States;
            }
        },

        methods : {
            DynamicEffect : function(id) {
                return this.ComputedSpell.Value.Levels[id]['Effects'];
            },

            IsRecursive : function(id) {
                return id === this.ComputedSpell.Value.Id || this.IsFoundInLocal(id);
            },

            IsFound : function(id) {
                let _result = false;
                for (let subspell of this.ComputedSubSpells) {
                    if (subspell.Index === id) {
                        _result = true;
                        break;
                    }
                }

                return _result;
            },

            IsFoundInLocal : function(id) {
                let _result = false;
                for (let subspell of this.ComputedLocalSubSpells) {
                    if (subspell === id) {
                        _result = true;
                        break;
                    }
                }

                return _result;
            },

            IsVisible : function(i1, i2) {
                let _exists = false,
                    _result = false,
                    _index = this.ComputedSpell.Value.Id + '-' + i1 + '-' + i2 + '-' + this.ComputedDepth;
                for (let showItem of this.Show) {
                    if (showItem.Index === _index) {
                        _exists = true;
                        _result = showItem.Value;
                        break;
                    }
                }

                if (!_exists) {
                    this.Show.push({
                        Index : _index,
                        Value : false
                    });
                }

                return _result;
            },

            GetMonsterUri : function(id) {
                return '/' + DoFensive.Lang + '/monster/' + id;
            },

            GetSubSpell : function(id, i1, i2) {
                let _index = id + '-' + i1 + '-' + i2 + '-' + this.ComputedDepth;
                if (!this.IsFound(_index)) {
                    this.Bus.$emit('fetch', '/app/spell.php', {
                        'Id' : id,
                        'Language' : DoFensive.Lang
                    }, data => {
                        this.SubSpell = {
                            Index : _index,
                            Value : JSON.parse(data)
                        };
                        this.LocalSubSpells.push(this.SubSpell.Id);
                        this.Bus.$emit('update-subspell', this.ComputedSpell.Index, this.SubSpell);
                        this.ShowSubSpell(i1, i2);
                    });
                }
                else {
                    let _subspell = undefined;
                    for (let subspell of this.ComputedSubSpells) {
                        if (subspell.Index === _index) {
                            _subspell = subspell;
                            break;
                        }
                    }

                    if (_subspell !== undefined) {
                        this.SubSpell = _subspell;
                        if (!this.IsFoundInLocal(this.SubSpell.Id))
                            this.LocalSubSpells.push(this.SubSpell.Id);
                        this.ShowSubSpell(i1, i2);
                    }
                }   
            },

            ShowSubSpell : function(i1, i2) {
                let _index = this.ComputedSpell.Value.Id + '-' + i1 + '-' + i2 + '-' + this.ComputedDepth;
                for (let i in this.Show) {
                    if (this.Show[i].Index === _index) {
                        this.$set(this.Show, i, {
                            Index : _index,
                            Value : !this.IsVisible(i1, i2)
                        });
                        break;
                    }
                }
            },

            GetEffectInfos : function(effect) {
                let _text = '',
                    _infos = [];

                if (effect.Delay > 0)
                    _infos.push(this.Text.Spell.Delay.replace(/#1/g, (effect.Delay === 1 ? '' : 's')).replace(/#2/g, effect.Delay));
                if (effect.Duration > 0)
                    _infos.push(this.Text.Spell.Duration.replace(/#1/g, (effect.Duration === 1 ? '' : 's')).replace(/#2/g, effect.Duration));
                else if (effect.Duration === -1)
                    _infos.push(this.Text.Spell.InfiniteDuration);
                if (effect.Probability > 0)
                    _infos.push(this.Text.Spell.Probability.replace(/#2/g, effect.Probability));
                
                let _maxIndex = _infos.length - 1;
                if (_maxIndex >= 0) {
                    _text += '(';
                    _infos.forEach((info, index) => {
                        _text += info;
                        if (index < _maxIndex)
                            _text += ', ';
                    });
                    _text += ')';
                }

                return _text;
            },

            GetZoneInfos : function(effect) {
                let _text = '<strong>' + effect.Zone.Value + '</strong>';

                if (effect.Targets.length > 0 || effect.Exceptions.length > 0) {
                    _text += '<hr /><div class="target">';

                    effect.Targets.forEach(target => {
                        _text += '<p>' + this.Text.Spell.Targets[target] + '</p>';
                    });

                    if (effect.Exceptions.length > 0) {
                        let _exceptions = '';
                        effect.Exceptions.forEach((monster, index) => {
                            _exceptions += '<em>' + monster.Name + '</em>';
                            if (index < effect.Exceptions.length - 1)
                                _exceptions += ', ';
                        });

                        _text += '<p>' + DoFensive.Plurial(this.Text.Spell.Exception, effect.Exceptions.length).replace(/#2/g, _exceptions) + '</p>';
                    }

                    _text += '</div>';
                }

                return _text;
            },

            GetStateInfos : function(id) {
                let _found = undefined;
                for (let state of this.ComputedStates) {
                    if (state.Id === id) {
                        _found = state;
                        break;
                    }
                }

                if (_found === undefined) {
                    this.Bus.$emit('fetch', '/app/state.php', {
                        'Id' : id
                    }, data => {
                        _found = JSON.parse(data);
                        this.Bus.$emit('update-state', _found);
                        return this.StateInfos(_found);
                    });
                }
                else
                    return this.StateInfos(_found);
            },

            StateInfos : function(state) {
                let _lines = [];
                if (state.Invulnerable)
                    _lines.push(this.Text.Spell.Invulnerable);
                if (state.InvulnerableMelee)
                    _lines.push(this.Text.Spell.InvulnerableMelee);
                if (state.InvulnerableRange)
                    _lines.push(this.Text.Spell.InvulnerableRange);
                if (state.Incurable)
                    _lines.push(this.Text.Spell.Incurable);
                if (state.PreventsSpellCast)
                    _lines.push(this.Text.Spell.PreventsSpellCast);
                if (state.PreventsFight)
                    _lines.push(this.Text.Spell.PreventsFight);
                if (state.CantBeMoved)
                    _lines.push(this.Text.Spell.CantBeMoved);
                if (state.CantBePushed)
                    _lines.push(this.Text.Spell.CantBePushed);
                if (state.CantDealDamage)
                    _lines.push(this.Text.Spell.CantDealDamage);
                if (state.CantSwitchPosition)
                    _lines.push(this.Text.Spell.CantSwitchPosition);

                if (_lines.length === 0)
                    return '<p class="state">' + this.Text.Spell.NoInformation + '</p>';
                
                let _txt = '';
                _lines.forEach(line => {
                    _txt += '<p class="state">' + line + '</p>';
                });
                return _txt;
            }
        },

        created : function() {
            Vue.component('popover', this.HttpVueLoader('/page/popover.vue'));

            // Réinitialise les composants si l'utilisateur choisit un autre sort
            this.Bus.$on('reset', () => {
                this.Show = [];
            });
        }
    }
</script>