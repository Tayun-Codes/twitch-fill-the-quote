
const quotes = [
    'Quote No.1 "Lorem ipsum dolor sit amet, consectetur" 11/06/2023 4:35 PM',
    'Quote No.2 "adipiscing elit. In in viverra augue." 12/19/2023 7:52 PM',
    'Quote No.3 "Aliquam facilisis, ex et" 12/19/2023 7:57 PM',
    'Quote No.4 "dignissim rhoncus" 12/19/2023 8:56 PM',
    'Quote No.5 "mi purus lobortis lorem, quis efficitur" 12/19/2023 8:57 PM',
    'Quote No.6 "nunc nisi at lectus. Fusce at odio sit amet" 12/21/2023 9:16 PM',
]

chooseQuote()

function chooseQuote() {
    //enables random quote to be chosen
    const randomNumber = Math.floor(Math.random() * quotes.length)
    //parses out just the quote from the saved file and into individual letters
    const randomQuote = quotes[randomNumber].split(/[""]/)
    const quoteLetters = randomQuote[1].split("")

    const letterArray = []

    //dynamically populating each letter of the quote into a div with the underline and a hidden p
    quoteLetters.map((a) => {
        letterArray.push(a)
        console.log(letterArray);

        let letterBox = document.createElement('div')
        let letter = document.createElement('p');
        letterBox.setAttribute('class', 'underlines')
        letter.setAttribute('class', 'hidden')
        letter.innerText = a
        letterBox.appendChild(letter)
        document.body.appendChild(letterBox)
    })
}

//recognizes !letter, ie. !a, commands regardless of case and only one letter at a time
ComfyJS.onCommand = (user, command, message, flags, extra) => {
    let regex = /^[a-z]$/
    if (regex.test(command)) {
        console.log(`!${command} was typed in chat`);
    }
}

//test command for connection
//messages sent in chat should appear in the <h1> element at the top of the page
ComfyJS.onChat = (user, message, flags, self, extra) => {
    console.log(user, message);
    document.getElementById('test').innerText = message;
}

//connects twitch account, parkypark123, to comfyjs
ComfyJS.Init("parkypark123");