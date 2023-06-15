(async function gen() {
  var userSessions = await callJson("db.getUserSessions");

  // Create a chart using Chart.js
  var ctx = document.getElementById('sessionChart').getContext('2d');
  var chart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: users,
      datasets: [{
        label: 'Sessions',
        data: userSessions,
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
})();

async function back() {
  await call('clear')
    var user = await callJson("db.getUser");
    console.log(user);
    view_page("main", user);
}

function logout() {
  view_page('login');
  call('db.logout');
}
