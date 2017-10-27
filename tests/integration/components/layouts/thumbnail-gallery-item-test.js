import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('layouts/thumbnail-gallery-item', 'Integration | Component | layouts/thumbnail gallery item', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{layouts/thumbnail-gallery-item}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#layouts/thumbnail-gallery-item}}
      template block text
    {{/layouts/thumbnail-gallery-item}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
