export default function(server) {

  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.
  */

  // server.createList('post', 10);
  server.createList('user', 10);
  // Bookmark will be created after creating a user (mirage/factories/user.js)
  //server.createList('bookmark', 20);
}
