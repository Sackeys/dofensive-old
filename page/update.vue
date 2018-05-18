<template>
    <div id="Update" class="innerPage">
        <div class="new">
            <h1>Mise à jour 1.0.3</h1><div class="date">23/04/2018</div>
            <ul class="content">
                <li>Ergonomie : la fonction de recherche est revue afin de rendre la navigation plus fluide et moins persistante.</li>
                <li>Correction : l'affichage du site était anormalement surdimensionné pour certaines résolutions.</li>
                <li>Correction : le compteur de lettres en gras est correctement appliqué lorsqu'il s'agit de caractères spéciaux (oe/œ).</li>
            </ul>
        </div>
        <div class="new">
            <h1>Mise à jour 1.0.2</h1><div class="date">14/04/2018</div>
            <ul class="content">
                <li>Correction : la recherche d'un monstre ou d'un donjon composé de caractères accentués retourne de meilleurs résultats.</li>
            </ul>
        </div>
        <div class="new">
            <h1>Mise à jour 1.0.1</h1><div class="date">14/04/2018</div>
            <ul class="content">
                <li>Correction : (DoMage) toutes les runes sont correctement affichées.</li>
                <li>Correction : les redirections prennent correctement en compte le nouveau nom de domaine.</li>
                <li>Correction : l'affichage bloquant des publicités est corrigé.</li>
            </ul>
        </div>
        <div class="new">
            <h1>DoFensive 1.0</h1><div class="date">14/04/2018</div>
            <ul class="content">
                <li class="announce"><strong>Version officielle</strong> : après deux mois de silence, DoFensive fait peau neuve; de nombreuses modifications et améliorations ont été apportées. Je tiens à préciser que des publicités ont été ajoutées sur certaines pages dans le but d'amortir le coût du nom de domaine et du nouveau service d'hébergement.</li>
                <li>Ajout : les données des monstres de la version 2.46 ainsi que leur visuel ont été mis à jour.</li>
                <li>Ajout : le site propose une version intégralement traduite en anglais.</li>
                <li>Performance : le système de génération de fichiers de données a été totalement refondé afin d'optimiser l'import des modifications et d'économiser des ressources serveur.</li>
                <li>Performance : le site se base dorénavant sur un framework fiable. Il s'agissait d'une étape incontournable avant d'intégrer de nouvelles fonctionnalités pour assurer la pérénité du projet sur le long terme. La navigation devrait être plus réactive, et l'information apparaître plus rapidement.</li>
                <li>Performance : la recherche d'un monstre ou d'un donjon est améliorée et devrait être beaucoup plus réactive</li>
                <li>Ergonomie : les grades doublons (qui ne présentent aucune différence) ainsi que les niveaux de sorts doublons sont supprimés. Certains ajustements sont encore à venir afin de prendre en compte tous les cas possibles.</li>
                <li>Ergonomie : il est dorénavant possible de partager un monstre ou une quelconque recherche effectuée en diffusant l'URL. Cette nouvelle architecture permet aussi de favoriser le référencement du site.</li>
                <li>Ergonomie :
                <ul>
                    <li>cliquer sur le nom d'un monstre présent dans les effets d'un sort permet d'accéder directement à sa fiche</li>
                    <li>tous les états sont maintenant détaillés lorsque c'est possible</li>
                    <li>certains sorts considérés comme des effets n'étaient pas détaillés; le problème est corrigé.</li>
                </ul>
                <li>Correction : divers bugs d'affichage ont été corrigés. De part le nombre importants de modifications, de nouveaux problèmes risquent d'être présents.</li>
                <li><strong>Avertissement</strong> : le formulaire de contact n'est plus fonctionnel suites à la refonte de l'architecture du site. J'en profite ainsi pour lancer un serveur Discord pour les personnes désirant discuter du projet de manière moins formelle, proposer des idées ou poser d'éventuelles questions. <a href="https://discord.gg/Z8uRcrb" target="_blank">Rejoindre le Discord.</a></li>
                
                <hr class="announce" />

                <p class="announce"><strong>Top 5 des monstres les plus consultés :</strong></p>
                <p class="announce padding">Solar > Comte Harebourg > Roi Nidas > Reine des Voleurs > Bethel Akarna</p>
                <p class="announce"><strong>Top 5 des donjons les plus consultés :</strong></p>
                <p class="announce padding">Belvédère d'Ilyzaelle > Défi du Chaloeil > Tour de Bethel > Chambre de Tal Kasha > Donjon du Comte Harebourg</p>
            </ul>
        </div>
        <div class="new">
            <h1>Mise à jour B.2.0</h1><div class="date">10/02/2018</div>
            <ul class="content">
                <li>Cette nouvelle version de DoFensive apporte quelques améliorations de performance quand vous recherchez un monstre ou un donjon, ainsi qu'une meilleure gestion du nom de domaine afin de favoriser l'accès au site via l'URL <i>dofensive.fr</i>. Par ailleurs, deux nouveaux projets vous sont présentés.</li>
                <li><strong>DoMage</strong> : ce projet naît d'une insatisfaction des autres fan-sites proposant de l'information sur le poids des runes de forgemagie. Légions sont ceux qui ne sont plus mis à jour ou ne sont tout simplement pas agréables à parcourir. DoMage a été imaginé de sorte à revoir ces deux défauts, et d'assurer une expérience utilisateur optimale. N'hésitez pas à me faire vos retours sur ce qui pourrait être amélioré !</li>
                <li><strong>Skiney</strong> : dédiée aux personnes parcourant régulièrement le forum dofus, Skiney est une extension développée pour Google Chrome (mais devrait aussi fonctionner avec Vivaldi) afin de retrouver une navigation fluide et confortable au sein du forum officiel. Là aussi, si vous avez quelques propositions qui vous feraient plaisir, n'hésitez pas à me les communiquer.</li>
                <li><strong>Pérennité du site</strong> : le prochain patch sera destiné au référencement et à l'étude de changement de serveur. Cela implique qu'il y a de forte chance que de la publicité fasse son apparition. Pas de panique, j'utilise moi aussi un bloqueur de publicité, donc je vous épargne le fameux "<i>Désaktiv adBlok pr finanssé leu siTe</i>". Si, par ailleurs, vous souhaiter devenir partenaire avec DoFensive, contactez-moi par le biais du formulaire de contact disponible tout en bas de la page d'accueil.</li>
            </ul>
        </div>
        <div class="new">
            <h1>Mise à jour B.1.4</h1><div class="date">05/12/2017</div>
            <ul class="content">
                <li><strong>Information</strong> : des statistiques sont élaborées afin de connaître les monstres/donjons/sorts les plus recherchés</li>
                <li>Correction : les monstres de la version 2.45 sont modifiés (ajout de leur aperçu, correction des sorts modifiés)</li>
            </ul>
        </div>
        <div class="new">
            <h1>Mise à jour B.1.3</h1><div class="date">16/11/2017</div>
            <ul class="content">
                <li><strong>Information</strong> : les monstres et donjons de la version 2.45 sont ajoutés</li>
                <li>Correction : les modifications apportées sur les monstres lors des mises à jour précédentes sont dorénavant appliquées</li>
            </ul>
        </div>
        <div class="new">
            <h1>Mise à jour B.1.2</h1><div class="date">16/09/2017</div>
            <ul class="content">
                <li><strong>Information</strong> : les modifications effectuées sur le monstre <i>Hell Mina Ensorcelée</i> seront prises en compte lors de la prochaine mise à jour de la base de données (version 2.44 ou 2.45 du jeu)</li>
                <li>Amélioration : une grande partie des images ont été compressées : le temps de chargement d'une page devrait être réduit</li>
                <li>Correction : saisir une URL invalide redirige correctement vers la page d'accueil du site</li>
                <li>Correction : la page Tipeee a été mise à jour, et diverses corrections orthographiques ont été effectuées</li>
            </ul>
        </div>
        <div class="new">
            <h1>Mise à jour B.1.1</h1><div class="date">06/09/2017</div>
            <ul class="content">
                <li>Ajout : les illustrations des monstres de la version 2.43 sont importées</li>
            </ul>
        </div>
        <div class="new">
            <h1>Ouverture publique de la version Bêta</h1><div class="date">05/09/2017</div>
            <ul class="content">
                <li>Le site passe dorénavant en version Bêta et est accès à tous. Si vous rencontrez un problème ou si vous une question, n'hésitez pas à me contacter !</li>
            </ul>
        </div>
        <div class="new">
            <h1>Mise à jour A.3.1</h1><div class="date">05/09/2017</div>
            <ul class="content">
                <li>Amélioration : les monstres de la version 2.43 sont réimportée; certaines images peuvent être absentes</li>
                <li>Amélioration : lorsque l'image d'un monstre n'est pas chargée, une image par défaut est affichée</li>
                <li>Amélioration : certains textes sont revus</li>
            </ul>
        </div>
        <div class="new">
            <h1>Mise à jour A.3.0</h1><div class="date">04/09/2017</div>
            <ul class="content">
                <li>Ajout : un lien "A propos" présente les motivations du projet plus en détail</li>
                <li>Ajout : un lien "Donations" est ajouté en bas de page afin de soutenir le projet</li>
                <li>Ajout : la recherche par donjon est désormais possible</li>
                <li>Amélioration : la page d'accueil est modifiée en conséquence</li>
                <li>Amélioration : il est possible de chercher plusieurs monstres simultanément</li>
            </ul>
        </div>
        <div class="new">
            <h1>Mise à jour A.2.3</h1><div class="date">02/09/2017</div>
            <ul class="content">
                <li>Ajout : la contrainte "affecte le lanceur" est ajoutée aux effets concernés</li>
                <li>Ajout : la contrainte "n'affecte pas les monstres {x}" est ajoutée aux effets concernés; cette dernière est encore en cours d'étude et peut ne pas toujours représenter la réalité</li>
                <li>Amélioration : les animations flash des monstres sont remplacées par des images PNG; cette modification n'impose plus la présence de Flash sur votre navigateur, permet de corriger l'affichage de certains monstres qui était défaillant, et implique un gain d'espace disque de près de 70%</li>
            </ul>
        </div>
        <div class="new">
            <h1>Mise à jour A.2.2</h1><div class="date">31/08/2017</div>
            <ul class="content">
                <li>Ajout : les effets des glyphes/pièges/runes peuvent dorénavant être visualisés en cliquant dessus</li>
                <li>Ajout : en passant la souris sur une zone, en plus de la taille de cette dernière, les contraintes de l'effet sont ajoutées (par exemple, si l'effet s'applique sur un allié ou un ennemi)</li>
                <li>Ajout : un formulaire de contact a été ajouté en bas de page</li>
                <li>Amélioration : quelques modifications graphiques mineures ont été apportées</li>
                <li>Amélioration : optimisation mineure sur la fermeture d'une page volante</li>
                <li>Correction : certains effets ne voyaient pas leur icône apparaître</li>
                <li>Correction : lorsqu'un utilisateur affiche un monstre qui n'existe pas, une page d'erreur est affichée</li>
            </ul>
        </div>
        <div class="new">
            <h1>Mise à jour A.2.1</h1><div class="date">28/08/2017</div>
            <ul class="content">
                <li>Ajout : chaque effet dispose dorénavant d'une icône afin d'accroître la lisibilité</li>
                <li>Amélioration : ajustements graphiques mineurs pour les supports mobiles</li>
                <li>Amélioration : la génération des fichiers flash en interne a été fortement automatisée; la mise à jour des fichiers de données prendra moins de temps, et l'espace disque occupé par les fichiers flash est réduit de 70%</li>
                <li>Amélioration : les informations primaires (PA, PO, CC) des sous sorts sont supprimées; elles étaient source de confusion et ne reflétaient pas le comportement du sort concerné</li>
                <li>Correction : certains monstres à l'apparence humanoïde ne s'affichaient pas correctement; le problème est résolu</li>
            </ul>
        </div>
        <div class="new">
            <h1>Mise à jour A.2.0</h1><div class="date">24/08/2017</div>
            <ul class="content">
                <li>Ajout : des informations supplémentaires sont affichées pour les sous-sorts</li>
                <li>Ajout : une icône de chargement est ajoutée lors de l'affichage de caractéristiques ou d'un sort</li>
                <li>Ajout : la page d'accueil du site a été rédigée</li>
                <li>Amélioration : le logo et le background du site sont remplacés - diverses modifications graphiques accompagnent ce changement de thème</li>
                <li>Amélioration : l'icône de chargement d'un monstre est retravaillée</li>
                <li>Amélioration : optimisation de certaines feuilles de style et de certains scripts</li>
                <li>Amélioration : optimisation du fonctionnement des pages et fluidification des animations</li>
                <li>Amélioration : les polices d'écriture ont été intégralement changées</li>
                <li>Amélioration : certains affichages sont optimisés pour les écrans de petite taille (incluant tablettes et smartphones)</li>
                <li>Amélioration : l'affichage de l’icône de fermeture d'une fenêtre ne chevauche plus les niveaux d'un monstre</li>
                <li>Amélioration : l'affichage des infobulles est optimisé</li>
                <li>Correction : l'infobulle au passage de la souris ne reste pas anormalement visible dans de rares cas</li>
                <li>Correction : un sort ne disposant pas d'effet affiche correctement "Aucun effet"</li>
            </ul>
        </div>
        <div class="new">
            <h1>Mise à jour A.1.1</h1><div class="date">18/08/2017</div>
            <ul class="content">
                <li>Ajout : intégration des monstres de la version 2.43</li>
                <li>Ajout : les fiches de sort indique si ce dernier nécessite une ligne de vue ou non</li>
                <li>Ajout : 8 nouvelles zones d'effet ont été reliées aux effets correspondant</li>
                <li>Ajout : les idoles et challenges incompatibles avec un monstre sont ajoutés</li>
                <li>Ajout : croix en haut à droite pour fermer une page flottante; la disposition des niveaux d'un monstre est modifiée</li>
                <li>Amélioration : modifications structurales et optimisation de la génération des fiches de monstres afin de charger des objets lourds plus rapidement et de réduire certaines latences du navigateur</li>
                <li>Amélioration : une icône différente est attachée à un sort à PO non modifiable</li>
                <li>Correction : la zone en croix distante de taille 1 n'est plus considérée comme une zone en croix simple</li>
            </ul>
        </div>
        <div class="new">
            <h1>Ouverture du site - Version Alpha</h1><div class="date">09/08/2017</div>
            <ul class="content">
                <li>DoFensive est dorénavant disponible à une poignée de joueurs afin d'avoir les premiers retours sur le projet ainsi que de corriger les principaux bugs rencontrés. De nombreuses améliorations sont prévues dans les semaines à venir afin de fournir des informations précises et fiables sur les sorts des monstres.</li>
            </ul>
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
                eventLabel : "Update"
            });
        },

        metaInfo : function() {
            return {
                title : this.Text.Update.Title,
                meta : [
                    {
                        vmid : 'description',
                        name : 'description',
                        content : this.Text.Update.Description
                    },
                    {
                        vmid : 'keywords',
                        name : 'keywords',
                        content : this.Text.Common.Tags + ', ' + this.Text.Update.Tags
                    }
                ]
            };
        }
    }
