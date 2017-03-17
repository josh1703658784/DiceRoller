
Globals.Util = (function(){
    'use strict'    
    
    // shortcut to Object.freeze
    function _freeze(o){
        return Object.freeze(o);
    };

    //deep/recursive object freeze
    function _deepFreeze(o){
        return _deepLockObject(o, Object.freeze, Object.isFrozen);
    };
    
    
    //deep/recursive object seal
    function _deepSeal(o){
        return _deepLockObject(o, Object.seal, Object.isSealed);
    };
    
    //recursively "lock" and object, where lock should be Object.freeze (most strict), Object.seal, Object.preventExtensions (least strict)
    function _deepLockObject(o, lockFn, isLockedFn){
        // http://stackoverflow.com/questions/34776846/how-to-freeze-nested-objects-in-javascript
        lockFn(o);
        if (o === undefined) {
          return o;
        }

        Object.getOwnPropertyNames(o).forEach(function (prop) {
          if (o[prop] !== null
          && (typeof o[prop] === "object" || typeof o[prop] === "function")
          && !isLockedFn(o[prop])) {
            _deepLockObject(o[prop], lockFn, isLockedFn);
          }
        });
        return o;
    };
    
    return (function exportPublicFunctions(){
        return {
            _deepFreeze: _deepFreeze,
            _deepSeal: _deepSeal
        };
    }());
}());


