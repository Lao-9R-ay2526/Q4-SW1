function determinepass() {
   
    let userEntry = document.getElementById("passkeyPrivate").value;
    let feedback = document.getElementById("pass");

  
    if (userEntry.length < 5) {
        feedback.innerHTML = "Error: Password must be 5+ characters.";
        feedback.style.color = "red";
    } else {
        feedback.innerHTML = "Success! Password accepted.";
        feedback.style.color = "green";
        window.alert("Entered password: " + userEntry);
    }
}
