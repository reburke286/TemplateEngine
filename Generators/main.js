const employeeTemplate = require("./employeeTemplate");

const htmlGenerator = employees => {
  console.log(employees);
  for (let i = 0; i < employees.length; i++) {
    if (employees[i] % 3 === 0) {
      `<div class="row">
      ${employees.map(employee => employeeTemplate(employee))}`;
    }
  }

  return `
<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"/>
        <link href="https://fonts.googleapis.com/css?family=BioRhyme|Cabin&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <title>My Team</title>
        <style>
           h1 {
                color: white;
                text-align: center;
            }
            h6 {
                color: white;
            }
            p {
                color: black;
                border: gray 1px solid;
                border-radius: 5px;
                padding: 5px;
                margin: 0px;
                background-color: white;
            }
            .card-body {
                background-color: lightgray;

            }
          
        </style>
        <body>
            <div class="jumbotron jumbotron-fluid bg-danger">
                <div class="container">
                  <h1 class="display-4">My Team</h1>
                </div>
              </div>
            <div class="row">
            ${employees.map(employee => employeeTemplate(employee)).join(" ")}
               
        </body>
    </html>
`;
};

module.exports = htmlGenerator;
