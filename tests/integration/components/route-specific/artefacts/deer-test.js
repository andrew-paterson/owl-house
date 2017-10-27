import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('route-specific/artefacts/deer', 'Integration | Component | route specific/artefacts/deer', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{route-specific/artefacts/deer}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#route-specific/artefacts/deer}}
      template block text
    {{/route-specific/artefacts/deer}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
