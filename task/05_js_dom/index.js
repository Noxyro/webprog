// Switches one class of an element with another
function switchClass(element, from, to) {
    element.classList.remove(from);
    element.classList.add(to);
}

// Executes on finished window load
window.onload = function () {
    // Find all elements containing "alert" class
    let foundElements = document.getElementsByClassName("alert");
    // Verify that we don't end up empty handed
    if (foundElements < 1) {
        return;
    }

    // Get the first element of all found elements
    let targetElement = foundElements[0];
    // Register onClick event to element
    targetElement.onclick = function () {
        if (targetElement.classList.contains("alert-success")) {
            // Switch to red
            switchClass(targetElement, "alert-success", "alert-danger");
            return;
        }
        // Switch to green
        switchClass(targetElement, "alert-danger", "alert-success");
    }
}