const express = require('express');
const mysql = require('mysql2');
const db = require("./demo")

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

var inquirer = require('inquirer');

function displayMainMenu() {
  console.clear();
  inquirer.prompt([
    {
      type: 'list',
      name: 'option',
      message: 'Choose an option:',
      choices: ['View all departments', 'Save a new department', 'View all employees', 'Save a new employee', 'View all roles', 'Save a new role', 'Quit']
    }
  ]).then(answers => {
    if (answers.option === 'View all departments') {
      // Call the function to get all users from the database
      console.clear();
      db.getDepartments(results => {
        console.log ("\r\n")
        console.table(results);
      });
      displayMainMenu();
    }
    else if (answers.option === 'View all employees') {
      // Call the function to get all users from the database
      console.clear();
      db.getEmployees(results => {
        console.log ("\r\n")
        console.table(results);
      });
      displayMainMenu();
    }
    else if (answers.option === 'View all roles') {
      // Call the function to get all users from the database
      console.clear();
      db.getRoles(results => {
        console.log ("\r\n")
        console.table(results);
      });
      displayMainMenu();
    }
    else if (answers.option === 'Save a new department') {
      // Prompt the user for input
      inquirer.prompt([
        {
          type: 'input',
          name: 'id',
          message: "What's the department's id?"
        },
        {
          type: 'input',
          name: 'name',
          message: "What's the department's name?"
        }
      ]).then(answers => {
        // Save the user's input to the MySQL database
        db.saveDepartment(answers.id, answers.name, results => {
          console.log('Department inserted successfully!');
          displayMainMenu();
        });
      }).catch(error => {
        console.error(error);
      });
      
    } 
    else if (answers.option === 'Save a new role') {
      // Prompt the user for input
      inquirer.prompt([
        {
          type: 'input',
          name: 'id',
          message: "What's the role's id?"
        },
        {
          type: 'input',
          name: 'title',
          message: "What's the title?"
        },
        {
          type: 'input',
          name: 'salary',
          message: "What's the salary?"
        },
        {
          type: 'input',
          name: 'department_id',
          message: "What's department is it in?"
        },
      ]).then(answers => {
        // Save the user's input to the MySQL database
        db.saveRole(answers.id, answers.title, answers.salary, answers.department_id, results => {
          console.log('Role inserted successfully!');
          displayMainMenu();
        });
      }).catch(error => {
        console.error(error);
      });
      
    } 
    else if (answers.option === 'Save a new employee') {
      // Prompt the user for input
      inquirer.prompt([
        {
          type: 'input',
          name: 'id',
          message: "What's the employee's id?"
        },
        {
          type: 'input',
          name: 'firstName',
          message: "What's the employee's first name?"
        },
        {
          type: 'input',
          name: 'lastName',
          message: "What's the employee's last name?"
        },
        {
          type: 'input',
          name: 'roleId',
          message: "What's the employee's role ID?"
        },
        {
          type: 'input',
          name: 'managerId',
          message: "What's the employee's manager ID?"
        },
      ]).then(answers => {
        // Save the user's input to the MySQL database
        db.saveEmployee(answers.id, answers.firstName, answers.lastName, answers.roleId, answers.managerId, results => {
          console.log('Employee inserted successfully!');
          displayMainMenu();
        });
      }).catch(error => {
        console.error(error);
      });
    }
    else if (answers.option === 'Quit') {
      // Exit the program
      console.log('Goodbye!');
      process.exit(0);
    }
  }).catch(error => {
    console.error(error);
  });
}

displayMainMenu()