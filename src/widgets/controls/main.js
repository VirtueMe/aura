define(['sandbox', './views/app'], function(sandbox, AppView) {
  'use strict';

  return function(options) {
    new AppView({
      el: sandbox.dom.find(options.element),
      locale: options.config.locale
    });

    sandbox.emit('initialized', 'Initialized Controls.');

  };

});
