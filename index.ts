import inquirer from "inquirer";

const answers: {
    sentence: string;
} = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter your sentence to count the words:"
    }
]);

const words = answers.sentence.trim().split(" ")

console.log(`Your sentence word counting is ${words.length}`);