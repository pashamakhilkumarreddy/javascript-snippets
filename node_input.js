// Use readline-sync or inquirer for additional functionalities

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question(`Como estas `, (ans) => {
  console.info(`Estas ${ans.trim()} `);
  readline.close();
});
