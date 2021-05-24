import EmberRouter from '@ember/routing/router';
import config from 'pokeman/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('each-character', function() {
    this.route('each',{path:'/:id'});
  });
});
