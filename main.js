function determinepass() {
    // 1. Get the value from your HTML "Structure"
    let userEntry = document.getElementById("passkeyPrivate").value;
    let feedback = document.getElementById("pass");

    // 2. Check the logic (Behavior)
    if (userEntry.length < 5) {
        feedback.innerHTML = "Error: Password must be 5+ characters.";
        feedback.style.color = "red";
    } else {
        feedback.innerHTML = "Success! Password accepted.";
        feedback.style.color = "green";
        window.alert("Entered password: " + userEntry); // Fixed the alert bug
    }
}