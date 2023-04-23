const mysql = require('mysql2');
// const db = mysql.createConnection(
//   {
//     host: 'localhost',
//     // MySQL username,
//     user: 'root',
//     // TODO: Add MySQL password
//     password: 'Annguyen2',
//     database: 'module12'
//   },
//   console.log(`Connected to the database.`)
// );

// const getDept = db.query('SELECT * FROM department', function (err, results) {
//   console.log(results);
// });

// module.exports = {getDept};




// Create a connection to the MySQL database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Annguyen2',
  database: 'module12'
});

// Function to get all records from the users table
function getDepartments(callback) {
  connection.query(
    'SELECT * FROM department',
    (error, depResults) => {
      if (error) {
        console.error(error);
      } else {
        callback(depResults);
      }
    }
  );
}

function getEmployees(callback) {
  connection.query(
    'SELECT * FROM employee',
    (error, employeeResults) => {
      if (error) {
        console.error(error);
      } else {
        callback(employeeResults);
      }
    }
  );
}

function getRoles(callback) {
  connection.query(
    'SELECT * FROM role',
    (error, roleResults) => {
      if (error) {
        console.error(error);
      } else {
        callback(roleResults);
      }
    }
  );
}

function saveDepartment(id, name, callback) {
  connection.query(
    'INSERT INTO department (id, name) VALUES (?, ?)',
    [id, name],
    (error, results) => {
      if (error) {
        console.error(error);
      } else {
        callback(results);
      }
    }
  );
}

function saveEmployee(id, firstName, lastName, roleId, managerId, callback) {
  connection.query(
    'INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?, ?)',
    [id, firstName, lastName, roleId, managerId],
    (error, results) => {
      if (error) {
        console.error(error);
      } else {
        callback(results);
      }
    }
  );
}

function saveRole(id, title, salary, department_id, callback) {
  connection.query(
    'INSERT INTO role (id, title, salary, department_id) VALUES (?, ?, ?, ?)',
    [id, title, salary, department_id],
    (error, results) => {
      if (error) {
        console.error(error);
      } else {
        callback(results);
      }
    }
  );
}

module.exports = { getDepartments, getEmployees, getRoles, saveDepartment, saveEmployee, saveRole};


// // Function to save a new user to the users table
// function saveUser(name, age, callback) {
//   connection.query(
//     'INSERT INTO users (name, age) VALUES (?, ?)',
//     [name, age],
//     (error, results) => {
//       if (error) {
//         console.error(error);
//       } else {
//         callback(results);
//       }
//     }
//   );
// }
