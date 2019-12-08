# TemplateEngine

Instructions

You will build a software engineering team generator command line application. The application will prompt the user for information about the team manager and then information about the team members. The user can input any number of team members, and they may be a mix of engineers and interns. This assignment must also pass all unit tests. When the user has completed building the team, the application will create an HTML file that displays a nicely formatted team roster based on the information provided by the user.

Code Breakdown:

1. create testing js file - DONE
2. use INQUIRER for prompts
3. The project must prompt the user to build an engineering team. An engineering
   team consists of a manager, and any number of engineers and interns.
4. Prompt for email, id, and specific information based on their role with the company. For instance, an intern may provide their school, whereas an engineer may provide their GitHub username.
5. Your app will run as a Node CLI to gather information about each employee.
6. You will want to make your methods as pure as possible. This means try to make your methods simple so that they are easier to test.
7. The different employee types should all inherit some methods and properties from a base class of Employee.
8. In your HTML template files, you may want to add a placeholder character that helps your program identify where the dynamic markup begins and ends.

Classes

1. The project must have the these classes: Employee, Manager, Engineer,
   Intern. The tests for these classes in the tests directory must all pass.
2. The first class is an Employee parent class with the following properties and
   methods:
   name
   id
   title
   getName()
   getId()
   getEmail()
   getRole() // Returns 'Employee'
3. The other three classes will extend Employee.
4. In addition to Employee's properties and methods, Manager will also have:
   officeNumber
   getRole() // Overridden to return 'Manager'
5. In addition to Employee's properties and methods, Engineer will also have:
   github // GitHub username
   getGithub()
   getRole() // Overridden to return 'Engineer'
6. In addition to Employee's properties and methods, Intern will also have:
   school
   getSchool()
   getRole() // Overridden to return 'Intern'

Output

1. The project must generate a team.html page in the output directory, that displays a nicely formatted team roster. Each team member should display the following in no particular order:
   Name
   Role
   ID
   Role-specific property (School, link to GitHub profile, or office number)

Description: This application allows user to build their employee page using command line interface and Inquirer Prompts. After you submit your data the program will generate an html page with the team employee cards. We use classes to instantiate different types of employees: manager, engineer, and intern.

Installation: You will need Node.js, along with the following Node packages: fs-extra, util, and inquirer.

Usage: This is for a software company so they can easily generate a team page.

Credits:

getbootstrap.com
Node
Inquirer
Util
FS-extra
Jest

License: n/a

Badges: n/a

Contributing: n/a

Tests: I use jest to confirm that the class and subclasses run correctly.
