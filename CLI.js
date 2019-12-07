const inquirer = require("inquirer");
const fs = require("fs-extra");
const util = require("util");
const questions = require("./questions.js");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const htmlGenerator = require("./templates/main");
const writeFileAsync = util.promisify(fs.writeFile);

async function awaitedPromptUser() {
  const managerAnswers = await inquirer.prompt(questions.managerQuestions);

  const manager = new Manager(
    managerAnswers.manName,
    managerAnswers.manID,
    managerAnswers.manEmail,
    managerAnswers.manOffice
  );
  console.log(manager);

  const numInterns = managerAnswers.howManyInterns;
  if (typeof numInterns !== "number") {
    console.log("Please enter a number");
  }
  const internAnswers = [];
  for (i = 0; i < numInterns; i++) {
    const internAnswer = await inquirer.prompt(questions.internQuestions);
    internAnswers.push(internAnswer);
  }
  const interns = internAnswers.map(internAnswer => {
    return new Intern(
      internAnswer.internName,
      internAnswer.internID,
      internAnswer.internEmail,
      internAnswer.internSchool
    );
  });
  console.log("interns", internAnswers);
  const howManyEngineers = await inquirer.prompt(
    questions.inputHowManyEngineers
  );
  const numOfEngineers = howManyEngineers.howManyEng;

  if (typeof numOfEngineers !== "number") {
    console.log("Please enter a number");
  }
  const engineerAnswers = [];
  for (i = 0; i < numOfEngineers; i++) {
    const engineerAnswer = await inquirer.prompt(questions.engineerQuestions);
    engineerAnswers.push(engineerAnswer);
  }
  console.log("engineers", engineerAnswers);
  const engineers = engineerAnswers.map(engineerAnswer => {
    return new Engineer(
      engineerAnswer.engName,
      engineerAnswer.engID,
      engineerAnswer.engEmail,
      engineerAnswer.engGithub
    );
  });

  const html = htmlGenerator([manager, ...interns, ...engineers]);
  await writeFileAsync("index.html", html);
}

async function promptUserForEngineer() {
  const howManyEngineers = await inquirer.prompt(
    questions.inputHowManyEngineers
  );
  const numOfEngineers = howManyEngineers.howManyEng;
  console.log(numOfEngineers);

  // if (typeOf(numOfEngineers) !== "number") {
  //   console.log("Please enter a number");
  // }
  const engineerAnswers = [];
  for (i = 0; i < numOfEngineers; i++) {
    const engineerAnswer = await inquirer.prompt(questions.engineerQuestions);
    engineerAnswers.push(engineerAnswer);
  }
  console.log("engineers", engineerAnswers);
  const engineers = engineerAnswers.map(engineerAnswer => {
    return new Engineer(
      engineerAnswer.engineerName,
      engineerAnswer.engineerID,
      engineerAnswer.engineerEmail,
      engineerAnswer.engineerGithub
    );
  });
  return inquirer.prompt(questions.engineerQuestions).then(answers => {});
}

function promptUserForManager() {
  return inquirer.prompt(questions.managerQuestions).then(answers => {
    const manager = new Manager(
      answers.manName,
      answers.manID,
      answers.manEmail,
      answers.manOffice
    );
    console.log(manager);
    inquirer.prompt(questions.whichEmp).then(whichEmployee => {
      if (whichEmployee === "intern") {
        return questions.internQuestions;
      }
      return questions.engineerQuestions;
    });
    const html = htmlGenerator([manager]);
    return writeFileAsync("index.html", html);
  });
}

//how to run prompts to correctly capture which employee
//and how to run until user wants to stop
//how to get data cards into even rows of three
//modulus ? if 0, open, if 3 close is one idea
// partioning array is also an idea

awaitedPromptUser();
