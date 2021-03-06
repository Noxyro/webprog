import {sayHello} from "./lib/utils.js";

let inputField = document.getElementById("input") as HTMLInputElement;

inputField.addEventListener("keyup", function (event) {
    event.preventDefault();
    if (event.code === "Enter") {
        let result: string;

        result = sayHello(inputField.value);

        console.log(result);
    }
})