import emojipedia from "./emojipedia.js"; 



const emojipedia_100 = emojipedia.map(function (emojiEntry){
    return emojiEntry.meaning.substring(0,100)
});

console.log(emojipedia_100); 