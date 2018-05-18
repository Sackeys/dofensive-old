 /* Création des runes */
var Rune = {
	Vi : new RuneObject(Nom.Vi, Poids.Vi, 10, Statistique.Vi, Description.Vi),
	Sa : new RuneObject(Nom.Sa, Poids.Sa, 1, Statistique.Sa, Description.Sa),
	Fo : new RuneObject(Nom.Fo, Poids.Fo, 1, Statistique.Fo, Description.Fo),
	Ine : new RuneObject(Nom.Ine, Poids.Ine, 1, Statistique.Ine, Description.Ine),
	Cha : new RuneObject(Nom.Cha, Poids.Cha, 1, Statistique.Cha, Description.Cha),
	Age : new RuneObject(Nom.Age, Poids.Age, 1, Statistique.Age, Description.Age),
	Pui : new RuneObject(Nom.Pui, Poids.Pui, 1, Statistique.Pui, Description.Pui),

	Cri : new RuneObject(Nom.Cri, Poids.Cri, 1, Statistique.Cri, Description.Cri),
	Po : new RuneObject(Nom.Po, Poids.Po, 1, Statistique.Po, Description.Po),
	Invo : new RuneObject(Nom.Invo, Poids.Invo, 1, Statistique.Invo, Description.Invo),
	So : new RuneObject(Nom.So, Poids.So, 1, Statistique.So, Description.So),
	Tac : new RuneObject(Nom.Tac, Poids.Tac, 1, Statistique.Tac, Description.Tac),
	Fui : new RuneObject(Nom.Fui, Poids.Fui, 1, Statistique.Fui, Description.Fui),
	Ini : new RuneObject(Nom.Ini, Poids.Ini, 10, Statistique.Ini, Description.Ini),
	Prospe : new RuneObject(Nom.Prospe, 1, Poids.Prospe, Statistique.Prospe, Description.Prospe),
	Pod : new RuneObject(Nom.Pod, Poids.Pod, 10, Statistique.Pod, Description.Pod),
	Chasse : new RuneObject(Nom.Chasse, Poids.Chasse, 1, Statistique.Chasse, Description.Chasse),

	Ga : {
		Pa : new RuneObject(Nom.Ga.Pa, Poids.Ga.Pa, 1, Statistique.Ga.Pa, Description.Ga.Pa),
		Pm : new RuneObject(Nom.Ga.Pm, Poids.Ga.Pm, 1, Statistique.Ga.Pm, Description.Ga.Pm)
	},

	Do : {
		Base : new RuneObject(Nom.Do.Base, Poids.Do.Base, 1, Statistique.Do.Base, Description.Do.Base),
		Neutre : new RuneObject(Nom.Do.Neutre, Poids.Do.Neutre, 1, Statistique.Do.Neutre, Description.Do.Neutre),
		Terre : new RuneObject(Nom.Do.Terre, Poids.Do.Terre, 1, Statistique.Do.Terre, Description.Do.Terre),
		Feu : new RuneObject(Nom.Do.Feu, Poids.Do.Feu, 1, Statistique.Do.Feu, Description.Do.Feu),
		Eau : new RuneObject(Nom.Do.Eau, Poids.Do.Eau, 1, Statistique.Do.Eau, Description.Do.Eau),
		Air : new RuneObject(Nom.Do.Air, Poids.Do.Air, 1, Statistique.Do.Air, Description.Do.Air),
		Cri : new RuneObject(Nom.Do.Cri, Poids.Do.Cri, 1, Statistique.Do.Cri, Description.Do.Cri),
		Pou : new RuneObject(Nom.Do.Pou, Poids.Do.Pou, 1, Statistique.Do.Pou, Description.Do.Pou),
		Ren : new RuneObject(Nom.Do.Ren, Poids.Do.Ren, 1, Statistique.Do.Ren, Description.Do.Ren),
		Per : {
			Me : new RuneObject(Nom.Do.Per.Me, Poids.Do.Per.Me, 1, Statistique.Do.Per.Me, Description.Do.Per.Me),
			Ar : new RuneObject(Nom.Do.Per.Ar, Poids.Do.Per.Ar, 1, Statistique.Do.Per.Ar, Description.Do.Per.Ar),
			So : new RuneObject(Nom.Do.Per.So, Poids.Do.Per.So, 1, Statistique.Do.Per.So, Description.Do.Per.So),
			Di : new RuneObject(Nom.Do.Per.Di, Poids.Do.Per.Di, 1, Statistique.Do.Per.Di, Description.Do.Per.Di)
		}
	},

	Re : {
		Neutre : new RuneObject(Nom.Re.Neutre, Poids.Re.Neutre, 1, Statistique.Re.Neutre, Description.Re.Neutre),
		Terre : new RuneObject(Nom.Re.Terre, Poids.Re.Terre, 1, Statistique.Re.Terre, Description.Re.Terre),
		Feu : new RuneObject(Nom.Re.Feu, Poids.Re.Feu, 1, Statistique.Re.Feu, Description.Re.Feu),
		Eau : new RuneObject(Nom.Re.Eau, Poids.Re.Eau, 1, Statistique.Re.Eau, Description.Re.Eau),
		Air : new RuneObject(Nom.Re.Air, Poids.Re.Air, 1, Statistique.Re.Air, Description.Re.Air),
		Cri : new RuneObject(Nom.Re.Cri, Poids.Re.Cri, 1, Statistique.Re.Cri, Description.Re.Cri),
		Pou : new RuneObject(Nom.Re.Pou, Poids.Re.Pou, 1, Statistique.Re.Pou, Description.Re.Pou),
		Pa : new RuneObject(Nom.Re.Pa, Poids.Re.Pa, 1, Statistique.Re.Pa, Description.Re.Pa),
		Pme : new RuneObject(Nom.Re.Pme, Poids.Re.Pme, 1, Statistique.Re.Pme, Description.Re.Pme),
		Per : {
			Neutre : new RuneObject(Nom.Re.Per.Neutre, Poids.Re.Per.Neutre, 1, Statistique.Re.Per.Neutre, Description.Re.Per.Neutre),
			Terre : new RuneObject(Nom.Re.Per.Terre, Poids.Re.Per.Terre, 1, Statistique.Re.Per.Terre, Description.Re.Per.Terre),
			Feu : new RuneObject(Nom.Re.Per.Feu, Poids.Re.Per.Feu, 1, Statistique.Re.Per.Feu, Description.Re.Per.Feu),
			Eau : new RuneObject(Nom.Re.Per.Eau, Poids.Re.Per.Eau, 1, Statistique.Re.Per.Eau, Description.Re.Per.Eau),
			Air : new RuneObject(Nom.Re.Per.Air, Poids.Re.Per.Air, 1, Statistique.Re.Per.Air, Description.Re.Per.Air),
			Me : new RuneObject(Nom.Re.Per.Me, Poids.Re.Per.Me, 1, Statistique.Re.Per.Me, Description.Re.Per.Me),
			Di : new RuneObject(Nom.Re.Per.Di, Poids.Re.Per.Di, 1, Statistique.Re.Per.Di, Description.Re.Per.Di),
		}
	},

	Ret : {
		Pa : new RuneObject(Nom.Ret.Pa, Poids.Ret.Pa, 1, Statistique.Ret.Pa, Description.Ret.Pa),
		Pme : new RuneObject(Nom.Ret.Pme, Poids.Ret.Pme, 1, Statistique.Ret.Pme, Description.Ret.Pme)
	},

	Pi :  {
		Base : new RuneObject(Nom.Pi.Base, Poids.Pi.Base, 1, Statistique.Pi.Base, Description.Pi.Base),
		Per : new RuneObject(Nom.Pi.Per, Poids.Pi.Per, 1, Statistique.Pi.Per, Description.Pi.Per)
	},

	Pa : {
		Vi : new RuneObject("Pa " + Nom.Vi, Poids.Vi, 15, Statistique.Vi, Description.Vi),
		Sa : new RuneObject("Pa " + Nom.Sa, Poids.Sa, 3, Statistique.Sa, Description.Sa),
		Fo : new RuneObject("Pa " + Nom.Fo, Poids.Fo, 3, Statistique.Fo, Description.Fo),
		Ine : new RuneObject("Pa " + Nom.Ine, Poids.Ine, 3, Statistique.Ine, Description.Ine),
		Cha : new RuneObject("Pa " + Nom.Cha, Poids.Cha, 3, Statistique.Cha, Description.Cha),
		Age : new RuneObject("Pa " + Nom.Age, Poids.Age, 3, Statistique.Age, Description.Age),
		Pui : new RuneObject("Pa " + Nom.Pui, Poids.Pui, 3, Statistique.Pui, Description.Pui),

		So : new RuneObject("Pa " + Nom.So, Poids.So, 3, Statistique.So, Description.So),
		Tac : new RuneObject("Pa " + Nom.Tac, Poids.Tac, 3, Statistique.Tac, Description.Tac),
		Fui : new RuneObject("Pa " + Nom.Fui, Poids.Fui, 3, Statistique.Fui, Description.Fui),
		Ini : new RuneObject("Pa " + Nom.Ini, Poids.Ini, 30, Statistique.Ini, Description.Ini),
		Prospe : new RuneObject("Pa " + Nom.Prospe, 3, Poids.Prospe, Statistique.Prospe, Description.Prospe),
		Pod : new RuneObject("Pa " + Nom.Pod, Poids.Pod, 30, Statistique.Pod, Description.Pod),

		Do : {
			Neutre : new RuneObject("Pa " + Nom.Do.Neutre, Poids.Do.Neutre, 3, Statistique.Do.Neutre, Description.Do.Neutre),
			Terre : new RuneObject("Pa " + Nom.Do.Terre, Poids.Do.Terre, 3, Statistique.Do.Terre, Description.Do.Terre),
			Feu : new RuneObject("Pa " + Nom.Do.Feu, Poids.Do.Feu, 3, Statistique.Do.Feu, Description.Do.Feu),
			Eau : new RuneObject("Pa " + Nom.Do.Eau, Poids.Do.Eau, 3, Statistique.Do.Eau, Description.Do.Eau),
			Air : new RuneObject("Pa " + Nom.Do.Air, Poids.Do.Air, 3, Statistique.Do.Air, Description.Do.Air),
			Cri : new RuneObject("Pa " + Nom.Do.Cri, Poids.Do.Cri, 3, Statistique.Do.Cri, Description.Do.Cri),
			Pou : new RuneObject("Pa " + Nom.Do.Pou, Poids.Do.Pou, 3, Statistique.Do.Pou, Description.Do.Pou)
		},

		Re : {
			Neutre : new RuneObject("Pa " + Nom.Re.Neutre, Poids.Re.Neutre, 3, Statistique.Re.Neutre, Description.Re.Neutre),
			Terre : new RuneObject("Pa " + Nom.Re.Terre, Poids.Re.Terre, 3, Statistique.Re.Terre, Description.Re.Terre),
			Feu : new RuneObject("Pa " + Nom.Re.Feu, Poids.Re.Feu, 3, Statistique.Re.Feu, Description.Re.Feu),
			Eau : new RuneObject("Pa " + Nom.Re.Eau, Poids.Re.Eau, 3, Statistique.Re.Eau, Description.Re.Eau),
			Air : new RuneObject("Pa " + Nom.Re.Air, Poids.Re.Air, 3, Statistique.Re.Air, Description.Re.Air),
			Cri : new RuneObject("Pa " + Nom.Re.Cri, Poids.Re.Cri, 3, Statistique.Re.Cri, Description.Re.Cri),
			Pou : new RuneObject("Pa " + Nom.Re.Pou, Poids.Re.Pou, 3, Statistique.Re.Pou, Description.Re.Pou),
			Pa : new RuneObject(Nom.Re.Pa, Poids.Re.Pa, 3, Statistique.Re.Pa, Description.Re.Pa),
			Pme : new RuneObject(Nom.Re.Pme, Poids.Re.Pme, 3, Statistique.Re.Pme, Description.Re.Pme),
		},

		Ret : {
			Pa : new RuneObject("Pa " + Nom.Ret.Pa, Poids.Ret.Pa, 3, Statistique.Ret.Pa, Description.Ret.Pa),
			Pme : new RuneObject("Pa " + Nom.Ret.Pme, Poids.Ret.Pme, 3, Statistique.Ret.Pme, Description.Ret.Pme)
		},

		Pi :  {
			Base : new RuneObject("Pa " + Nom.Pi.Base, Poids.Pi.Base, 3, Statistique.Pi.Base, Description.Pi.Base),
			Per : new RuneObject("Pa " + Nom.Pi.Per, Poids.Pi.Per, 3, Statistique.Pi.Per, Description.Pi.Per)
		}
	},

	Ra : {
		Vi : new RuneObject("Ra " + Nom.Vi, Poids.Vi, 50, Statistique.Vi, Description.Vi),
		Sa : new RuneObject("Ra " + Nom.Sa, Poids.Sa, 10, Statistique.Sa, Description.Sa),
		Fo : new RuneObject("Ra " + Nom.Fo, Poids.Fo, 10, Statistique.Fo, Description.Fo),
		Ine : new RuneObject("Ra " + Nom.Ine, Poids.Ine, 10, Statistique.Ine, Description.Ine),
		Cha : new RuneObject("Ra " + Nom.Cha, Poids.Cha, 10, Statistique.Cha, Description.Cha),
		Age : new RuneObject("Ra " + Nom.Age, Poids.Age, 10, Statistique.Age, Description.Age),
		Pui : new RuneObject("Ra " + Nom.Pui, Poids.Pui, 10, Statistique.Pui, Description.Pui),

		Ini : new RuneObject("Ra " + Nom.Ini, Poids.Ini, 100, Statistique.Ini, Description.Ini),
		Pod : new RuneObject("Ra " + Nom.Pod, Poids.Pod, 100, Statistique.Pod, Description.Pod),

		Pi :  {
			Per : new RuneObject("Ra " + Nom.Pi.Per, Poids.Pi.Per, 10, Statistique.Pi.Per, Description.Pi.Per)
		}
	}
};