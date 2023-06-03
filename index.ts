import inquirer from "inquirer";
import chalk from "chalk";
import figlet from "figlet";

console.log(figlet.textSync("ATM Machine"));

let answers = await inquirer.prompt([{
    name: "inputId",
    type: "string",
    message: "Enter Your ID:"
},
    {
        name: "inputPin",
        mask: '*',
        type: "password",
        message: "Enter Your PIN:"
},
    {
        name: "AccType",
        type: "list",
        message: "Select Your Account Type:",
        choices:["Current Account","Saving Account"]
},
{
    name: "Transection",
    type: "list",
    message: "Select Transection To Perform:",
    choices:["Fast Cash","Withdrawl","Balance Inquiry"]
},
{
    name: "FastCash",
    type: "list",
    message: "Select Your Amount:",
    choices:[1000,5000,10000,20000],
    when(answers){
        return answers.Transection=="Fast Cash";
    },
},

{
    name: "Withdrawl",
    type: "number",
    message: "Enter Amount You Want To Withdrawl:",
    when(answers){
        return answers.Transection=="Withdrawl";
    }
}
]);

if(answers.Transection == "Withdrawl"){
    console.log(chalk.blue.bold.underline.italic("Amount Withdrawned Successfully ! "));
   console.log(chalk.red.bold.italic("Your Remaining Balance Is:",1+Math.floor(Math.random()+2500)));
}
 else if(answers.Transection == "Balance Inquiry"){
   let balance=1+Math.floor( Math.random()+2000);
  console.log (chalk.red.bold.italic("Your Remaining Balance Is :",balance));
}
else if(answers.Transection == "Fast Cash"){
    console.log(chalk.blue.bold.italic.underline("Amount Withdrawned Successfully !"));
}