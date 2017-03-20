
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
        // return _deepLockObject(o, Object.seal, Object.isSealed);
        return _deepLockObject(o, Object.seal, Object.isSealed);
    };
    
    //recursively "lock" and object, where lock should be Object.freeze (most strict),
    // Object.seal, Object.preventExtensions (least strict)
    function _deepLockObject(o, lockFn, isLockedFn){
        // https://github.com/jsdf/deep-freeze/blob/master/index.js
        lockFn(o);

        const oIsFunction = typeof o === "function";
        const hasOwnProp = Object.prototype.hasOwnProperty;

        Object.getOwnPropertyNames(o).forEach(function (prop) {
          if (hasOwnProp.call(o, prop)
          && (oIsFunction ? prop !== 'caller' && prop !== 'callee' && prop !== 'arguments' : true )
          && o[prop] !== null
          && (typeof o[prop] === "object" || typeof o[prop] === "function")
          && !isLockedFn(o[prop])) {
            _deepLockObject(o[prop], lockFn, isLockedFn);
          }
        });

        return o;
    };
    
    function _$(id){
        return $('#'+id);
    };
    
    return (function exportPublicFunctions(){
        return _deepFreeze({
            _deepFreeze: _deepFreeze,
            _deepSeal: _deepSeal,
            _$: _$
        });
    }());
    
    
}());


