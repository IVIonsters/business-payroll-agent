// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data = TODO: Get user input to create and return an array of employee objects
const collectEmployees = function() {
  // Array for return value
  const employeeValue = [];
  // Boolean to act as a condition for the while loop.
  let addEmployee = true;


// Create a loop to collect user data First Name, Last Name, Salary.
  while (addEmployee) {
    // User Data Prompts
    const firstName = prompt("Enter Employee First Name:");
    const lastName = prompt("Enter Employee Last Name:");
    let salary = Number(prompt("Enter Employee Salary:"));

    if (isNaN(salary)) {
      alert("Please enter a valid number.");
      salary = Number(prompt("Enter Employee Salary:"));
    } 

    // Generate Employee Variable
    let employee = {
      firstName: firstName,
      lastName: lastName,
      salary: salary
    };


    // Add Employee to Array using push method.
    employeeValue.push(employee);


    // Add Boolean to confirm prompt to add another employee.
    addEmployee = confirm("Would you like to add another employee?");
  }
    

    // Return employeevalue data
    return employeeValue;
}

// ----------------------------------------------------------------------------------------------------

// Display the average salary = TODO: Calculate and display the average salary
const displayAverageSalary = function(employeesArray) {
  // define variables of for sum and count
  let salarySum = 0;
  // create for loop to calculate salaries
  for (let i = 0; i < employeesArray.length; i++) {
    salarySum += employeesArray[i].salary;
  }
    // console log to dispaly average salary
  console.log(`The average salary of our employees is: ${salarySum / employeesArray.length}`);
  // create variable to take average salary and divide by number of employees
  return salarySum / employeesArray.length;
}

// Select a random employee = TODO: Select and display a random employee
const getRandomEmployee = function(employeesArray) {
  // create variable to select random employee
  const employeeRandom = employeesArray[Math.floor(Math.random() * employeesArray.length)];
  // console log to display random employee
  console.log(`CONGRATULATIONS! ${employeeRandom.firstName} ${employeeRandom.lastName} has been selected as the random employee!`); 
}
// ----------------------------------------------------------------------------------------------------
/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
