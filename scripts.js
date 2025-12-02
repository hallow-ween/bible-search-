const bookSelector = document.getElementById("bibleBooks");
const bibleVerseAndChapter = 
document.getElementById("bibleVerseAndChap");
const verseName =
document.getElementById("verseName");
const verseText =
document.getElementById("verseText");

function findVerse() {
const bookvalue = 
bookSelector.value.trim();
const chapnversevalue =
bibleVerseAndChapter.value.trim();

let bibleverse = {};
fetch(`https://bible-api.com/${bookvalue}+${chapnversevalue}`)
.then (response => response.json())
.then (data => { bibleverse = data;
console.log(data);
verseName.textContent = data.reference;
verseText.textContent = data.text;
})

.catch(err => console.error(err));
};



