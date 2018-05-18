<?php
    // DEBUG
    //ini_set('xdebug.var_display_max_depth', 10);
    //$_GET['Id'] = 584;
    //$_GET['Language'] = 'fr';

    class Monster {
        public $Id;
        public $Name;
        public $Race;
        public $Family;
        public $Grades;
        public $Spells;
        public $Subareas;
        public $Type;
        public $CanPlay;
        public $CanTackle;
        public $CanBePushed;
        public $CanSwitchPos;
        public $AllIdolsDisabled;
        public $IncompatibleIdols;
        public $IncompatibleChallenges;

        public function __construct($Id, $Name, $Race, $Family, $Grades, $Spells, $Subareas, $Type, $CanPlay, $CanTackle, $CanBePushed, $CanSwitchPos, $AllIdolsDisabled, $IncompatibleIdols, $IncompatibleChallenges) {
            $this->Id = $Id;
            $this->Name = $Name;
            $this->Race = $Race;
            $this->Family = $Family;
            $this->Grades = $Grades;
            $this->Spells = $Spells;
            $this->Subareas = $Subareas;
            $this->Type = $Type;
            $this->CanPlay = $CanPlay;
            $this->CanTackle = $CanTackle;
            $this->CanBePushed = $CanBePushed;
            $this->CanSwitchPos = $CanSwitchPos;
            $this->AllIdolsDisabled = $AllIdolsDisabled;
            $this->IncompatibleIdols = $IncompatibleIdols;
            $this->IncompatibleChallenges = $IncompatibleChallenges;
        }
    }

    class Grade {
        public $Level;
        public $LifePoints;
        public $ActionPoints;
        public $MovementPoints;
        public $PaDodge;
        public $PmDodge;
        public $Wisdom;
        public $Resistances;
        public $DamageReflect;
        public $Experience;
        public $Drops;

        public function __construct($Level, $LifePoints, $ActionPoints, $MovementPoints, $PaDodge, $PmDodge, $Wisdom, $Resistances, $DamageReflect, $Experience, $Drops) {
            $this->Level = $Level;
            $this->LifePoints = $LifePoints;
            $this->ActionPoints = $ActionPoints;
            $this->MovementPoints = $MovementPoints;
            $this->PaDodge = $PaDodge;
            $this->PmDodge = $PmDodge;
            $this->Wisdom = $Wisdom;
            $this->Resistances = $Resistances;
            $this->DamageReflect = $DamageReflect;
            $this->Experience = $Experience;
            $this->Drops = $Drops;
        }
    }

    class Resistance {
        public $Neutral;
        public $Earth;
        public $Air;
        public $Fire;
        public $Water;

        public function __construct($Neutral, $Earth, $Air, $Fire, $Water) {
            $this->Neutral = $Neutral;
            $this->Earth = $Earth;
            $this->Air = $Air;
            $this->Fire = $Fire;
            $this->Water = $Water;
        }
    }

    class Drop {
        public $Id;
        public $Name;
        public $Probability;
        public $IsConditional;

        public function __construct($Id, $Name, $Probability, $IsConditional) {
            $this->Id = $Id;
            $this->Name = $Name;
            $this->Probability = $Probability;
            $this->IsConditional = $IsConditional;
        }
    }

    class Spell {
        public $Id;
        public $Name;

        public function __construct($Id, $Name) {
            $this->Id = $Id;
            $this->Name = $Name;
        }
    }

    class Subarea {
        public $Name;
        public $IsFavorite;

        public function __construct($Name, $IsFavorite) {
            $this->Name = $Name;
            $this->IsFavorite = $IsFavorite;
        }
    }

    class Idol {
        public $Id;
        public $Name;

        public function __construct($Id, $Name) {
            $this->Id = $Id;
            $this->Name = $Name;
        }
    }

    class Challenge {
        public $Id;
        public $Name;

        public function __construct($Id, $Name) {
            $this->Id = $Id;
            $this->Name = $Name;
        }
    }


    function Search(&$array, &$object, $field) {
        $data = array_filter($array, function($obj) use($object, $field) {
            return $obj->Id === $object->$field;
        });

        return reset($data);
    }

    function SearchUnit(&$array, &$object) {
        $data = array_filter($array, function($obj) use($object) {
            return $obj->Id === $object;
        });

        return reset($data);
    }


    try {
        $lang = $_GET['Language'];
        $id = intval($_GET['Id']);

        // Champs manquant : on retourne une erreur
        if (!isset($lang) || !isset($id) || empty($lang) || empty($id)) {
            echo -1;
            exit;
        }


        /*
            Fichiers de données
        */

        // Récupère les fichiers de données textuelles
        $monsterNames = json_decode(@file_get_contents('../data/' .$lang. '/MonsterNames.json'));
        $raceNames = json_decode(@file_get_contents('../data/' .$lang. '/RaceNames.json'));
        $familyNames = json_decode(@file_get_contents('../data/' .$lang. '/FamilyNames.json'));
        $dropNames = json_decode(@file_get_contents('../data/' .$lang. '/DropNames.json'));
        $subareaNames = json_decode(@file_get_contents('../data/' .$lang. '/SubareaNames.json'));
        $idolNames = json_decode(@file_get_contents('../data/' .$lang. '/IdolNames.json'));
        $challengeNames = json_decode(@file_get_contents('../data/' .$lang. '/ChallengeNames.json'));
        $spellNames = json_decode(@file_get_contents('../data/' .$lang. '/SpellNames.json'));

        // Récupère le fichier de données relatives au monstre
        $monsterData = json_decode(@file_get_contents('../data/monster/' .$id. '.json'));

        
        /*
            Création de la structure
        */

        // Nom du monstre
        $name = Search($monsterNames, $monsterData, 'Id');

        // Race du monstre
        $race = Search($raceNames, $monsterData, 'RaceId');

        // Famille du monstre
        $family = Search($familyNames, $monsterData, 'FamilyId');

        // Drops relatifs au monstre
        $drops = array();
        foreach ($monsterData->Drops as $drop) {
            $dropName = Search($dropNames, $drop, 'Id');
            if ($dropName)
                array_push($drops, array(
                    'Id' => $drop->Id,
                    'Name' => $dropName->Name,
                    'Probabilities' => $drop->Probabilities,
                    'IsConditional' => $drop->IsConditional
                ));
        }

        // Grades du monstre
        $grades = array();
        foreach ($monsterData->Grades as $grade) {
            if ($grade !== null) {
                $gradeDrops = array();
                foreach ($drops as $drop) {
                    $gradeIndex = $grade->Id - 1;
                    if (isset($drop['Probabilities'][$gradeIndex]))
                        array_push($gradeDrops, new Drop($drop['Id'], $drop['Name'], $drop['Probabilities'][$gradeIndex], $drop['IsConditional']));
                }

                if (empty($gradeDrops))
                    $gradeDrops = null;
                else
                    usort($gradeDrops, function($a, $b) {
                        return $a->Probability < $b->Probability;
                    });

                array_push($grades, new Grade(
                    $grade->Level, $grade->LifePoints, $grade->ActionPoints, $grade->MovementPoints, $grade->PaDodge, $grade->PmDodge, $grade->Wisdom,
                    new Resistance($grade->Resistances->Neutral, $grade->Resistances->Earth, $grade->Resistances->Air, $grade->Resistances->Fire, $grade->Resistances->Water),
                    $grade->DamageReflect, $grade->Experience, $gradeDrops));
            }
        }
        usort($grades, function($a, $b) {
            $a->Level > $b->Level;
        });

        // Sorts du monstre
        $spells = array();
        foreach ($monsterData->Spells as $spell) {
            $spellName = SearchUnit($spellNames, $spell);
            if ($spellName)
                array_push($spells, new Spell($spell, $spellName->Name));
        }
        if (!empty($spells))
            usort($spells, function($a, $b) {
                return strcmp($a->Name, $b->Name);
            });
        
        // Sous-zones du monstre
        $subareas = array();
        foreach ($monsterData->Subareas as $subarea) {
            $subareaName = Search($subareaNames, $subarea, 'Id');
            if ($subareaName)
                array_push($subareas, new Subarea($subareaName->Name, $subarea->IsFavorite));
        }
        if (!empty($subareas))
            usort($subareas, function($a, $b) {
                $sorted = $b->IsFavorite - $a->IsFavorite;
                if ($sorted) return $sorted;
                return strcmp($a->Name, $b->Name);
            });
        
        // Idoles incompatibles
        $idols = array();
        foreach ($monsterData->IncompatibleIdols as $idol) {
            $idolName = SearchUnit($idolNames, $idol);
            if ($idolName)
                array_push($idols, new Idol($idol, $idolName->Name));
        }
        if (!empty($idols))
            usort($idols, function($a, $b) {
                return strcmp($a->Name, $b->Name);
            });

        // Challenges incompatibles
        $challenges = array();
        foreach ($monsterData->IncompatibleChallenges as $challenge) {
            $challengeName = SearchUnit($challengeNames, $challenge);
            if ($challengeName)
                array_push($challenges, new Idol($challenge, $challengeName->Name));
        }
        if (!empty($challenges))
            usort($challenges, function($a, $b) {
                return strcmp($a->Name, $b->Name);
            });


        /*
            Sauvegarde et envoi de la structure finale
        */

        if ($id && $name && $race && $family && count($grades) > 0) {
            $monster = new Monster($id, $name->Name, $race->Name, $family->Name, $grades, $spells, $subareas, $monsterData->Type, $monsterData->CanPlay, $monsterData->CanTackle, $monsterData->CanBePushed, $monsterData->CanSwitchPos, $monsterData->AllIdolsDisabled, $idols, $challenges);
            echo json_encode($monster);
        }
        else
            throw new Exception('Fail to fetch properties');

    } catch(Exception $e) {
        echo -1;
    }