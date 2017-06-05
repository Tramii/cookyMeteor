import { Meteor } from 'meteor/meteor';

import '../imports/api/users.js';

//Jose Felipe: Si no van a correr ningun script o hacer algo especial en el startup, pueden quitar el meteor.startup y sigue funcionando.
Meteor.startup(() => {
  WebApp.addHtmlAttributeHook(function() {
       return {
           "lang": "eng"
      }
  })
});
