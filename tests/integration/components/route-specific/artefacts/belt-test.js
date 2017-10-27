import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('route-specific/artefacts/belt', 'Integration | Component | route specific/artefacts/belt', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{route-specific/artefacts/belt}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#route-specific/artefacts/belt}}
      template block text
    {{/route-specific/artefacts/belt}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
