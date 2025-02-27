# Fill the Blank
Integrating Twitch API for a chat minigame! Inspired by Wheel of Fortune, Twitch chat can guess letters to fill in a quote, chosen randomly from a list provided by the streamer.

In my case, the quotes are created by chat by clipping incorrectly said sentences or cutting out parts of sentences to make shocking statements. Quotes filled with lorem ipsum have been provided as dummy data.

**Link to project:** TBD

## How to run it
Download a copy of the repo and open index.html in your browser!
Open the developer tools/the console and feel free to test it by sending messages in my chat at https://twitch.tv/parkypark123/
or you can use it in your own Twitch channel's chat by changing the channel name at the bottom of script.js
'''
ComfyJS.Init("yourTwitchChannelNameHere");
'''

## How It's Made:
Development was streamed live on [Twitch](https://twitch.tv/parkypark123/) on February 24, 2025 and February 26, 2025.
This was part of a 10 hour coding challenge made by myself to get over the fear of coding live and in front of other people.

**Tech used:** HTML, CSS, JavaScript, and [ComfyJS](https://github.com/instafluff/ComfyJS) built by [InstaFluff](https://github.com/instafluff) to integrate Twitch's Chat API
Dynamic document element and attribute population.

## V1.0: MVP
- Reads only ![letter] commands, for example !a, commands and is insensitive to case.
- Extracts quotes within "quotation marks", like so, and displays on page dynamically upon refresh. Does not hide or apply underlines to spaces or special characters.
- Stores submitted letters and sorts them in alphabetical order for chat to easily recognize. Reflects the number of times a letter shows up as well as whether a letter is a repeat on the page.

## Future Features
Always open to suggestions, advice, and tips.

### Importing Quotes
Currently this project is set up so that quotes are manually formatted into an array.
My original quotes are saved to a txt file and I would like this build to read directly from that without external manipulation.

### User Timeouts, Points, and Lives
**User Timeouts**: prevent one user from spamming the alphabet by implementing a delay in which they can try to submit another letter
**Points**: A reward system for engaging with the minigame
**Lives**: Global lives, three to five per quote, to prevent spam and encourage thoughtful responses

### Design
Oh! It's so bland right now!
In line with the theme of my stream, I would like to have 

### React Refactoring
It was suggested that React may have made development easier... One day I would like to refactor this into react and see if that might actually be true.

### ComfyJS Node Package
InstaFluff has created an immensely capable node.js package with ComfyJS and I would like to take more advantage of the options offered there to improve upon this game.
Namely using dotenv to safely use Twitch OAUTH keys to respond/send messages directly in chat.

## Lessons Learned:
Coding live is scary but people have so much fun watching your thought processes and love learning with you.
It's also super fun to debug live and have people celebrate with you when you finally find that one ".maps" instead of ".map"
Also super useful to pick how different people's minds work and try different solutions!

This mini challenge of mine has made me very excited to continue coding live with the support of my community. It was extremely gratifying to see people test my minigame as I built it and a reminder that no project is "too small" to share.

# I DO NOT CLAIM CREDIT FOR COMFYJS
That is entirely developed by [InstaFluff](https://github.com/instafluff) and you can see the full documentation here: [ComfyJS](https://github.com/instafluff/ComfyJS)