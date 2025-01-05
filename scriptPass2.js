// Console Test
console.log('JavaScript is Hard');

// Create a reference to the submit button
const addNewEmployee = document.querySelector('#submitButton');

// Add the event listener to the button
addNewEmployee.addEventListener('click', newEmployee);

// Track the total monthly cost
let totalMonthlyCost = 0;

// Function to run when the button is clicked
function newEmployee(event) {
  // Prevent the form from refreshing the page
  event.preventDefault();

  // Collect input values
  const firstName = document.querySelector('#first-name').value;
  const lastName = document.querySelector('#last-name').value;
  const idNumber = document.querySelector('#id-number').value;
  const jobTitle = document.querySelector('#job-title').value;
  const annualSalary = Number(document.querySelector('#annual-salary').value); // Convert to number

  // Validate inputs
  if (!firstName || !lastName || !idNumber || !jobTitle || !annualSalary) {
    alert('Please fill out all fields before submitting!');
    return; // Stop further execution if validation fails
  }

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
  const deleteButton = row.querySelector('.delete-button');
  deleteButton.addEventListener('click', function (event) {
    const rowToDelete = event.target.closest('tr'); // Get the parent row (closest <tr>)
    totalMonthlyCost -= monthlySalary; // Adjust total monthly cost
    rowToDelete.remove(); // Remove the row from the table
    updateFooter(); // Update the footer to reflect changes
  });
}


function updateFooter() {
  const footer = document.querySelector('footer'); // Use 'footer' as the test expects
  const totalMonthlyParagraph = footer.querySelector('p');
  totalMonthlyParagraph.textContent = `Total Monthly: $${totalMonthlyCost.toFixed(2)}`;

  // Add or remove the 'over-budget' class
  if (totalMonthlyCost > 20000) {
    footer.classList.add('over-budget'); // Add the class if over budget
  } else {
    footer.classList.remove('over-budget'); // Remove the class if within budget
  }
};
