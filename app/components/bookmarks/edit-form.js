import Component from '@ember/component';

export default Component.extend({
  actions: {
    save(bookmark) { Ember.Logger.info('Save called'); },
    cancel() { Ember.Logger.info('Cancel called'); }
  }
});
