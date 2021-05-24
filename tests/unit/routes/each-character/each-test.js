import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | each-character/each', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:each-character/each');
    assert.ok(route);
  });
});
