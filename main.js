let numInput = document.getElementById("num");
let logo = document.getElementById("img");


const Mtn_3_Format = [810, 703, 706, 816, 803, 903, 806, 813, 814, 906];
const Glo_3_Format = [805, 905, 807, 811, 705, 815];
const Airtel_3_Format = [907, 708, 802, 902, 812, 808, 701];
const mobile9_3_Format = [909, 908, 818, 809, 817];



numInput.addEventListener("input", (e) => {
  let userNumber = numInput.value;

  // Check to remove carrier on delete
  if (userNumber.length < 4) {
    logo.style.display = "none";
    text.textContent = "N/A";
    text.style.color = "red";
  }

  //   Looping through the Mtn Number Format and Checking if it matches with the user number
  Mtn_3_Format.forEach((num) => {
    if (userNumber == num) {
      logo.src = "/images/mtn.png";
      logo.style.display = "flex";
      text.style.display = "none";
    }
  });

  //   Looping through the Glo Number Format and Checking if it matches with the user number
  Glo_3_Format.forEach((num) => {
    if (userNumber == num) {
      logo.src = "/images/glo.jpeg";
      logo.style.display = "flex";
      text.style.display = "none";
    }
  });

  //   Looping through the Airtel Number Format and Checking if it matches with the user number
  Airtel_3_Format.forEach((num) => {
    if (userNumber == num) {
      logo.src = "/images/airtel.png";
      logo.style.display = "flex";
      text.style.display = "none";
    }
  });

  //   Looping through the 9mobile Number Format and Checking if it matches with the user number
  mobile9_3_Format.forEach((num) => {
    if (userNumber == num) {
      logo.src = "/images/9mobile.jpeg";
      logo.style.display = "flex";
      text.style.display = "none";
    }
  });
});

let formats = {
  Mtn_3_Format: [810, 703, 706, 816, 803, 903, 806, 813, 814, 906],
  Glo_3_Format: [805, 905, 807, 811, 705, 815],
  Airtel_3_Format: [907, 708, 802, 902, 812, 808, 701],
  mobile9_3_Format: [909, 908, 818, 809, 817],
};
