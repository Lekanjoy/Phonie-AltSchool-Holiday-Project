let numInput = document.getElementById("num");
let logo = document.getElementById("img");
let errorMsg = document.getElementById("invalid");

// 3 digits Prefix Carrier Details
const Mtn_3_Format = [810, 703, 706, 816, 803, 903, 806, 813, 814, 906];
const Glo_3_Format = [805, 905, 807, 811, 705, 815];
const Airtel_3_Format = [907, 708, 802, 902, 812, 808, 701];
const mobile9_3_Format = [909, 908, 818, 809, 817];

// 4 digits Prefix Carrier Details
const Mtn_4_Format = [];
const Glo_4_Format = [];
const Airtel_4_Format = [];
const mobile9_4_Format = [];



numInput.addEventListener("keyup", () => {
  let userNumber = numInput.value;

  getThreeNumberPrefix(userNumber);
  // getCountryCode(userNumber);

});


// 3 digits Prefix Carrier Function
function getThreeNumberPrefix(userNumber) {
  // Check to remove throw error on invalid entry
  if (userNumber.length < 11 || userNumber.length >= 12) {
    logo.style.display = "none";
    errorMsg.style.display = "block";
    numInput.style.outline = "1px solid red";
  } else {
    numInput.style.outline = "1px solid green";
  };


  Mtn_3_Format.forEach((num) => {
    if (userNumber.slice(1, 4) == num && userNumber.length === 11) {
      logo.src = "/images/mtn.png";
      logo.style.display = "flex";
      errorMsg.style.display = "none";
    }
  });

  Glo_3_Format.forEach((num) => {
    if (userNumber.slice(1, 4) == num && userNumber.length === 11) {
      logo.src = "/images/glo.jpeg";
      logo.style.display = "flex";
      errorMsg.style.display = "none";
    }
  });

  Airtel_3_Format.forEach((num) => {
    if (userNumber.slice(1, 4) == num && userNumber.length === 11) {
      logo.src = "/images/airtel.png";
      logo.style.display = "flex";
      errorMsg.style.display = "none";
    }
  });

  mobile9_3_Format.forEach((num) => {
    if (userNumber.slice(1, 4) == num && userNumber.length === 11) {
      logo.src = "/images/9mobile.jpeg";
      logo.style.display = "flex";
      errorMsg.style.display = "none";
    }
  });
}

 function getCountryCode(userNumber){










 }


