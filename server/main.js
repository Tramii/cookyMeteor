import { Meteor } from 'meteor/meteor';

import '../imports/api/users.js';


Meteor.startup(() => {
  WebApp.addHtmlAttributeHook(function() {
       return {
           "lang": "eng"
      }
  })
});
