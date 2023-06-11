(async function createTable() {
  // Retrieve users' data
  var usersData = await callJson('users');

  // Sort users based on maxPoints in descending order
  var sortedUsers = Object.keys(usersData).sort(function (a, b) {
    return usersData[b].maxPoints - usersData[a].maxPoints;
  });

  

})();

async function back() {
  await call('clear')
  var isAdmin = await call('db.isAdmin')
  var username = await call('db.getUserName')
  options = {
    admin: isAdmin,
    name: username
  }
  view_page('main', options)
}
