let a = 0;

// Calculates 1 x 5 in the most oblivious way
do {
    a++
} while (a < 5)

// Shows a as string in answer section
document.getElementById("answer").innerHTML = a.toString();