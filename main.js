let numInput = document.getElementById("num");
let logo = document.getElementById("img");
let errorMsg = document.getElementById("invalid");

// 3 digits Prefix Carrier Details
const Mtn_3_Prefix = [ 810, 703, 706, 816, 803, 903, 806, 813, 814, 906, 916, 913, 704];
const Glo_3_Prefix = [805, 905, 807, 811, 705, 815, 915];
const Airtel_3_Prefix = [907, 708, 802, 902, 812, 808, 701, 912, 901];
const mobile9_3_Prefix = [909, 908, 818, 809, 817];

// 4 digits Prefix Carrier Details
const Mtn_4_Format = [7025, 7026];
const Glo_4_Format = [];
const Airtel_4_Format = [];
const mobile9_4_Format = [];


numInput.addEventListener("keyup", () => {
  let userNumber = numInput.value;

  // Check if the user starts entry with or without XYZ code
  if (userNumber[0] != undefined && userNumber[0] == 0) {
    getThreeNumberPrefix(userNumber);
    getFourNumberPrefix(userNumber);
  } else if (userNumber[0] == 2) {
    getCountryCode(userNumber);
  } else {
    logo.style.display = "none";
    errorMsg.style.display = "block";
    numInput.style.outline = "1px solid red";
  }
});

// 3 digits Prefix Carrier Function
function getThreeNumberPrefix(userNumber) {
  // Check to throw error on invalid entry
  if (userNumber.length < 11 || userNumber.length >= 12) {
    logo.style.display = "none";
    errorMsg.style.display = "block";
    numInput.style.outline = "1px solid red";
  }

  // Looping through all possible carrier format and matching user Phone Number.
  Mtn_3_Prefix.forEach((num) => {
    if (userNumber.slice(1, 4) == num && userNumber.length === 11) {
      logo.src = "/images/mtn.png";
      displayLogo();
    }
  });

  Glo_3_Prefix.forEach((num) => {
    if (userNumber.slice(1, 4) == num && userNumber.length === 11) {
      logo.src = "/images/glo.jpeg";
      displayLogo();
    }
  });

  Airtel_3_Prefix.forEach((num) => {
    if (userNumber.slice(1, 4) == num && userNumber.length === 11) {
      logo.src = "/images/airtel.png";
      displayLogo();
    }
  });

  mobile9_3_Prefix.forEach((num) => {
    if (userNumber.slice(1, 4) == num && userNumber.length === 11) {
      logo.src = "/images/9mobile.jpeg";
      displayLogo();
    }
  });
}
// 4 digits Prefix Carrier Function
function getFourNumberPrefix(userNumber) {
  Mtn_4_Format.forEach((num) => {
    if (userNumber.slice(1, 5) == num && userNumber.length === 11) {
      logo.src = "/images/mtn.png";
      displayLogo();
    }
  });
}

// XYZ country code(+234) Function
function getCountryCode(userNumber) {
  // Check to throw error on invalid entry
  if (userNumber.length < 13 || userNumber.length >= 14) {
    logo.style.display = "none";
    errorMsg.style.display = "block";
    numInput.style.outline = "1px solid red";
  }

  let sliced_3_Num = userNumber.slice(3, 6); //Getting first 3 digits after the XYZ code

  Mtn_3_Prefix.forEach((num) => {
    if (sliced_3_Num == num && userNumber.length === 13) {
      logo.src = "/images/mtn.png";
      displayLogo();
    }
  });

  Glo_3_Prefix.forEach((num) => {
    if (sliced_3_Num == num && userNumber.length === 13) {
      logo.src = "/images/glo.jpeg";
      displayLogo();
    }
  });

  Airtel_3_Prefix.forEach((num) => {
    if (sliced_3_Num == num && userNumber.length === 13) {
      logo.src = "/images/airtel.png";
      displayLogo();
    }
  });

  mobile9_3_Prefix.forEach((num) => {
    if (sliced_3_Num == num && userNumber.length === 13) {
      logo.src = "/images/9mobile.jpeg";
      displayLogo();
    }
  });



  let sliced_4_Num = userNumber.slice(3, 7); //Getting first 4 digits after the XYZ code

  Mtn_4_Format.forEach((num) => {
    if (sliced_4_Num == num && userNumber.length === 13) {
      logo.src = "/images/mtn.png";
      displayLogo()
    }
  });
}

// Show Logo and Message Visibility.
function displayLogo() {
  logo.style.display = "flex";
  numInput.style.outline = "1px solid green";
  errorMsg.style.display = "none";
}