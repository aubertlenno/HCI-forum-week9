function digitalDecipher(message, key){
    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var result = "";
    key = Array.from(String(key), Number);
    
    for(var i = 0; i < message.length; i++){
        result += alphabet[message[i] - 1 - key[i % key.length]];
    }

    return result;
}

var a = digitalDecipher([20, 12, 18, 30, 21], 1939);
var b = digitalDecipher([14, 30, 11, 1, 20, 17, 18, 18], 1990);
var c = digitalDecipher([6, 4, 1, 3, 9, 20], 100);

console.log(a);
console.log(b);
console.log(c);