<template>
    <div id="Contact" class="innerPage">
        <h1 class="title">{{ Text.Contact.Title }}</h1>
        <p>
            {{ Text.Contact.Text }}
        </p>
        <section class="ways">
            <a class="contactLink discord" href="https://discord.gg/Z8uRcrb" target="_blank" @click="GaFor('Discord')">
                <div class="inline"><img src="/picture/theme/discord.png" :alt="Text.Common.Discord" /></div>
                <div class="name inline">{{ Text.Common.Discord }}</div>
            </a>
            <a class="contactLink twitter" href="https://twitter.com/ItsukiSackey" target="_blank" @click="GaFor('Twitter')">
                <div class="inline"><img src="/picture/theme/twitter.png" :alt="Text.Common.Twitter" /></div>
                <div class="name inline">{{ Text.Common.Twitter }}</div>
            </a>
        </section>
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
            }
        },

        methods : {
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
            this.Ga('send', {
                hitType : "event",
                eventCategory : "Page",
                eventAction : "Show",
                eventLabel : "Contact"
            });
        },

        metaInfo : function() {
            return {
                title : this.Text.Contact.Title,
                meta : [
                    {
                        vmid : 'description',
                        name : 'description',
                        content : this.Text.Contact.Description
                    },
                    {
                        vmid : 'keywords',
                        name : 'keywords',
                        content : this.Text.Common.Tags + ', ' + this.Text.Contact.Tags
                    }
                ]
            };
        }
    }
</script>

<style type="text/css">
    #Page #Contact p {
        text-align : justify;
    }

    #Page #Contact .ways {
        text-align : center;
    }

    #Page #Contact a.contactLink {
        display : inline-block;
        margin : 20px 50px;
        padding : 30px;
        border-radius : 8px;
        background : #2E2E2E;
        color : #F3F3F3;
    }

    #Page #Contact a.contactLink.discord:hover {
        color : #8c9eff;
    }

    #Page #Contact a.contactLink.twitter:hover {
        color : #1da1f2;
    }

    #Page #Contact .name {
        margin-left : 30px;
        font-size : 3em;
    }
</style>