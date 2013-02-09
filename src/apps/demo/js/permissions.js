// ## Permissions Extension
// @fileOverview Extend the aura-core permissions
define(['aura_perms', 'module'], function(permissions, module) {
  'use strict';

  var config = module.config ? module.config() : {
    todos: {
      'bootstrap': true,
      'new-event': true,
      'set-language': true,
      'route': true
    },
    calendar: {
      'bootstrap': true,
      'route': true
    },
    controls: {
      '*': true
    },
    router: {
      '*': true
    }
  };

  permissions.extend(config);

  return permissions;
});
