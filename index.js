#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log("-".repeat(50));
console.log(chalk.blue("\n \tWelcome To The TypeScript Quiz\t \n"));
console.log("-".repeat(50));
const quiz = await inquirer.prompt([
    {
        name: "question_1",
        type: "list",
        message: chalk.italic("\n1. TypeScript can always correctly infer a variables type.\n"),
        choices: ["True", "False"]
    },
    {
        name: "question_2",
        type: "list",
        message: chalk.italic("\n2.______ is similar to 'any', but a safer alternative when uncertain about the type.\n"),
        choices: ["unknown", "similar", "never"]
    },
    {
        name: "question_3",
        type: "list",
        message: chalk.italic("\n3. TypeScript will always correctly infer the type of an array.\n"),
        choices: ["True", "False"]
    },
    {
        name: "question_4",
        type: "list",
        message: chalk.italic("\n4. a Tuple and an Array are the same thing when discussing types.\n"),
        choices: ["True", "False"]
    },
    {
        name: "question_5",
        type: "list",
        message: chalk.italic("\n5.________ an interface will have the same properties as that interface.\n"),
        choices: ["Duplicating", "Improving", "Extending", "Idolizing"]
    },
    {
        name: "question_6",
        type: "list",
        message: chalk.italic("\n6. Numeric enums first value is defaulted to what?\n"),
        choices: ["1", "5", "10", "0"]
    },
    {
        name: "question_7",
        type: "list",
        message: chalk.italic("\n7._____ is a return type for when nothing is returned.\n"),
        choices: ["void", "any[]", "unknown", "any"]
    },
    {
        name: "question_8",
        type: "list",
        message: chalk.italic("\n8. Which of the following is NOT a valid TypeScript data type?\n"),
        choices: ["void", "any", "dynamic", "tuple"]
    },
    {
        name: "question_9",
        type: "list",
        message: chalk.italic("\n9. What is TypeScript primarily used for?\n"),
        choices: ["Memory Management",
            "Dynamic Typing",
            "Static Typing",
            "Asynchronous operations"]
    },
    {
        name: "question_10",
        type: "list",
        message: chalk.italic("\n10. How do you define an optional parameter in the TypeScript function?\n"),
        choices: ["function foo(param: string?)",
            "function foo(param?: string)",
            "function foo(param string=)",
            "function foo(param string?)",]
    }
]);
let score = 0;
switch (quiz.question_1) {
    case "False":
        console.log(chalk.green("\n1. Correct!\n"));
        ++score;
        break;
    default:
        console.log(chalk.red("\n1. Incorrect!\n"));
}
switch (quiz.question_2) {
    case "unknown":
        console.log(chalk.green("\n2. Correct!\n"));
        ++score;
        break;
    default:
        console.log(chalk.red("\n2. Incorrect!\n"));
}
switch (quiz.question_3) {
    case "False":
        console.log(chalk.green("\n3. Correct!\n"));
        ++score;
        break;
    default:
        console.log(chalk.red("\n3. Incorrect!\n"));
}
switch (quiz.question_4) {
    case "False":
        console.log(chalk.green("\n4. Correct!\n"));
        ++score;
        break;
    default:
        console.log(chalk.red("\n4. Incorrect!\n"));
}
switch (quiz.question_5) {
    case "Extending":
        console.log(chalk.green("\n5. Correct!\n"));
        ++score;
        break;
    default:
        console.log(chalk.red("\n5. Incorrect!\n"));
}
switch (quiz.question_6) {
    case "0":
        console.log(chalk.green("\n6. Correct!\n"));
        ++score;
        break;
    default:
        console.log(chalk.red("\n6. Incorrect!\n"));
}
switch (quiz.question_7) {
    case "void":
        console.log(chalk.green("\n7. Correct!\n"));
        ++score;
        break;
    default:
        console.log(chalk.red("\n7. Incorrect!\n"));
}
switch (quiz.question_8) {
    case "dynamic":
        console.log(chalk.green("\n8. Correct!\n"));
        ++score;
        break;
    default:
        console.log(chalk.red("\n8. Incorrect!\n"));
}
switch (quiz.question_9) {
    case "Static Typing":
        console.log(chalk.green("\n9. Correct!\n"));
        ++score;
        break;
    default:
        console.log(chalk.red("\n9. Incorrect!\n"));
}
switch (quiz.question_10) {
    case "function foo(param?: string)":
        console.log(chalk.green("\n10. Correct!\n"));
        ++score;
        break;
    default:
        console.log(chalk.red("\n10. Incorrect!\n"));
}
console.log(chalk.italic(`Your Score is: ${score}`));
if (score === 10) {
    console.log(chalk.green.italic(`Congratulations! You score: ${score}/10, brilliant performance`));
}
else if (score > 5 && score < 10) {
    console.log(chalk.blue.italic(`Good work! Your score is ${score}/10`));
}
else {
    console.log(chalk.red.italic("need to work hard!"));
}
