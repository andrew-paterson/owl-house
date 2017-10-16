import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('layouts/home-read-more-box', 'Integration | Component | layouts/home read more box', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{layouts/home-read-more-box}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#layouts/home-read-more-box}}
      template block text
    {{/layouts/home-read-more-box}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
