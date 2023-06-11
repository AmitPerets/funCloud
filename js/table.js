(async function createTable() {
  const usersData = await callJson('db.getAllUsers');

  const tableContainer = document.getElementById('main-container');
  const table = document.createElement('table');
  table.classList.add('user-table');

  const headerRow = document.createElement('tr');
  const headers = ['Username', 'Max Points'];

  headers.forEach(headerText => {
    const headerCell = document.createElement('th');
    headerCell.textContent = headerText;
    headerRow.appendChild(headerCell);
  });

  table.appendChild(headerRow);

  Object.entries(usersData).forEach(([username, maxPoints]) => {
    const row = document.createElement('tr');

    const usernameCell = document.createElement('td');
    usernameCell.textContent = username;

    const maxPointsCell = document.createElement('td');
    maxPointsCell.textContent = maxPoints;

    row.appendChild(usernameCell);
    row.appendChild(maxPointsCell);

    table.appendChild(row);
  });

  tableContainer.appendChild(table);
})();

async function back() {
  await call('clear');
  var isAdmin = await call('db.isAdmin');
  var username = await call('db.getUserName');
  options = {
    admin: isAdmin,
    name: username
  };
  view_page('main', options);
}
