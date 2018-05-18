<template>
    <div @mouseenter="Show()" @mouseleave="Hide()" ref="element">
        <span v-html="Body"></span>
        <div class="popover top" v-show="ComputedShowed" ref="popover" @mouseenter="Hide()">
            <div class="arrow"></div>
            <div class="popover-content" v-html="Data"></div>
        </div>
    </div>
</template>

<script type="text/javascript">
    module.exports = {
        props : {
            body : {
                type : [String, Number, Boolean],
                default : ''
            },
            
            data : {
                type : [String, Number, Boolean],
                default : ''
            }
        },

        data : function() {
            return {
                Showed : false,
                ArrowSize : 16
            };
        },

        computed : {
            Body : function() {
                return this.body;
            },

            Data : function() {
                return this.data;
            },

            ComputedShowed : function() {
                return this.Showed;
            }
        },

        methods : {
            Show : function() {
                this.Showed = true;
                this.Update();
            },

            Hide : function() {
                this.Showed = false;
            },

            Update : function() {
                this.$nextTick(function() {
                    if (this.$refs.popover !== undefined) {
                        this.$refs.popover.style.top = -(this.$refs.popover.clientHeight + this.ArrowSize) + 'px';
                        this.$refs.popover.style.left = ((this.$refs.element.offsetWidth - this.$refs.popover.offsetWidth) / 2) + 'px';
                    }
                });
            }
        }
    }
</script>