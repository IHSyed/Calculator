#!/usr/bin/env node

//console.log("Hello Nono");

import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";

const sleep = () => {
    return new Promise((res) =>{
        setTimeout(res, 9000);
    })
}

async function welcome(){
    let title = chalkAnimation.karaoke("This is very simple and Basic Calculator");

await sleep();
title.stop();
//console.log();

//console.log ("You may insert a drawing of calculator here from asiiart.eu, within BACKTICKS");

}

await welcome();

//Our Functionality Code Starts Here
//The templates can be copied from INQUIRER

async function askQuestion() {
    const answer = await inquirer
    .prompt([
        {
            type : "list",
            name : "operator",
            message : ("Which Calculation you want to carry out ??  :"),
            choices :["Addition", "Subtraction", "Multiplication", "Division", "Exponential"]
        },
        
        {
            type : "number",
            name : "num1",
            message : ("Enter the FIRST Number  :"),
            
        },
        
        {
            type : "number",
            name : "num2",
            message : ("Enter the SECOND Number  :"),
        
        },

    ]);

        if(answer.operator == "Addition") {
            console.log(chalk.green("Sum of " + answer.num1 + " & " + answer.num2 + " = " +  (answer.num1 + answer.num2)));
        }
        
        else if(answer.operator == "Subtraction") {
            console.log(chalk.green("Difference of " + answer.num1 + " & " + answer.num2 + " = " +  (answer.num1 - answer.num2)));
        }

        else if(answer.operator == "Multiplication") {
            
            console.log(chalk.yellow("Product of " + answer.num1 + " & " + answer.num2 + " = " +  (answer.num1 * answer.num2)));
        }
        
        else if(answer.operator == "Division") {
            console.log(chalk.yellow("Division of " + answer.num1 + " & " + answer.num2 + " = " +  (answer.num1 / answer.num2)));
        }
        
        else if(answer.operator == "Exponential") {
            console.log(chalk.green("Result of " + answer.num1 + " to power " + answer.num2 + " = " +  (answer.num1 ** answer.num2)));
        }

        //else {
           // console.error("Unexpected Input. Try again.");
        //}

        };



//askQuestion();

async function startAgain(){
    do { await askQuestion();
    var again = await inquirer

    .prompt ({
        type : "input",
        name : "restart",
        message : "DO YOU WANT TO CONTINUE WITH THE CALCULATOR ??. Press y or n. "
    })

} while(again.restart == "y" || again.restart == "Y" || again.restart == "Yes" || again.restart == "YES" )
}

startAgain();

