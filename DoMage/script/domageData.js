/* Énumération des noms */
var Nom = {
	Vi : "Vi",
	Sa : "Sa",
	Fo : "Fo",
	Ine : "Ine",
	Cha : "Cha",
	Age : "Age",
	Pui : "Pui",

	Cri : "Cri",
	Po : "Po",
	Invo : "Invo",
	So : "So",
	Tac : "Tac",
	Fui : "Fui",
	Ini : "Ini",
	Prospe : "Prospe",
	Pod : "Pod",
	Chasse : "Chasse",

	Ga : {
		Pa : "Ga Pa",
		Pm : "Ga Pme"
	},

	Do : {
		Base : "Do",
		Neutre : "Do Neutre",
		Terre : "Do Terre",
		Feu : "Do Feu",
		Eau : "Do Eau",
		Air : "Do Air",
		Cri : "Do Cri",
		Pou : "Do Pou",
		Ren : "Do Ren",
		Per : {
			Me : "Do Per Mé",
			Ar : "Do Per Ar",
			So : "Do Per So",
			Di : "Do Per Di"
		}
	},

	Re : {
		Neutre : "Ré Neutre",
		Terre : "Ré Terre",
		Feu : "Ré Feu",
		Eau : "Ré Eau",
		Air : "Ré Air",
		Cri : "Ré Cri",
		Pou : "Ré Pou",
		Pa : "Ré Pa",
		Pme : "Ré Pme",
		Per : {
			Neutre : "Ré Per Neutre",
			Terre : "Ré Per Terre",
			Feu : "Ré Per Feu",
			Eau : "Ré Per Eau",
			Air : "Ré Per Air",
			Me : "Ré Per Mé",
			Di : "Ré Per Di"
		}
	},

	Ret : {
		Pa : "Ret Pa",
		Pme : "Ret Pme"
	},

	Pi :  {
		Base : "Pi",
		Per : "Pi Per"
	},
};


/* Énumération des poids unitaires */
var Poids = {
	Vi : 0.2,
	Sa : 3,
	Fo : 1,
	Ine : 1,
	Cha : 1,
	Age : 1,
	Pui : 2,

	Cri : 10,
	Po : 51,
	Invo : 30,
	So : 10,
	Tac : 4,
	Fui : 4,
	Ini : 0.1,
	Prospe : 3,
	Pod : 0.25,
	Chasse : 5,

	Ga : {
		Pa : 100,
		Pm : 90
	},

	Do : {
		Base : 20,
		Neutre : 5,
		Terre : 5,
		Feu : 5,
		Eau : 5,
		Air : 5,
		Cri : 5,
		Pou : 5,
		Ren : 5,
		Per : {
			Me : 15,
			Ar : 15,
			So : 15,
			Di : 15
		}
	},

	Re : {
		Neutre : 2,
		Terre : 2,
		Feu : 2,
		Eau : 2,
		Air : 2,
		Cri : 2,
		Pou : 2,
		Pa : 7,
		Pme : 7,
		Per : {
			Neutre : 6,
			Terre : 6,
			Feu : 6,
			Eau : 6,
			Air : 6,
			Me : 15,
			Di : 15
		}
	},

	Ret : {
		Pa : 7,
		Pme : 7
	},

	Pi :  {
		Base : 5,
		Per : 2
	}
};


/* Énumération des statistiques */
var Statistique = {
	Vi : "Vitalité",
	Sa : "Sagesse",
	Fo : "Force",
	Ine : "Intelligence",
	Cha : "Chance",
	Age : "Agilité",
	Pui : "Puissance",

	Cri : "Critique",
	Po : "Portée",
	Invo : "Invocation",
	So : "Soin",
	Tac : "Tacle",
	Fui : "Fuite",
	Ini : "Initiative",
	Prospe : "Prospection",
	Pod : "Pod",
	Chasse : "Arme de chasse",

	Ga : {
		Pa : "PA",
		Pm : "PM"
	},

	Do : {
		Base : "Dommage",
		Neutre : "Dommage Neutre",
		Terre : "Dommage Terre",
		Feu : "Dommage Feu",
		Eau : "Dommage Eau",
		Air : "Dommage Air",
		Cri : "Dommage Critique",
		Pou : "Dommage Poussée",
		Ren : "Dommage Renvoyé",
		Per : {
			Me : "% Dommage Mêlée",
			Ar : "% Dommage Arme",
			So : "% Dommage Sort",
			Di : "% Dommage Distance"
		}
	},

	Re : {
		Neutre : "Résistance Neutre",
		Terre : "Résistance Terre",
		Feu : "Résistance Feu",
		Eau : "Résistance Eau",
		Air : "Résistance Air",
		Cri : "Résistance Critique",
		Pou : "Résistance Poussée",
		Pa : "Esquive PA",
		Pme : "Esquive PM",
		Per : {
			Neutre : "% Résistance Neutre",
			Terre : "% Résistance Terre",
			Feu : "% Résistance Feu",
			Eau : "% Résistance Eau",
			Air : "% Résistance Air",
			Me : "% Résistance Mêlée",
			Di : "% Résistance Distance"
		}
	},

	Ret : {
		Pa : "Retrait PA",
		Pme : "Retrait PM"
	},

	Pi :  {
		Base : "Dommage (Piège)",
		Per : "Puissance (Piège)"
	},
};


/* Énumération des descriptions */
var Description = {
	Vi : "Vitalité",
	Sa : "Sagesse",
	Fo : "Force",
	Ine : "Intelligence",
	Cha : "Chance",
	Age : "Agilité",
	Pui : "Puissance",

	Cri : "Critique",
	Po : "Portée",
	Invo : "Invocation",
	So : "Soin",
	Tac : "Tacle",
	Fui : "Fuite",
	Ini : "Initiative",
	Prospe : "Prospection",
	Pod : "Pod",
	Chasse : "Arme de chasse",

	Ga : {
		Pa : "PA",
		Pm : "PM"
	},

	Do : {
		Base : "Dommage",
		Neutre : "Dommage Neutre",
		Terre : "Dommage Terre",
		Feu : "Dommage Feu",
		Eau : "Dommage Eau",
		Air : "Dommage Air",
		Cri : "Dommage Critique",
		Pou : "Dommage Poussée",
		Ren : "Dommage Renvoyé",
		Per : {
			Me : "% Dommage Mêlée",
			Ar : "% Dommage Arme",
			So : "% Dommage Sort",
			Di : "% Dommage Distance"
		}
	},

	Re : {
		Neutre : "Résistance Neutre",
		Terre : "Résistance Terre",
		Feu : "Résistance Feu",
		Eau : "Résistance Eau",
		Air : "Résistance Air",
		Cri : "Résistance Critique",
		Pou : "Résistance Poussée",
		Pa : "Esquive PA",
		Pme : "Esquive PM",
		Per : {
			Neutre : "% Résistance Neutre",
			Terre : "% Résistance Terre",
			Feu : "% Résistance Feu",
			Eau : "% Résistance Eau",
			Air : "% Résistance Air",
			Me : "% Résistance Mêlée",
			Di : "% Résistance Distance"
		}
	},

	Ret : {
		Pa : "Retrait PA",
		Pme : "Retrait PM"
	},

	Pi :  {
		Base : "Dommage (Piège)",
		Per : "Puissance (Piège)"
	},
};