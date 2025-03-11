function up(string) {
    string = string.toLowerCase();
    let str = string.split("");
    str[0]=str[0].toUpperCase()
    for (let i = 0; i < string.length;i++) {
        if (str[i] == " ") {
            str[i + 1] = str[i + 1].toUpperCase();
    }
    }
    
    console.log(str.join(""));

}
up("hahaa hello mọi người");