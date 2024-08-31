// const container = document.getElementById("container");
// const imageOne = document.querySelector(".image-1");
// const imageTwo = document.querySelector(".image-2");
// const btnYes = document.querySelector(".btn-yes");
// const btnNo = document.querySelector(".btn-no");

// function getRandomNumber(min, max) {
//   // Calculate the random number between min and max (inclusive)
//   const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

//   return randomNumber;
// }

// btnNo.addEventListener("mouseover", (event) => {
//   const containerHeight = container.getBoundingClientRect().height;
//   const containerWidth = container.getBoundingClientRect().width;
//   const btnHeight = btnNo.getBoundingClientRect().height;
//   const btnWidth = btnNo.getBoundingClientRect().width;
//   const btnTop = btnNo.getBoundingClientRect().top;
//   const btnLeft = btnNo.getBoundingClientRect().left;

//   let newTop = btnTop;
//   let newLeft = btnLeft;
//   while (Math.abs(newTop - btnTop) < containerHeight / 3) {
//     newTop = getRandomNumber(0, containerHeight - btnHeight);
//   }

//   while (Math.abs(newLeft - btnLeft) < containerWidth / 3) {
//     newLeft = getRandomNumber(0, containerWidth - btnWidth);
//   }

//   btnNo.style.top = Math.floor(newTop) + "px";
//   btnNo.style.left = Math.floor(newLeft) + "px";
// });



const btnYes = document.querySelector(".btn-yes");
const btnNo = document.querySelector(".btn-no");
const container = document.getElementById("container");
const imageOne = document.querySelector(".image-1");
const imageTwo = document.querySelector(".image-2");


btnYes.addEventListener("click", (e) => {
  btnNo.classList.add("hide");
  btnYes.classList.add("hide");
  imageOne.classList.add("hide");
  imageTwo.classList.remove("hide");
});
// btnNo.addEventListener("click", (e) => {
//     top +=20
//     bottom +=20
//     btnYes.style.fontSize = '2rem';  // Increase font size
//     btnYes.style.padding = `${top}px ${button}px`;
 
// });
function increaseOtherButton(button) {
    // Get current font size and padding, and increase them
    let currentFontSize = parseFloat(window.getComputedStyle(button).fontSize);
    let currentPaddingTopBottom = parseFloat(window.getComputedStyle(button).paddingTop);
    let currentPaddingLeftRight = parseFloat(window.getComputedStyle(button).paddingLeft);

    // Increase font size and padding
    button.style.fontSize = (currentFontSize + 2) + 'px';
    button.style.padding = (currentPaddingTopBottom + 2) + 'px ' + (currentPaddingLeftRight + 4) + 'px';
}

// Add event listeners to both buttons
btnNo.addEventListener('click', () => {
    increaseOtherButton(btnYes);
    // alert("Please say yes😢")
});

