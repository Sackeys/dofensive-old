<?php
    // DEBUG
    //ini_set('xdebug.var_display_max_depth', 10);
    //$_GET['Id'] = 4698;
    //$_GET['Language'] = 'fr';

    class Spell {
        public $Id;
        public $Name;
        public $Levels;

        public function __construct($Id, $Name, $Levels) {
            $this->Id = $Id;
            $this->Name = $Name;
            $this->Levels = $Levels;
        }
    }

    class SpellLevel {
        public $ActionPoints;
        public $MinRange;
        public $Range;
        public $EditableRange;
        public $CriticalProbability;
        public $CastInLine;
        public $CastInDiagonal;
        public $CastLineOfSight;
        public $NeedFreeCell;
        public $NeedTakenCell;
        public $NeedFreeTrapCell;
        public $MaxStack;
        public $MaxCastPerTurn;
        public $MaxCastPerTarget;
        public $MinCastInterval;
        public $InitialCooldown;
        public $GlobalCooldown;
        public $Effects;
        public $CriticalEffects;

        public function __construct($ActionPoints, $MinRange, $Range, $EditableRange, $CriticalProbability, $CastInLine, $CastInDiagonal, $CastLineOfSight, $NeedFreeCell, $NeedTakenCell, $NeedFreeTrapCell, $MaxStack, $MaxCastPerTurn, $MaxCastPerTarget, $MinCastInterval, $InitialCooldown, $GlobalCooldown, $Effects, $CriticalEffects) {
            $this->ActionPoints = $ActionPoints;
            $this->MinRange = $MinRange;
            $this->Range = $Range;
            $this->EditableRange = $EditableRange;
            $this->CriticalProbability = $CriticalProbability;
            $this->CastInLine = $CastInLine;
            $this->CastInDiagonal = $CastInDiagonal;
            $this->CastLineOfSight = $CastLineOfSight;
            $this->NeedFreeCell = $NeedFreeCell;
            $this->NeedTakenCell = $NeedTakenCell;
            $this->NeedFreeTrapCell = $NeedFreeTrapCell;
            $this->MaxStack = $MaxStack;
            $this->MaxCastPerTurn = $MaxCastPerTurn;
            $this->MaxCastPerTarget = $MaxCastPerTarget;
            $this->MinCastInterval = $MinCastInterval;
            $this->InitialCooldown = $InitialCooldown;
            $this->GlobalCooldown = $GlobalCooldown;
            $this->Effects = $Effects;
            $this->CriticalEffects = $CriticalEffects;
        }
    }

    class Effect {
        public $Picture;
        public $Name;
        public $Type;
        public $Targets;
        public $Exceptions;
        public $Duration;
        public $Delay;
        public $Probability;
        public $Zone;

        public function __construct($Picture, $Name, $Type, $Targets, $Exceptions, $Duration, $Delay, $Probability, $Zone) {
            $this->Picture = $Picture;
            $this->Name = $Name;
            $this->Type = $Type;
            $this->Targets = $Targets;
            $this->Exceptions = $Exceptions;
            $this->Duration = $Duration;
            $this->Delay = $Delay;
            $this->Probability = $Probability;
            $this->Zone = $Zone;
        }
    }

    class Picture {
        public $Id;
        public $Name;

        public function __construct($Id, $Name) {
            $this->Id = $Id;
            $this->Name = $Name;
        }
    }

    class Type {
        // $Id = 0, Numeric value
        // $Id = 1, Spell value
        // $Id = 2, State value
        // $Id = 3, Monster value
        public $Id;
        public $Value;

        public function __construct($Id, $Value) {
            $this->Id = $Id;
            $this->Value = $Value;
        }
    }

    class TargetException {
        public $Id;
        public $Name;

        public function __construct($Id, $Name) {
            $this->Id = $Id;
            $this->Name = $Name;
        }
    }

    class Zone {
        public $Id;
        public $Value;
        public $Cells;

        public function __construct($Id, $Value, $Cells) {
            $this->Id = $Id;
            $this->Value = $Value;
            $this->Cells = $Cells;
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

    function GetSpellEffect(&$effect, &$pictureNames, &$effectNames, &$spellNames, &$stateNames, &$monsterNames, &$zoneNames, &$default) {
        // Image de l'effet
        $effectPicture = Search($pictureNames, $effect, 'Id');
        $picture = new Picture($effectPicture->Id, $effectPicture->Name);

        // Description de l'effet
        $effectName = Search($effectNames, $effect->Action, 'Id');
        $effectFullName = $effectName->Name;

        // Cas particulier : -?#1{~1~2 à -?}#2
        if (strpos($effectFullName, '~1~2') !== false) {
            if (count($effect->Action->Values) === 1) {
                $effectFullName = preg_replace('/{.*}#2/', '', $effectFullName);
            }
            else {
                $effectFullName = preg_replace('/{.*}/', ' ' .$default->Common->To. ' ', $effectFullName);
            }
        }

        // Reformulation de la description
        $type = new Type(-1, null);
        foreach ($effect->Action->Values as $value) {
            if ($value->Type > $type->Id) {
                $type->Id = $value->Type;
                $type->Value = ($type->Id !== 0) ? $value->Value : null;
            }

            $placeholder = null;
            switch ($value->Type) {
                case 0 :
                    $placeholder = $value->Value;
                break;

                case 1 :
                    $spellName = SearchUnit($spellNames, $value->Value);
                    if ($spellName)
                        $placeholder = '<em>' .$spellName->Name. '</em>';
                    else
                        $placeholder = '<em>undefined_spell</em>';
                break;

                case 2 :
                    $stateName = SearchUnit($stateNames, $value->Value);
                    if ($stateName)
                        $placeholder = '<em>' .$stateName->Name. '</em>';
                    else
                        $placeholder = '<em>undefined_state</em>';
                break;

                case 3 :
                    $monsterName = SearchUnit($monsterNames, $value->Value);
                    if ($monsterName)
                        $placeholder = '<em>' .$monsterName->Name. '</em>';
                    else
                        $placeholder = '<em>undefined_monster</em>';
                break;

                default : $placeholder = 'undefined';
            }

            $effectFullName = str_replace('#' .$value->Id, $placeholder, $effectFullName);
        }

        // Cibles de l'effet
        $targets = $effect->Targets;

        // Exceptions de l'effets (correspond à des monstres)
        $exceptions = array();
        foreach ($effect->Exceptions as $monster) {
            $monsterName = SearchUnit($monsterNames, $monster);
            if ($monsterName)
                array_push($exceptions, new TargetException($monster, $monsterName->Name));
        }

        // Zones
        $zoneName = Search($zoneNames, $effect->Zone, 'Id')->Name;
        $zoneCells = array();

        // Cas général
        foreach ($effect->Zone->Values as $zone) {
            if ($zone->Id === 0)
                array_push($zoneCells, $zone->Value);
            else {
                $zoneName = str_replace('#' .$zone->Id, $zone->Value, $zoneName);
                $plurial = ($zone->Value > 1) ? 's' : '';
                $zoneName = str_replace('~' .$zone->Id, $plurial, $zoneName);
            }
        }

        $plurial = (count($effect->Zone->Values) > 1) ? 's' : '';
        $zoneName = str_replace('~0', $plurial, $zoneName);
        $zone = new Zone($effect->Zone->Id, $zoneName, $zoneCells);

        return new Effect($picture, $effectFullName, $type, $targets, $exceptions, $effect->Duration, $effect->Delay, $effect->Probability, $zone);
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
        $default = json_decode(@file_get_contents('../data/' .$lang. '/Default.json'));
        $spellNames = json_decode(@file_get_contents('../data/' .$lang. '/SpellNames.json'));
        $effectNames = json_decode(@file_get_contents('../data/' .$lang. '/EffectNames.json'));
        $pictureNames = json_decode(@file_get_contents('../data/' .$lang. '/PictureNames.json'));
        $stateNames = json_decode(@file_get_contents('../data/' .$lang. '/StateNames.json'));
        $monsterNames = json_decode(@file_get_contents('../data/' .$lang. '/MonsterNames.json'));
        $zoneNames = json_decode(@file_get_contents('../data/' .$lang. '/ZoneNames.json'));

        // Récupère le fichier de données relatives au sort
        $spellData = json_decode(@file_get_contents('../data/spell/' .$id. '.json'));

        
        /*
            Création de la structure
        */

        // Nom du sort
        $name = Search($spellNames, $spellData, 'Id');

        // Niveau d'un sort
        $levels = array();
        foreach ($spellData->Levels as $level) {
            if ($level !== null) {
                $effects = array();
                $criticalEffects = array();

                foreach ($level->Effects as $effect) {
                    array_push($effects, GetSpellEffect($effect, $pictureNames, $effectNames, $spellNames, $stateNames, $monsterNames, $zoneNames, $default));
                }

                foreach ($level->CriticalEffects as $criticalEffect) {
                    array_push($criticalEffects, GetSpellEffect($criticalEffect, $pictureNames, $effectNames, $spellNames, $stateNames, $monsterNames, $zoneNames, $default));
                }

                array_push($levels, new SpellLevel($level->ActionPoints, $level->MinRange, $level->Range, $level->EditableRange, $level->CriticalProbability, $level->CastInLine, $level->CastInDiagonal, $level->CastLineOfSight, $level->NeedFreeCell, $level->NeedTakenCell, $level->NeedFreeTrapCell, $level->MaxStack, $level->MaxCastPerTurn, $level->MaxCastPerTarget, $level->MinCastInterval, $level->InitialCooldown, $level->GlobalCooldown, $effects, $criticalEffects));
            }
        }

        /*
            Sauvegarde et envoi de la structure finale
        */

        if ($name) {
            $spell = new Spell($id, $name->Name, $levels);
            echo json_encode($spell);
        }
        else
            throw new Exception('Fail to fetch properties');

    } catch(Exception $e) {
        echo -1;
    }