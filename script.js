const quotes = [
  'Quote No.1 "Lorem ipsum dolor sit amet, consectetur" 11/06/2023 4:35 PM',
  'Quote No.2 "adipiscing elit. In in viverra augue." 12/19/2023 7:52 PM',
  'Quote No.3 "Aliquam facilisis, ex et" 12/19/2023 7:57 PM',
  'Quote No.4 "dignissim rhoncus" 12/19/2023 8:56 PM',
  'Quote No.5 "mi purus lobortis lorem, quis efficitur" 12/19/2023 8:57 PM',
  'Quote No.6 "nunc nisi at lectus. Fusce at odio sit amet" 12/21/2023 9:16 PM',
];

const letterArray = [];

chooseRandomQuote();

function chooseRandomQuote() {
  // chooses a random quote from the array, quotes
  const randomNumber = Math.floor(Math.random() * quotes.length);
  // parses out just the quote from the saved file and into individual letters
  const randomQuote = quotes[randomNumber].split(/[""]/);
  const quoteLetters = randomQuote[1].split("");

  displayQuote(quoteLetters);
}

function displayQuote(quoteletters) {
  // displays the quote as lines for letters, preserves special characters and spaces
  quoteLetters.map((a) => {
    letterArray.push(a);
    // console.log(letterArray);

    // dynamically creating elements to place each letter in
    let letterBox = document.createElement("div");
    let letter = document.createElement("p");

    // ensures that only letters, and no spaces or special characters, get hidden and have underlines
    let regex = /^[a-z]$/i;

    if (a.match(regex)) {
      letterBox.setAttribute("class", "underlines");
      letter.setAttribute("class", "hidden");
    }

    //enables finding matching letters
    letter.setAttribute("id", index);

    letter.innerText = a;
    letterBox.appendChild(letter);
    document.body.appendChild(letterBox);
  });
}

// function to find all matching letters from command to quote
function getAllIndexes(array, command) {
  array = array.map((a) => a.toLowerCase());
  let indexes = [];
  let i = -1;
  while ((i = array.indexOf(command, i + 1)) != -1) {
    indexes.push(i);
  }
  if (indexes.length < 1) {
    document.getElementById(
      "alert"
    ).innerText = `'${command}' is not in the quote!`;
  } else {
    document.getElementById(
      "alert"
    ).innerText = `'${command}' is in the quote ${indexes.length} times!`;
  }
  findP(indexes);
}

// for matching indexes, the letter is then displayed on screen
function findP(indexes) {
  indexes.forEach((a) => {
    document.getElementById(a).classList.remove("hidden");
    document.getElementById(a).parentNode.classList.remove("underlines");
  });
}

let submittedLetters = [];

//recognizes !letter, ie. !a, commands regardless of case and only one letter at a time
ComfyJS.onCommand = (user, command, message, flags, extra) => {
  let regex = /^[a-z]$/;
  if (regex.test(command)) {
    console.log(`!${command} was typed in chat`);
  }

  // checks if letter has already been guessed
  if (submittedLetters.indexOf(command) >= 0) {
    document.getElementById(
      "alert"
    ).innerText = `'${command}' has already been guessed`;
  } else { // if letter is new, push to an array that is displayed
    submittedLetters.push(`${command}`);
    submittedLetters.sort();
    document.getElementById(
      "submittedLetters"
    ).innerText = `guessed letters: ${submittedLetters}`;
    getAllIndexes(letterArray, command);
  }
};

//test command for connection
//messages sent in chat should appear in the <h1> element at the top of the page
ComfyJS.onChat = (user, message, flags, self, extra) => {
  console.log(user, message);
  document.getElementById("test").innerText = message;
};

//connects twitch account, parkypark123, to comfyjs
ComfyJS.Init("parkypark123");
