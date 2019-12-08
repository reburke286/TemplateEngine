const getFourthElement = employee => {
  let fourthElement = "";

  if (employee.getRole() === "Engineer") {
    fourthElement = `Github:${employee.github}`;
  } else if (employee.getRole() === "Intern") {
    fourthElement = `School: ${employee.getSchool()}`;
  } else {
    fourthElement = `Office Number: ${employee.getOfficeNumber()}`;
  }
  return fourthElement;
};

const employeeTemplate = employee => {
  const fourthElementInput = getFourthElement(employee);
  return `<div class="col">
<div class="container">
    <div class="card text-white mb-3" style="max-width: 18rem;">
            <div class="card-header bg-info">
                <h5 class="card-title">${employee.name}</h5>
                <h6 class="card-subtitle mb-2">${employee.getRole()}</h6>
            </div>
            <div class="card-body">
            <row c
            <p class="card-text">ID: ${employee.id}</p>
            <p class="card-text">Email: ${employee.email}</p>
            <p class="card-text">${fourthElementInput}</p>
           
            </div>
    </div>
</div>
</div>
`;
};

module.exports = employeeTemplate;
