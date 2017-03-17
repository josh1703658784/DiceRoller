
Globals.Die = _.partial(function Die(Util, s){
    'use strict'
    
    const { _deepFreeze: _deepFreeze, _deepSeal: _deepSeal } = Util;
        
    function roll(max) {
        const min = 1;
        return Math.floor(Math.random() * (max - min) + min);
    };
    
    return _deepFreeze({
        sides: s,
        name: 'D'+s,
        roll: _.partial(roll, s)
    });
}, Globals.Util);