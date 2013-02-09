if (typeof Object.create !== 'function') {
  Object.create = function(o) {
    function F() {}
    F.prototype = o;

    return new F();
  };
}

// Starts main modules
// Publishing from core because that's the way that Nicholas did it...
define(['aura_core', 'perms', 'backboneSandbox', 'module'], function(core, permissions, backboneSandbox, module) {
  'use strict';

  core.getSandbox = function(sandbox) {
    return backboneSandbox.extend(sandbox);
  };

  var startconfig = module.config ? module.config() : {};

  core.start( startconfig.widgets || {});


});
