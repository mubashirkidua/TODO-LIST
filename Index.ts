#! /usr/bin/env node

import inquirer from "inquirer";
let todos = [];
let condition = true;

while(condition)
    {
        let addTask = await inquirer.prompt(
            [
                {
                    name: "todo",
                    type: "input",
                    message: "What would you like to add in your todos?"
                },
                {
                    name: "addMore",
                    type: "confirm",
                    message: "Would you like to add more in your todos?",
                    default: "false"
                }
            ]
        );
        todos.push(addTask.todo);
        condition = addTask.addMore
        console.log(todos)

        
    }