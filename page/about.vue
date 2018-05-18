<template>
    <div id="About" class="innerPage">
        <h1 class="title">{{ Text.About.Title1 }}</h1>
        <p v-html="Text.About.Text1"></p>
        <p v-html="Text.About.Text2"></p>

        <h1 class="title">{{ Text.About.Title2 }}</h1>
        <p v-html="Text.About.Text3"></p>

        <h1 class="title">{{ Text.About.Title3 }}</h1>
        <p v-html="Text.About.Text4"></p>
        <p v-html="Text.About.Text5"></p>
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
                eventLabel : "About"
            });
        },

        metaInfo : function() {
            return {
                title : this.Text.About.Title,
                meta : [
                    {
                        vmid : 'description',
                        name : 'description',
                        content : this.Text.About.Description
                    },
                    {
                        vmid : 'keywords',
                        name : 'keywords',
                        content : this.Text.Common.Tags + ', ' + this.Text.About.Tags
                    }
                ]
            };
        }
    }
</script>

<style type="text/css">
    #Page #About p {
        text-align : justify;
    }
</style>