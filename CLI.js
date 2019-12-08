const inquirer = require("inquirer");
const fs = require("fs-extra");
const util = require("util");
const questions = require("./questions.js");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const htmlGenerator = require("./Generators/main");
const writeFileAsync = util.promisify(fs.writeFile);

async function awaitedPromptUser() {
  const managerAnswers = await inquirer.prompt(questions.managerQuestions);

  const manager = new Manager(
    managerAnswers.manName,
    managerAnswers.manID,
    managerAnswers.manEmail,
    managerAnswers.manOffice
  );

  const numInterns = managerAnswers.howManyInterns;
  if (isNaN(numInterns)) {
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

  const howManyEngineers = await inquirer.prompt(
    questions.inputHowManyEngineers
  );
  const numOfEngineers = howManyEngineers.howManyEng;

  if (isNaN(numOfEngineers)) {
    console.log("Please enter a number");
  }
  const engineerAnswers = [];
  for (i = 0; i < numOfEngineers; i++) {
    const engineerAnswer = await inquirer.prompt(questions.engineerQuestions);
    engineerAnswers.push(engineerAnswer);
  }
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

awaitedPromptUser();
