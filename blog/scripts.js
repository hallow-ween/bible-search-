

function detectedUA() {
const ua = navigator.userAgent;
const chromeWeb = /Chrome|CriOS/.test(ua) && !/Edge|OPR/.test(ua);
const device = /iPhone|Android|iPod|iPad/.test(ua);
// const testPara = document.getElementById("test");
// testPara.textContent = ua;
  return chromeWeb || device;
}

if (detectedUA()) {
alert("⚠️ This tool might function incorrectly on your device and browser! Please switch to a different browser. You can still save your profile picture by taking a screenshot!"); 
}


const redS =    
  document.getElementById("RedSlider");
const blueS = 
  document.getElementById("BlueSlider");
const greenS = 
  document.getElementById("GreenSlider");

const redVal =
  document.getElementById("RedV");
const blueVal =
  document.getElementById("BlueV");
const greenVal =
  document.getElementById("GreenV");

const colorBox =
  document.getElementById("ColorBox");

function updateColor() {
const Red = 
  redS.value;
const Blue =
  blueS.value;
const Green =
  greenS.value;

const updatedColor =
  `rgb(${Red}, ${Green}, ${Blue})`;

colorBox.style.backgroundColor =
  updatedColor;

redVal.textContent = "Red: " + Red;
greenVal.textContent = "Green: " + Green;
blueVal.textContent = "Blue: " + Blue;

}

redS.addEventListener("input", updateColor);
greenS.addEventListener("input", updateColor);
blueS.addEventListener("input", updateColor);

updateColor();


const downloadB = document.getElementById("downloadBtn");

downloadB.addEventListener("click", function() {
const entireEle = document.querySelector(".container");

  
html2canvas(entireEle).then(canvas => {
canvas.toBlob(function(blob) {
const downloadLink =  document.createElement('a');
downloadLink.href = URL.createObjectURL(blob);
  downloadLink.download = "profilebyhlwn.png";
  downloadLink.click();
});
});
});

const openB = document.getElementById("openBtn");

openB.addEventListener("click", function() {
const entireEle = document.querySelector(".container");

 const newWindow = window.open('', "_blank");
  
html2canvas(entireEle).then(canvas => {
    const imgURL = canvas.toDataURL(); 
    newWindow.document.write(`<img src="${imgURL}">`);
    newWindow.document.title = "Profile Pic :)";
  });
});



let currentHat = 0;
let allHats = 9;
let highHats = 9;
let lowHats = 0;

let currentBadge = 0;
let allBadges = 2;
let highBadges = 2;
let lowBadges = 0;

// Hats 

const tophat =
  document.getElementById("1");
const bananahat =
  document.getElementById("2");
const chefshat =
  document.getElementById("3");
const cowboyhat =
  document.getElementById("4");
const headphones =
  document.getElementById("5");
const partyhat =
  document.getElementById("6");
const ushanka =
  document.getElementById("7");
const fez =
  document.getElementById("8");
const pumpkin = 
  document.getElementById("9")


// EVERY Single Hat

const everyImage =
 document.getElementById("allCos");

// Hats Array

const hats = [tophat, bananahat, chefshat, cowboyhat, headphones, partyhat, ushanka, fez, pumpkin];
  
// Badges

const everyBadge =
document.getElementById("allBadges");
const aac =
  document.getElementById("1B");
const fingerpainter =
  document.getElementById("2B");

// Badges Array

const badges = [aac, fingerpainter];


function updateHat() {
hats.forEach(hat => hat.style.opacity = 0);

// const testPara = document.getElementById("test");
// testPara.textContent = currentImg;
  
  switch (currentHat) {
case 0:
everyImage.style.opacity = 1;
  break;
case 1: 
tophat.style.opacity = 1;
  break;
case 2: 
bananahat.style.opacity = 1;
  break;
case 3: 
chefshat.style.opacity = 1;
  break;
case 4:
cowboyhat.style.opacity = 1;
  break;
case 5: 
headphones.style.opacity = 1;
break;
case 6:
partyhat.style.opacity = 1;
break;
case 7:
ushanka.style.opacity = 1;
break;
case 8:
fez.style.opacity = 1;
break;  
case 9:
pumpkin.style.opacity = 1;
break;
}
}

function forwardHats() {
if (currentHat < highHats) {
  currentHat++;
updateHat();
}
}

function backHats() {
if (currentHat > lowHats) {
  currentHat--;
  updateHat();
}
}


function updateBadge() {

badges.forEach(badge => badge.style.opacity = 0);
  switch (currentBadge) {
    case 0:
  everyBadge.style.opacity = 1;
badges.forEach(badge => badge.style.opacity = 0);
    break;
    case 1:
  aac.style.opacity = 1;
    break;
    case 2: 
  fingerpainter.style.opacity = 1;
      break;
  }
  }

function forwardBadges() {
if (currentBadge < highBadges) {
  currentBadge++;
updateBadge();
}
}

function backBadges() {
if (currentBadge > lowBadges) {
  currentBadge--;
  updateBadge();
}
}


updateHat();
updateBadge();
                      
