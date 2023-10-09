function displayQuestions(answer) {
  document.getElementById('nextquestions').style.display = "block";

  if (answer == "Oui") { // hide the div that is not selected
    document.getElementById('nextquestions').style.display = "block";

  } else if (answer == "Non") {
    document.getElementById('nextquestions').style.display = "none";
  }
}
