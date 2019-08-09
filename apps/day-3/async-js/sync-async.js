function getUser(id, callback) {
  console.log(`getting user from server for user id ${id}`);
  // access the server,
  // server returns user object after 5 seconds
  setTimeout(() => {
    callback({
      id: id,
      name: 'Ram'
    });
  }, 5000);
}

const showWelcomeMessage = () => console.log('Welcome!');

console.log('begin');

getUser(10, (user) => {
  console.log('user1:', user);
});

getUser(11, (user) => {
  console.log('user2:', user);
});

showWelcomeMessage();

console.log('end'); // 11th second
