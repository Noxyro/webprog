import {sayHello} from "./lib/utils.js";

var inputField = document.getElementById("input");
inputField.addEventListener("keyup", function (event) {
    event.preventDefault();
    if (event.code === "Enter") {
        var result = void 0;
        result = sayHello(inputField.value);
        console.log(result);
    }
});
//# sourceMappingURL=program.js.map