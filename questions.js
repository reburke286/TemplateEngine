const engineerQuestions = [
  { type: "input", name: "engName", message: "What is your engineer's name?" },
  {
    type: "input",
    name: "engID",
    message: "What is your engineer's unique ID?"
  },
  {
    type: "input",
    name: "engEmail",
    message: "What is your engineer's email?"
  },
  {
    type: "input",
    name: "engGithub",
    message: "What is your engineer's github?"
  }
];
const inputHowManyEngineers = [
  {
    type: "input",
    name: "howManyEng",
    message: "How many engineers would you like to add?"
  }
];

const managerQuestions = [
  {
    type: "input",
    name: "manName",
    message: "What is your company's manager's name?",
    default: "Manager TBD"
  },
  {
    type: "input",
    name: "manID",
    message: "What is your company's manager's ID?",
    default: "ID TBD"
  },
  {
    type: "input",
    name: "manEmail",
    message: "What is your company's manager's email?",
    default: "Email TBD"
  },
  {
    type: "input",
    name: "manOffice",
    message: "What is your manager's office number?",
    default: "Office TBD"
  },
  {
    type: "input",
    name: "howManyInterns",
    message: "Great! How many interns would you like to add?"
  }
];

const internQuestions = [
  {
    type: "input",
    name: "internName",
    message: "What is the intern's name?"
  },
  {
    type: "input",
    name: "internID",
    message: "What ID would you like to assign the intern?"
  },
  {
    type: "input",
    name: "internEmail",
    message: "What is the intern's email?"
  },
  {
    type: "input",
    name: "internSchool",
    message: "What school is the intern attending?"
  }
];

module.exports = {
  engineerQuestions,
  managerQuestions,
  internQuestions,
  inputHowManyEngineers
};
