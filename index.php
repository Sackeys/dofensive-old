<?php
    require_once('./app/dofensive.php');
?>
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8" />
	<title>DoFensive</title>
	<meta data-vmid="description" name="description" content="Découvrez toutes les moindres spécificités de chaque monstre et donjon du MMORPG Dofus. Caractéristiques, sorts, loots... Vos ennemis n'auront plus de secret pour vous !" data-vue-meta="true" />
	<meta data-vmid="keywords" name="keywords" content="dofensive, dofus, sackey, bestiaire, recherche, entraide, help, search, encyclopédie, mob, monster, monstre, ennemi, stratégie, strategy, spell, cast, sort, technique, boss, donjon, ankama, amakna, portée, range, characteristic, caractéristique, résistance, faiblesse, pm, pa, retrait, entrave" data-vue-meta="true" />
	<link rel="icon" type="image/png" href="/picture/theme/icon.png" />
	<link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Questrial|Roboto:400,700|Titillium+Web:400,700">
	<link rel="stylesheet" type="text/css" href="/style/theme.css" />
	<link rel="stylesheet" type="text/css" href="/style/index.css" />
	<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
	<script type="text/javascript">
		(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
		(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
		m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
		})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
		ga('create', 'UA-77271722-2', 'auto');
		ga('send', 'pageview');

		// Extensions de la vue
		var Mixin = [];
	</script>
	<script type="text/javascript" src="/script/vue.js"></script>
	<script type="text/javascript" src="/script/vue-router.js"></script>
	<script type="text/javascript" src="/script/vue-meta.js"></script>
	<script type="text/javascript" src="/script/httpVueLoader.js"></script>
