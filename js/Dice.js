
Globals.Dice = (function Dice(Die, Util, DomWorker){
    'use strict'
    
    console.debug(DomWorker)
    
    const { _deepFreeze, _deepSeal, _$ } = Util;
    const { populateDiceSelector, getDiceSelectorValue, rollButtonClick, displayRollResult } = DomWorker;
    
    const diceSides = _deepFreeze([4, 6, 8, 10, 12, 20]);
    const diceTypes = _deepFreeze(generateDiceTypes(diceSides));
    populateDiceSelector(diceTypes);
    rollButtonClick(rollDiceListener)
    
    

    function generateDiceTypes(diceSides){
        return _deepFreeze(_.map(diceSides, Die));
    };
    
    function getDiceOptions(){
        return diceTypes;
    };
    
    function getDieBySides(s){
        return _.findWhere(diceTypes, {sides: s});
    };
    
    function roll(s){
        return getDieBySides(s).roll();
    };

    function rollDiceListener(){
        const numberSides = getDiceSelectorValue();
        const result = roll(numberSides);
        displayRollResult(result);        
    };



    return (function exportPublicFunctions(){
        return _deepFreeze({
                getAllDice: getDiceOptions,
                get: getDieBySides,
                roll: roll
        });
    }());



}(Globals.Die, Globals.Util, Globals.DomWorker));



