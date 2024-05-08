import "../css/index.css";

import months from "../images/1.jpg";
import crescent from "../images/5.jpg";
import youngMoon from "../images/10.jpg";
import fullMoon from "../images/17.jpg";
import oldMoon from "../images/24.jpg";
import darkMoon from "../images/28.jpg";

import moon2 from "../images/2.jpg";
import moon3 from "../images/3.jpg";
import moon4 from "../images/4.jpg";
import moon6 from "../images/6.jpg";
import moon7 from "../images/7.jpg";
import moon8 from "../images/8.jpg";
import moon9 from "../images/9.jpg";
import moon11 from "../images/11.jpg";
import moon12 from "../images/12.jpg";
import moon13 from "../images/13.jpg";
import moon14 from "../images/14.jpg";
import moon15 from "../images/15.jpg";
import moon16 from "../images/16.jpg";
import moon18 from "../images/18.jpg";
import moon19 from "../images/19.jpg";
import moon20 from "../images/20.jpg";
import moon21 from "../images/21.jpg";
import moon22 from "../images/22.jpg";
import moon23 from "../images/23.jpg";
import moon25 from "../images/25.jpg";
import moon26 from "../images/26.jpg";
import moon27 from "../images/27.jpg";
import moon29 from "../images/29.jpg";
import moon30 from "../images/30.jpg";

const openModal = document.getElementsByClassName("open-modal");
const closeModal = document.getElementById("close-modal");
const modal = document.getElementById("modal-wrapper");

const changeTitle = (newTitle) => {
  const title = document.getElementById("title");

  title.innerHTML = newTitle;
  title.style.display = "block";
};

const hideTitle = () => {
  document.getElementById("title").style.display = "none";
};

const changeImage = (newImage) => {
  document.getElementById("image").src = newImage;
};

for (let index = 0; index < openModal.length; index++) {
  let element = openModal.item(index);

  switch (element.id) {
    case "months":
      element.onclick = () => {
        modal.style.display = "flex";

        changeTitle("삭");
        changeImage(months);
      };

      break;

    case "crescent":
      element.onclick = () => {
        modal.style.display = "flex";

        changeTitle("초승달");
        changeImage(crescent);
      };

      break;

    case "young-moon":
      element.onclick = () => {
        modal.style.display = "flex";

        changeTitle("상현달");
        changeImage(youngMoon);
      };

      break;

    case "full-moon":
      element.onclick = () => {
        modal.style.display = "flex";

        changeTitle("망");
        changeImage(fullMoon);
      };

      break;

    case "old-moon":
      element.onclick = () => {
        modal.style.display = "flex";

        changeTitle("하현달");
        changeImage(oldMoon);
      };

      break;

    case "dark-moon":
      element.onclick = () => {
        modal.style.display = "flex";

        changeTitle("그믐달");
        changeImage(darkMoon);
      };

      break;

    default:
      element.onclick = () => {
        modal.style.display = "flex";

        hideTitle();

        switch (element.innerHTML) {
          case "2":
            changeImage(moon2);

            break;

          case "3":
            changeImage(moon3);

            break;

          case "4":
            changeImage(moon4);

            break;

          case "6":
            changeImage(moon6);

            break;

          case "7":
            changeImage(moon7);

            break;

          case "8":
            changeImage(moon8);

            break;

          case "9":
            changeImage(moon9);

            break;

          case "11":
            changeImage(moon11);

            break;

          case "12":
            changeImage(moon12);

            break;

          case "13":
            changeImage(moon13);

            break;

          case "14":
            changeImage(moon14);

            break;

          case "15":
            changeImage(moon15);

            break;

          case "16":
            changeImage(moon16);

            break;

          case "18":
            changeImage(moon18);

            break;

          case "19":
            changeImage(moon19);

            break;

          case "20":
            changeImage(moon20);

            break;

          case "21":
            changeImage(moon21);

            break;

          case "22":
            changeImage(moon22);

            break;

          case "23":
            changeImage(moon23);

            break;

          case "25":
            changeImage(moon25);

            break;

          case "26":
            changeImage(moon26);

            break;

          case "27":
            changeImage(moon27);

            break;

          case "29":
            changeImage(moon29);

            break;

          case "30":
            changeImage(moon30);

            break;

          default:
            break;
        }
      };

      break;
  }
}

closeModal.onclick = () => {
  modal.style.display = "none";
};
