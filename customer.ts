import inquirer from "inquirer";

interface ansType {
    signUp: string
    userName: string,
    userPin: number,
    userEmail: string,
    userPhone: number,
    accountType: string,
    transactionType: string,
    amount: number

}

export const answers: ansType = await inquirer.prompt([
    {
        type: "list",
        name: "signUp",
        choices: ["Sign in", "Sign up"],
        message: "Welcome to Our Bank"
    },
    {
        type: "input",
        name: "userName",
        message: "Enter your Username",
        when(answers) {
            return answers.signUp
        },
    },
    {
        type: "number",
        name: "userPin",
        message: "Enter your PIN",
        when(answers) {
            return answers.signUp
        },
    },
    {
        type: "input",
        name: "userEmail",
        message: "Enter your email address",
        when(answers) {
            return answers.signUp == "Sign up"
        },
    },
    {
        type: "number",
        name: "userPhone",
        message: "Enter your phone number",
        when(answers) {
            return answers.signUp == "Sign up"
        },
    },
    {
        type: "list",
        name: "accountType",
        choices: ["Current", "Saving"],
        message: "Select your account type"
    },
    {
        type: "list",
        name: "transactionType",
        choices: ["Fast Cash", "withdrawal"],
        message: "Select your transaction method",
        when(answers) {
            return answers.accountType
        },
    },
    {
        type: "list",
        name: "amount",
        choices: [1000, 2000, 3000, 4000],
        message: "Select your amount",
        when(answers) {
            return answers.transactionType == "Fast Cash"
        }
    },
    {
        type: "number",
        name: "amount",
        message: "Enter your amount",
        when(answers) {
            return answers.transactionType == "withdrawal"
        }
    },
])
