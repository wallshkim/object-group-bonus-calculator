$(document).ready(readyNow);

const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

console.log(employees);

function readyNow() {
  console.log('in readyNow');
  $('#runButton').on('click', handleClick);
}// end readyNow

function handleClick(){
  for (let i = 0; i < employees.length; i++) {
    console.log(employeeBonus(employees[i]));
  }// end for
}

function displayEmployeeBonus(employee) {
  console.log('in displayEmployeeBonus');
  // target element
  let employeeOutput = $('#employeeOutput');
  // append to DOM
  employeeOutput.append(`
  <tr>
    <td>${employee.name}</td>
    <td>${employee.bonusPercentage}</td>
    <td>${employee.totalBonus}</td>
    <td>${employee.totalCompensation}</td>
  </tr>`);
}// end displayEmployeeBonus

function employeeBonus(employee) {
  console.log('in employeeBonus');
  
  // define empty object
  let newEmployeeObject = {};
  // get employee's name
  newEmployeeObject.name = employee.name
  // get bonusPercentage and define it as new variable
  let bonusPercentage = bonusCalculation(employee);
  // add to new object
  newEmployeeObject.bonusPercentage = bonusPercentage;
  // define new totalBonus variable
  let totalBonus = Math.round(employee.annualSalary * bonusPercentage);
  // add to new object
  newEmployeeObject.totalBonus = totalBonus
  // define new totalCompensation variable
  let totalCompensation = Number(employee.annualSalary) + totalBonus;
  // add to new object
  newEmployeeObject.totalCompensation = totalCompensation
  // display on DOM
  displayEmployeeBonus(newEmployeeObject);
  // return object
  return newEmployeeObject;
}// end employeeBonus

function bonusCalculation(employee) {
  console.log('in bonusCalculation');
  
  let bonusPercentage = 0;

  if (employee.reviewRating === 3) {
    bonusPercentage += .04
  }// end rating of 3
  else if (employee.reviewRating === 4) {
    bonusPercentage += .06
  }// end rating of 4
  else if (employee.reviewRating === 5) {
    bonusPercentage += .1
  }// end rating of 5

  if (employee.employeeNumber.length === 4) {
    bonusPercentage += .05;
  }// end employee # four digits long

  if (Number(employee.annualSalary) > 65000) {
    bonusPercentage -= .01;
  }// end employee annual income greater than $65000

  if (bonusPercentage > .13) {
    bonusPercentage = .13;
  }// end employee bonusPercentage over .13

  if (bonusPercentage < 0) {
    bonusPercentage = 0;
  }// end employee bonusPercentage below 0

  return bonusPercentage;
}// end bonusCalculation