</head>
<body>
	<div id="DoFensive" v-if="Loaded" v-cloak>
		<transition name="drop-down" @leave="EndedClose()">
			<section id="Page" v-if="ShowPage" ref="page">
				<div id="Close" @click="Close()"></div>
				<keep-alive>
					<router-view :data="DataPage"></router-view>
				</keep-alive>
			</section>
		</transition>
		<transition name="fade">
			<section id="Cache" v-if="ShowPage" @click="Close()"></section>
		</transition>

		<section id="Base">
			<header class="main">
				<section class="toolbar">
					<div :class="['inline', 'lang', 'langItem', { 'selected' : ShowLanguages }]" ref="Lang">
						<div class="inline"><img :src="'/picture/theme/' + Lang + '.jpg'" :alt="Lang" /></div>
						<div class="inline">{{ Lang.toUpperCase() }}</div>
					</div>
					<ul class="languages" v-show="ShowLanguages">
						<li class="langItem" v-for="lang in Languages" v-show="Lang != lang" v-on:click="SetLang(lang)">
							<div class="inline"><img :src="'/picture/theme/' + lang + '.jpg'" :alt="lang" /></div>
							<div class="inline">{{ lang.toUpperCase() }}</div>
						</li>
					</ul>
				</section>
		
				<section class="title">
					<h1>
						<span class="do">Do</span><span class="fensive">Fensive</span>
					</h1>
				</section>
			</header>

			<section class="main">
				<nav id="domain">
					<div :class="['btn',  { 'selected' : Form.Monster.Selected }]" @click="ToggleDomain('Monster')"><span class="default">{{ Text.Index.SearchByMonster }}</span><span class="responsive">{{ Text.Common.Monster }}</span></div>
					<div :class="['btn',  { 'selected' : Form.Dungeon.Selected }]" @click="ToggleDomain('Dungeon')"><span class="default">{{ Text.Index.SearchByDungeon }}</span><span class="responsive">{{ Text.Common.Dungeon }}</span></div>
				</nav>

				<div class="foreground" v-for="field in Fields" v-show="Form[field].Selected">
					<div class="search">
						<div :class="['field', { selected : Form[field].Selected }]">
							<div class="list" v-show="Form[field].SelectedItems.length > 0">
								<ul>
									<li class="selectedItem" v-for="item in Form[field].SelectedItems" @click="Remove(field, item)">
										{{ item.Name }}
									</li>
								</ul>
							</div>

							<div class="input">
								<div class="icon"></div>
								<input type="text" v-model="Form[field].Value" :ref="field" :placeholder="Text.Index[Form[field].Placeholder]" @click="ForceUpdateItems(field, Form[field].Value)" @focus="UpdateItems(field, Form[field].Value)" @blur="HideItems(field)" @keydown.down="Next(field)" @keydown.up="Previous(field)" @keydown.esc="HideItems(field)" @keydown.enter="Submit(field)" />
							</div>
						</div>

						<input type="button" value="✓ Go" @click="Submit(field)" />
					</div>

					<ul class="autocompletion" v-show="Form[field].ShowAutocomplete" :ref="field + 'Autocomplete'">
						<li v-show="Form[field].Items.length === 0 && Form[field].Value.length > 0" class="noresult">
							{{ Text.Index.NoResultFound }} "<strong>{{ Form[field].Value }}</strong>"
						</li>
						<li v-for="(item, index) in Form[field].Items" class="flex" @mousedown="Add(field, index)" @mouseenter="Select(field, index)" @mouseleave="Unselect(field)" :ref="field + 'Item'">
							<div class="inline type" :data-type="item.Type" v-if="Form[field].Name === 'Monster'"></div>
							<div class="inline name" v-html="item.Html"></div>
							<div class="inline level" v-if="Form[field].Name === 'Monster'">{{ (item.MinLvl < item.MaxLvl) ? Text.Common.Level + ' ' + item.MinLvl + ' ' + Text.Common.To + ' ' +  Text.Common.Level + ' ' + item.MaxLvl : Text.Common.Level + ' ' + item.MinLvl }}</div>
							<div class="inline level" v-if="Form[field].Name === 'Dungeon'">{{ Text.Common.Level + ' ' + item.Lvl }}</div>
						</li>
					</ul>
				</div>
			</section>

			<section>
				<ins class="adsbygoogle"
					style="display:block"
					data-ad-client="ca-pub-1811789331501645"
					data-ad-slot="8229254401"
					data-ad-format="auto"></ins>
			</section>

			<section class="description">
				<table>
					<tr>
						<td class="t1" rowspan="4">
							<img src="/picture/theme/monsters.png" alt="Boss" />
							<div class="sub"><p v-html="Text.Index.StatisticDescription.replace('#1', '<div class=\'number\'><?php echo Dofensive::MONSTERS_COUNT; ?></div>')"></p> <p><a href="javascript:void(0)" class="link" @click="Open('about')">{{ Text.Index.StatisticDescriptionMore }}</a></p></div>
						</td>

						<td></td>

						<td class="t1" rowspan="4">
							<img src="/picture/theme/dofus.png" alt="Dofus" />
							<div class="sub">
								<h3 class="version" v-html="Text.Index.WebsiteVersion.replace('#1', '<strong><?php echo Dofensive::WEBSITE_VERSION; ?></strong>')"></h3>
								<p><a href="javascript:void(0)" class="link" @click="Open('update')">{{ Text.Index.WebsiteDescriptionNotes }}</a> {{ Text.Index.WebsiteDescription }}</p>
							</div>
							<div class="sub">
								<h3 class="version" v-html="Text.Index.GameVersion.replace('#1', '<strong><?php echo Dofensive::GAME_VERSION; ?></strong>')"></h3>
								<p>{{ Text.Index.GameDescription }}</p>
							</div>
						</td>
					</tr>

					<tr>
						<td valign="top">
							<a href="/DoMage" target="_blank" class="partner domage" @mouseenter="ShowDescription('DoMage')" @mouseleave="HideDescription('DoMage')" @click="GaFor('DoMage')">
								<div class="item">DoMage</div>
								<transition name="slide-fade">
									<div class="description" v-show="Advert.DoMage">{{ Text.Index.DoMage }}</div>
								</transition>
							</a>
						</td>
					</tr>

					<tr>
						<td class="middlePadding" valign="middle">
							<a href="https://chrome.google.com/webstore/detail/skiney-theme/gcclopehapogkhjanenagheemmnfoicb" target="_blank" class="partner skiney" @mouseenter="ShowDescription('Skiney')" @mouseleave="HideDescription('Skiney')" @click="GaFor('Skiney')">
								<div class="item">Skiney</div>
								<transition name="slide-fade">
									<div class="description" v-show="Advert.Skiney">{{ Text.Index.Skiney }}</div>
								</transition>
							</a>
						</td>
					</tr>

					<tr>
						<td valign="bottom">
							<a href="javascript:void(0)" class="partner other link" @click="Open('contact')" @mouseenter="ShowDescription('Partner')" @mouseleave="HideDescription('Partner')">
								<div class="item">{{ Text.Index.You }}</div>
								<transition name="slide-fade">
									<div class="description" v-show="Advert.Partner">{{ Text.Index.Partner }}</div>
								</transition>
							</a>
						</td>
					</tr>
				</table>
			</section>

			<div class="footerSpace">
			</div>

			<footer class="main">
				<strong>DoFensive - {{ Text.Common.Version.replace('#1', '<?php echo Dofensive::WEBSITE_VERSION; ?>') }}</strong> (<?php echo date('Y'); ?>) | <span v-html="Text.Common.Copyrights.replace('#1', '<i><a href=\'https://www.ankama.com/' + Lang + '/games\' target=\'_blank\' style=\'color : white;\'>' + Text.Common.Company + '</a></i>')"></span> | <a href="javascript:void(0)" class="link" @click="Open('update')">{{ Text.Common.Notes }}</a> | <a href="javascript:void(0)" class="link" @click="Open('about')">{{ Text.Common.About }}</a> | <a href="javascript:void(0)" class="link" @click="Open('contact')">{{ Text.Common.Contact }}</a> | <a href="https://discord.gg/Z8uRcrb" target="_blank" @click="GaFor('Discord')">{{ Text.Common.Discord }}</a> | <a href="https://www.tipeee.com/sackey" target="_blank" @click="GaFor('Tipeee')">{{ Text.Common.Donate }}</a>
			</footer>
		</section>
	</div>

	<script type="text/javascript" src="/script/index.js"></script>
	<script type="text/javascript" src="/script/dofensive.js"></script>
</body>
</html>