</script>

<style type="text/css">
#Page #Update h1 {
    margin : 0 0 0 50px;
    font-size: 3em;
    font-family: 'Titillium Web', sans-serif;
    font-weight: bolder;
	color: #9C7035;
}

#Page #Update .new {
	width : 95%;
	margin : 10px auto;
	padding : 20px 5% 40px 5%;
	border-bottom : 1px solid grey;
}

#Page #Update .new:last-child {
	margin-bottom : 0;
	padding-bottom : 0;
	border-bottom : none;
}

#Page #Update .date {
    margin : 0 0 10px 50px;
	font-size : 1.5em;
	font-family : 'Titillium Web', sans-serif;
	font-variant : small-caps;
}

#Page #Update ul {
	list-style-type : none;
}

#Page #Update ul li, #Page #Update p.announce {
	margin : 3px 0 3px 20px;
    text-align : justify;
}

#Page #Update ul li:before {
	content : "›";
	font-family : 'Titillium Web', sans-serif;
	font-size : 1.5em;
	color : #925C27;
	margin-right : 5px;
}

#Page #Update .type {
	font-weight : bolder;
}

#Page #Update li.announce strong {
    text-transform : uppercase;
    color : #C4361D;
}

#Page #Update hr.announce {
    width : 60%;
    margin : 30px auto;
}
</style>