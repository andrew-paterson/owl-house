import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('route-specific/artefacts/badge', 'Integration | Component | route specific/artefacts/badge', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{route-specific/artefacts/badge}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#route-specific/artefacts/badge}}
      template block text
    {{/route-specific/artefacts/badge}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
