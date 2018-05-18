<?php
    // DEBUG
    //ini_set('xdebug.var_display_max_depth', 10);
    //$_GET['Id'] = 14;

    class State {
        public $Id;
        public $PreventsSpellCast;
        public $PreventsFight;
        public $IsSilent;
        public $CantBeMoved;
        public $CantBePushed;
        public $CantDealDamage;
        public $CantSwitchPosition;
        public $Incurable;
        public $Invulnerable;
        public $InvulnerableMelee;
        public $InvulnerableRange;

        public function __construct($Id, $PreventsSpellCast, $PreventsFight, $IsSilent, $CantBeMoved, $CantBePushed, $CantDealDamage, $CantSwitchPosition, $Incurable, $Invulnerable, $InvulnerableMelee, $InvulnerableRange) {
            $this->Id = $Id;
            $this->PreventsSpellCast = $PreventsSpellCast;
            $this->PreventsFight = $PreventsFight;
            $this->IsSilent = $IsSilent;
            $this->CantBeMoved = $CantBeMoved;
            $this->CantBePushed = $CantBePushed;
            $this->CantDealDamage = $CantDealDamage;
            $this->CantSwitchPosition = $CantSwitchPosition;
            $this->Incurable = $Incurable;
            $this->Invulnerable = $Invulnerable;
            $this->InvulnerableMelee = $InvulnerableMelee;
            $this->InvulnerableRange = $InvulnerableRange;
        }
    }


    try {
        $id = intval($_GET['Id']);

        // Champ manquant : on retourne une erreur
        if (!isset($id) || empty($id)) {
            echo -1;
            exit;
        }


        /*
            Fichiers de données
        */

        // Récupère l'état
        $state = json_decode(@file_get_contents('../data/state/' .$id. '.json'));


        /*
            Sauvegarde et envoi de la structure finale
        */

        if ($state) {
            $state = new State($state->Id, $state->PreventsSpellCast, $state->PreventsFight, $state->IsSilent, $state->CantBeMoved, $state->CantBePushed, $state->CantDealDamage, $state->CantSwitchPosition, $state->Incurable, $state->Invulnerable, $state->InvulnerableMelee, $state->InvulnerableRange);
            echo json_encode($state);
        }
        else
            throw new Exception('Fail to fetch properties');

    } catch(Exception $e) {
        echo -1;
    }