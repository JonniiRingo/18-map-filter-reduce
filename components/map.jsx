
import emojipedia from "./emojipedia";


// Pass a function to map
const mapped_emojies = emojipedia.map(function(x){
    return {
        id: x.id,
        emoji: x.emoji,
        name: x.name,
        meaning: x.meaening.substring(0,100)
    }; 
});

console.log(mapped_emojies);


export default mapped_emojies; 
