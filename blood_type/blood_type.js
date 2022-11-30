function canGiveBlood(donor, receiver){
    if (donor.charAt(1) == "+"){
        if (donor.charAt(0) == "O"){
            if (receiver.charAt(1) == "-" || receiver.charAt(2) == "-"){
                return false;
            } else {
                return true;
            }
        } else if (donor.charAt(0) == "A"){
            if (receiver.charAt(0) == "A" || receiver.charAt(1) == "B"){
                if (receiver.charAt(1) == "+" || receiver.charAt(2) == "+"){
                    return true;
                }
                else {
                    return false;
                }
            } else {
                return false;
            }
        } else if (donor.charAt(0) == "B"){
            if (receiver.charAt(0) == "B" || receiver.charAt(1) == "B"){
                if (receiver.charAt(1) == "+" || receiver.charAt(2) == "+"){
                    return true;
                }
                else {
                    return false;
                }
            } else {
                return false;
            }
        } else if (donor.charAt(1) == "B"){
            if (receiver.charAt(1) == "B" && receiver.charAt(2) == "+"){
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    } 
    else if (donor.charAt(1) == "-"){
        if (donor.charAt(0) == "O"){
            return true;
        } else if (donor.charAt(0) == "A"){
            if (receiver.charAt(0) == "A"){
                return true;
            } else {
                return false;
            }
        } else if (donor.charAt(0) == "B"){
            if (receiver.charAt(0) == "B" || receiver.charAt(1) == "B"){
                return true;
            } else {
                return false;
            }
        } else if (donor.charAt(1) == "B"){
            if (receiver.charAt(1) == "B"){
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    } else{
        return false;
    }
}

var a = canGiveBlood("O+","A+");
var b = canGiveBlood("A-","B-");
var c = canGiveBlood("A-","AB+");

console.log(a);
console.log(b);
console.log(c);