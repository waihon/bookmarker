import Component from '@ember/component';

const UsersListComponent = Component.extend({
  imgClass: "avatar",
  click() {
    Ember.Logger.info('users-list was clicked');
    return false; // stop the event from bubbling up
  }
});

UsersListComponent.reopenClass({
  positionalParams: ['avatarUrl', 'email']
});
export default UsersListComponent;
