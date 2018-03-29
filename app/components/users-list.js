import Component from '@ember/component';

const UsersListComponent = Component.extend({
  imgClass: "avatar"
});

UsersListComponent.reopenClass({
  positionalParams: ['avatarUrl', 'email']
});
export default UsersListComponent;
