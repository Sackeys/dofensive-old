 var Tableau = [
 	{
 		Id : 'statistiques',
 		Titre : 'Caractéristiques',
 		Contenu : [
		 	{
		 		Titre : 'Statistiques principales',
		 		Contenu : [
		 			[Rune.Vi, Rune.Pa.Vi, Rune.Ra.Vi],
		 			[Rune.Sa, Rune.Pa.Sa, Rune.Ra.Sa],
		 			[Rune.Fo, Rune.Pa.Fo, Rune.Ra.Fo],
		 			[Rune.Ine, Rune.Pa.Ine, Rune.Ra.Ine],
		 			[Rune.Cha, Rune.Pa.Cha, Rune.Ra.Cha],
		 			[Rune.Age, Rune.Pa.Age, Rune.Ra.Age],
		 			[Rune.Pui, Rune.Pa.Pui, Rune.Ra.Pui],
		 			[Rune.Pi.Per, Rune.Pa.Pi.Per, Rune.Ra.Pi.Per]
		 		]
		 	},
		   	{
		 		Titre : 'Statistiques capitales',
		 		Contenu : [
		 			[Rune.Ga.Pa, Rune.Ga.Pm, Rune.Po],
		 			[Rune.Cri, Rune.Invo],
		 			[Rune.So, Rune.Pa.So]
		 		]
		 	},
		   	{
		 		Titre : 'Statistiques de mobilité',
		 		Contenu : [
		 			[Rune.Tac, Rune.Pa.Tac],
		 			[Rune.Fui, Rune.Pa.Fui],
		 			[Rune.Ret.Pa, Rune.Pa.Ret.Pa],
		 			[Rune.Ret.Pme, Rune.Pa.Ret.Pme]
		 		]
		 	},
		   	{
		 		Titre : 'Statistiques utilitaires',
		 		Contenu : [
		 			[Rune.Ini, Rune.Pa.Ini, Rune.Ra.Ini],
		 			[Rune.Pod, Rune.Pa.Pod, Rune.Ra.Pod],
		 			[Rune.Prospe, Rune.Pa.Prospe],
		 			[Rune.Chasse]
		 		]
		 	}
		]
	},

   	{
   		Id : 'dommages',
   		Titre : 'Dommages',
   		Contenu : [
   			{
		 		Titre : 'Dommages (fixes)',
		 		Contenu : [
		 			[Rune.Do.Base, Rune.Do.Ren],
		 			[Rune.Do.Cri, Rune.Pa.Do.Cri],
		 			[Rune.Do.Pou, Rune.Pa.Do.Pou],
		 		]
	 		},
	   		{
		 		Titre : 'Dommages (fixes)',
		 		Contenu : [
		 			[Rune.Do.Neutre, Rune.Pa.Do.Neutre],
		 			[Rune.Do.Terre, Rune.Pa.Do.Terre],
		 			[Rune.Do.Feu, Rune.Pa.Do.Feu],
		 			[Rune.Do.Eau, Rune.Pa.Do.Eau],
		 			[Rune.Do.Air, Rune.Pa.Do.Air]
		 		]
	 		},
	   		{
		 		Titre : 'Dommages (%)',
		 		Contenu : [
		 			[Rune.Do.Per.Me, Rune.Do.Per.Di],
		 			[Rune.Do.Per.Ar, Rune.Do.Per.So]
		 		]
	 		},
	   		{
		 		Titre : 'Dommages (pièges)',
		 		Contenu : [
		 			[Rune.Pi.Base, Rune.Pa.Pi.Base]
		 		]
	 		}
   		]
 	},

    {
    	Id : 'resistances',
   		Titre : 'Résistances',
   		Contenu : [
   	   		{
		 		Titre : 'Résistances (%)',
		 		Contenu : [
		 			[Rune.Re.Per.Neutre],
		 			[Rune.Re.Per.Terre],
		 			[Rune.Re.Per.Feu],
		 			[Rune.Re.Per.Eau],
		 			[Rune.Re.Per.Air]
		 		]
	 		},
   			{
		 		Titre : 'Résistances (fixes)',
		 		Contenu : [
		 			[Rune.Re.Neutre, Rune.Pa.Re.Neutre],
		 			[Rune.Re.Terre, Rune.Pa.Re.Terre],
		 			[Rune.Re.Feu, Rune.Pa.Re.Feu],
		 			[Rune.Re.Eau, Rune.Pa.Re.Eau],
		 			[Rune.Re.Air, Rune.Pa.Re.Air]
		 		]
	 		},
	 		{
	 			Titre : 'Résistances (fixes)',
	 			Contenu : [
		 			[Rune.Re.Cri, Rune.Pa.Re.Cri],
		 			[Rune.Re.Pou, Rune.Pa.Re.Pou]
		 		]
	 		},
	   		{
		 		Titre : 'Résistances aux entraves',
		 		Contenu : [
		 			[Rune.Re.Pa, Rune.Pa.Re.Pa],
		 			[Rune.Re.Pme, Rune.Pa.Re.Pme]
		 		]
	 		},
	   		{
		 		Titre : 'Résistances',
		 		Contenu : [
		 			[Rune.Re.Per.Me, Rune.Re.Per.Di]
		 		]
	 		}
   		]
 	}
];

