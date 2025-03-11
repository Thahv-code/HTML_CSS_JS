function matkhau(password) {
  let wordCount = 0;
  let CapwordCount = 0;
  let numberCount = 0;
  password = password.split(" ");
  for (let i = 0; i < password.length; i++) {
    if (password[i] > "0" && password[i] < "9") {
      numberCount++;
    }

    if (password[i] >= "a" && password[i] <= "z") {
      wordCount++;
    }
    if (password[i] >= "A" && password[i] <= "Z") {
      CapwordCount++;
    }
  }
  console.log(wordCount);
  if (numberCount + wordCount + CapwordCount >= 8) {
    if (numberCount > 0 && wordCount > 0 && CapwordCount > 0) {
      console.log("password manh");
    } else {
      console.log("password yeu");
    }
  } else {
    console.log("password yeu");
  }
}
matkhau("ThanAAh101011");
