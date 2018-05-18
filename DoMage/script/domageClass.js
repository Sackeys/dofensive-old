var RuneObject = function(nom, poids, effet, statistique, description) {
	this.Nom = nom;
	this.Poids = poids;
	this.Effet = effet;
	this.Statistique = statistique;
	this.Description = description;

	this.JetMax = Math.floor(101 / this.Poids);
	this.PoidsTotal = this.Effet * this.Poids;

	this.CalculerJetMax = function() {
		return Math.floor(101 / this.Poids);
	}

	this.CalculerPoidsTotal = function() {
		return this.Effet * this.Poids;
	};

	this.ChargerImage = function() {
		
	};

};