function Ready(callback) {
	if (typeof callback !== 'function') return;
	if (document.readyState === 'complete') return callback();
	document.addEventListener('DOMContentLoaded', callback, false);
}

function ManageCheckbox(options, field) {
	if (options[field]) {
		let _name = document.getElementById('ckb_' + field);
		if (!_name.checked)
			_name.click();
		else // Fix bad behaviour when user click on Back button 
			Change(_name, field);
	}
}

function LocalInit() {
	_local = {
		name : false,
		preview : true,
		optimal : false
	};

	localStorage.setItem('DoMage', JSON.stringify(_local));
	ManageCheckbox(_local, 'preview');
}

function Change(event, field) {
	let _options = JSON.parse(localStorage.getItem('DoMage'));
		_options[field] = event.checked;
	let _display = 'none';

	if (_options[field])
		_display = 'block';

	let _class = document.getElementsByClassName(field);
	Array.prototype.forEach.call(_class, elt => {
		elt.style.display = _display;
	});

	localStorage.setItem('DoMage', JSON.stringify(_options));
}

Ready(function() {
	// Remove webhost ads
	$("#DoMage + div").remove();

	// Table creation
	let page = document.getElementById('global');
	Tableau.forEach(blocObjet => {
		let table = document.createElement('table');
			table.classList.add('division');

		let titre = document.createElement('h2');
			titre.classList.add('division')
			titre.appendChild(document.createTextNode(blocObjet.Titre));

		let bloc = document.createElement('section');
		bloc.setAttribute('id', blocObjet.Id);
		bloc.classList.add('domain');
		bloc.appendChild(titre);

		blocObjet.Contenu.forEach(contenuObjet => {
			let groupe = document.createElement('td');
				groupe.classList.add('group');

			contenuObjet.Contenu.forEach(runeObjet => {
				let column = document.createElement('td');

				runeObjet.forEach(runeObj => {
					// Objet contenant la rune complète
					let cellule = document.createElement('div');
						cellule.classList.add('container');

					// Nom de la rune
					let nom = document.createElement('h3');
						nom.classList.add('name')
						nom.appendChild(document.createTextNode(runeObj.Nom));

					// Encadré composé de l'image
					let conteneur = document.createElement('div');
						conteneur.classList.add('preview');

					let image = document.createElement('div');
						image.classList.add('picture');
						image.style.backgroundImage = 'url("./picture/rune/Rune' + runeObj.Nom.replace(/\s/g, '') + '.png")';

					conteneur.appendChild(image);

					// Informations sur la rune
					let description = document.createElement('div');
						description.classList.add('description');
					
					let poids = document.createElement('p');
						poids.classList.add('weight', 'icon');
						poids.appendChild(document.createTextNode(runeObj.CalculerPoidsTotal()));

					let jetMax = document.createElement('p');
						jetMax.classList.add('optimal', 'icon');
						jetMax.appendChild(document.createTextNode(runeObj.CalculerJetMax()));

					description.appendChild(poids);
					description.appendChild(jetMax);

					// Imbrication des sections dans la cellule
					cellule.appendChild(nom);
					cellule.appendChild(conteneur);
					cellule.appendChild(description);

					// Ajout de la cellule dans la colonne
					column.appendChild(cellule);
				})

				groupe.appendChild(column);
			});

			table.appendChild(groupe);
		});

		bloc.appendChild(table);
		page.appendChild(bloc);
	});

	// Filters process
	let options = JSON.parse(localStorage.getItem('DoMage')) || LocalInit();
	for (let val in options)
		ManageCheckbox(options, val)
});