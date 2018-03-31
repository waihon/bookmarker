import Ember from 'ember';
import Component from '@ember/component';
import { inject } from '@ember/service';

export default Component.extend({
  bookmark: null,
  router: inject(), // private routing service ('-routing') no longer works
  actions: {
    save(bookmark) {
      Ember.Logger.info('Save called');
      bookmark.save() // Ember data record has access to its own save method
      .then(
        (value) => {
          Ember.Logger.info(value);
          this.get('router').transitionTo('bookmarks');
        }
      )
      .catch(
        () => {
          Ember.Logger.info('Failure to save');
        }
      )
    },
    cancel(bookmark) {
      Ember.Logger.info('Cancel called');
      bookmark.rollbackAttributes();
      this.get('router').transitionTo('bookmarks');
    },
    delete(bookmark) {
      Ember.Logger.info('Delete called');
      bookmark.destroyRecord(); // flag the record as isDeleted and persist the deletion
      this.get('router').transitionTo('bookmarks');
    }
  }
});
