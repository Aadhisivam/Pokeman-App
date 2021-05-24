import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | each-character', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:each-character');
    assert.ok(route);
  });
});
