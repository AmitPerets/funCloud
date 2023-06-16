(async function gen() {
  var user = await call("db.getUserName"); // Specify the user for which you want to display sessions
  var userSessions = await callJson("db.getUserSessions");
  console.log(userSessions.map((s, i) => { return i }));
  // Create a chart using Chart.js
  var ctx = document.getElementById('sessionChart').getContext('2d');
  var chart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: userSessions.map((s, i) => { return "session " + i+1 }), // Corrected property name
      datasets: [{
        label: user + "'s sessions:",
        data: userSessions,
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }]
    },
    options: {
      plugins: {
        legend: {
          labels: {
            font: {
              size: 25,
              family: 'cursive'
            }
          }
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
