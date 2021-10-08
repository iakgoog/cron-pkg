const cron = require("node-cron");
const chalk = require("chalk");

cron.schedule("0,5,10,15,20,25,30,35,40,45,50,55 * * * * *", (i) => {
  console.log(chalk.bgBlue.bold("HELLO WORLD", i));
});
