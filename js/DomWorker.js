Globals.DomWorker = (function Dice(Util, Dice){
    
    const { _deepFreeze, _deepSeal, _$ } = Util;

    const DOM = Object.freeze({
        diceSelector: _$('dice_selector'),
        rollButton: _$('dice_roller'),
        rollResult: _$('dice_roll_result')  
    });
        
    function buildSelectorString(value){
        return '<option value='+value+'>'+value+'</option>';
    };
    
    function populateDiceSelector(diceTypes){
        const selectors = _.pluck(diceTypes, 'sides').map(buildSelectorString);
        DOM.diceSelector.append(selectors);
    };
    
    function getDiceSelectorValue(){
        return parseInt(DOM.diceSelector.val());
    };
    
    
    function displayRollResult(result){
        console.info(result)
        DOM.rollResult.text(result);
    };

    function rollButtonClick(fn){
        DOM.rollButton.click(fn);
    };






    return (function exportPublicFunctions(){
        return _deepFreeze({
            populateDiceSelector: _.once(populateDiceSelector),
            getDiceSelectorValue: getDiceSelectorValue,
            displayRollResult: displayRollResult,
            rollButtonClick: _.once(rollButtonClick),
            displayRollResult: displayRollResult
        });
    }());

    
    
    
}(Globals.Util, Globals.Dice));



