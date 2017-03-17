
Globals.Dice = (function Dice(Die, Util){
    'use strict'
    
    const { _deepFreeze: _deepFreeze, _deepSeal: _deepSeal } = Util;
    const diceSides = [4, 6, 8, 10, 12, 20];
    const diceTypes = generateDiceTypes(diceSides);

    function generateDiceTypes(diceSides){
        return _deepFreeze(_.map(diceSides, Die));
    };
    
    function getDiceOptions(){
        return diceTypes;
    };
    
    function getDieBySides(s){
        return diceTypes.find(t => s === t.sides);
    };
    
    function roll(s){
        return getDieBySides(s).roll();
    };
    
    return (function exportPublicFunctions(){
        return {
                getAllDice: getDiceOptions,
                get: getDieBySides,
                roll: roll
        };
    }());

}(Globals.Die, Globals.Util));