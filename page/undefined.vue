<template>
    <div id="Undefined">
        <img src="/picture/theme/error.png" :alt="Text.Undefined.Picture" />
        <div class="warning">
            {{ Text.Undefined.Text }}
            <div class="smiley"><div>:(</div></div>
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
                Ga : DoFensive.Ga
            };
        },

        created : function() {
            this.Ga('send', {
                hitType : "event",
                eventCategory : "Page",
                eventAction : "Show",
                eventLabel : "Undefined"
            });
        },

        metaInfo : function() {
            return {
                title : this.Text.Undefined.Title,
            };
        }
    }
</script>

<style type="text/css">
    #Page {
        padding : 30px 0 !important;
    }

    #Undefined {
        position : relative;
    }

    #Undefined .warning {
        width : 100%;
        margin-top : 30px;
        padding : 10px;
        background-color : rgba(167, 36, 36, 0.6);
        text-align : center;
        font-size : 2.5em;
        font-variant : small-caps;
        color : #FFF;
    }

    #Undefined .smiley {
        font-size : 2em;
    }

    #Undefined .smiley div {
        display : inline-block;
        transform : rotate(45deg);
    }
</style>