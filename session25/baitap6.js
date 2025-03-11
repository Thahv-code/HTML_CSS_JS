function chuoidoixung() {
    let text = prompt("mời bạn nhập");
    let flag = 1
    for (let i = 0; i < text.length / 2; i++){
        if (text[i] != text[text.length - 1 - i]) {
            flag = 0;
            break;
        }
    }
    
}
flag? console.log("Chuỗi đối xứng") : console.log("không đối xứng")