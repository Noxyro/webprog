function switchClass(element, from, to) {
    element.classList.remove(from);
    element.classList.add(to);
}

window.onload = function () {
    let foundElements = document.getElementsByClassName("alert");
    if (foundElements < 1) {
        return;
    }

    let targetElement = foundElements[0];
    targetElement.onclick = function () {
        if (targetElement.classList.contains("alert-success")) {
            switchClass(targetElement, "alert-success", "alert-danger");
            return;
        }

        switchClass(targetElement, "alert-danger", "alert-success");
    }
}