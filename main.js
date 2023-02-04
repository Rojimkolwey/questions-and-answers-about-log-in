const plusbtns = document.querySelectorAll(".plus-btn");
const contents = document.querySelectorAll(".content");

console.log(plusbtns);

const openCard = () => {
  for (let index = 0; index < plusbtns.length; index++) {
    plusbtns[index].addEventListener("click", () => {
      contents.forEach((content, contentIndex) => {
        if (!(index === contentIndex)) {
          content.classList.remove("show");
        }
      });

      contents[index].classList.toggle("show");
    });
  }
};

// call the func
openCard();

// plusbtns.forEach((btn, index) => {
//   btn.addEventListener("click", () => {
//     contents.forEach((content, contentIndex) => {
//       if (index === contentIndex) {
//         content.classList.toggle("show");
//       }
//     });
//   });
// });
