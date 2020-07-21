
let nickname = document.getElementById("nicknames");
let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");

let nicknames;

document.getElementById("one").addEventListener("click", generateRandomNickname);
document.getElementById("all").addEventListener("click", displayAllNicknames);

fetch("nicknames.txt")
  .then((rawData) => rawData.text())
  .then((data) => {
    nicknames = data.split(",");
  });

function generateRandomNickname() {
  nickname.innerHTML =
    firstName.value +
    nicknames[randomInt(0, nicknames.length)] +
    lastName.value;
    //So, a random nickname is generated everytime someone clicks the Generate one
}

function displayAllNicknames() {
  nickname.innerHTML = "";
  for (let i = 0; i < nicknames.length; i++) {
    nickname.innerHTML +=
      "<p>" + firstName.value + nicknames[i] + lastName.value + "<p>";
  }
  //Generates all and then makes seperate <p> to display each in a line as opposed to a line
}
