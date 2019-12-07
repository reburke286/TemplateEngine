// const getFourthElement = employee => {
//   switch (employee.getRole()) {
//     case "Engineer":
//       return { title: "Github", value: employee.github };
//   }
// };

function employeeTemplate(employee) {
  //   const fourthElement = getFourthElement(employee);
  return `<div class="col">
<div class="container">
    <div class="card text-white mb-3" style="max-width: 18rem;">
            <div class="card-header bg-info">
                <h5 class="card-title">${employee.name}</h5>
                <h6 class="card-subtitle mb-2">${employee.getRole()}</h6>
            </div>
            <div class="card-body">
            <p class="card-text">ID: ${employee.id}</p>
            <p class="card-text">Email: ${employee.email}</p>
           
            </div>
    </div>
</div>
</div>
`;
}

module.exports = employeeTemplate;
