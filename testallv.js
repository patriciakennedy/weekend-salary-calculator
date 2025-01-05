// Console Test
console.log('Jesus');

// Create a reference to the submit button
const addNewEmployee = document.querySelector('#submitButton');

// Add the event listener to the button
addNewEmployee.addEventListener('click', newEmployee);

// Track the total monthly cost
let totalMonthlyCost = 0;

// Function to run when the button is clicked
function newEmployee(event) {
  console.log('My God is Able');
  


  // Prevent the form from refreshing the page
  event.preventDefault();

  // Collect input values
  const firstName = document.querySelector('#first-name').value;
  const lastName = document.querySelector('#last-name').value;
  const idNumber = document.querySelector('#id-number').value;
  const jobTitle = document.querySelector('#job-title').value;
  const annualSalary = Number(document.querySelector('#annual-salary').value); // Convert to number

  // Calculate monthly salary
  const monthlySalary = annualSalary / 12;

  // Add to total monthly cost
  totalMonthlyCost += monthlySalary;

  // Create a new table row
  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${firstName}</td>
    <td>${lastName}</td>
    <td>${idNumber}</td>
    <td>${jobTitle}</td>
    <td>${annualSalary}</td>
    <td><button class="delete-button">Delete</button></td>
  `;

  // Append the row to the table body
  const tableBody = document.querySelector('tbody');
  tableBody.appendChild(row);

  // Update the footer with the total monthly cost
  updateFooter();

  // Clear the form inputs
  document.querySelector('#first-name').value = '';
  document.querySelector('#last-name').value = '';
  document.querySelector('#id-number').value = '';
  document.querySelector('#job-title').value = '';
  document.querySelector('#annual-salary').value = '';

  // Add delete functionality to the new button
  // const deleteButton = row.querySelector('.delete-button');
  // deleteButton.addEventListener('click', function () {
  //   const confirmDelete = confirm('Delete this record?');
  //   if (confirmDelete) {
  //     // Subtract this row's monthly salary from the total
  //     totalMonthlyCost -= monthlySalary;
  //     row.remove(); // Remove the row
  //     updateFooter(); // Update the footer
  //   }
  // });
  const deleteButton = row.querySelector('.delete-button');
  deleteButton.addEventListener('click', function () {
    const confirmDelete = confirm('Delete this record?');
    if (confirmDelete) {
      // Remove the row and update total cost
      totalMonthlyCost -= monthlySalary;
      row.remove(); // Ensure this targets the correct parent row
      updateFooter();
    }
  });

}

// Function to update the footer
function updateFooter() {
  const footer = document.querySelector('footer');
  const totalMonthlyParagraph = footer.querySelector('p');
  totalMonthlyParagraph.textContent = `Total Monthly: $${totalMonthlyCost.toFixed(2)}`;

  // Check if over budget
  if (totalMonthlyCost > 20000) {
    footer.classList.add('over-budget'); // Add CSS class
  } else {
    footer.classList.remove('over-budget'); // Remove CSS class
  }
};
