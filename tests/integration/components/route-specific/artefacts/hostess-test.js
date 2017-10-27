import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('route-specific/artefacts/hostess', 'Integration | Component | route specific/artefacts/hostess', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{route-specific/artefacts/hostess}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#route-specific/artefacts/hostess}}
      template block text
    {{/route-specific/artefacts/hostess}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
