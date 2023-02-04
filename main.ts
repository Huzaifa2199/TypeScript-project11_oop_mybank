#!/usr/bin/env node
import { answers } from "./customer.js";


if(answers.userName && answers.userPin) {
    const accountBalance = Math.floor(Math.random()*100000);
    console.log(accountBalance)
    const enteredAmount = answers.amount;
    if(accountBalance >= enteredAmount){
        const remainingBalance = accountBalance - enteredAmount;
        console.log("Your remaining balance is:", remainingBalance)
    } else {
        console.log("Insuficient Balance")
    }
}