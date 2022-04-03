// const password = "bac"

const allowedChars = ['a', 'b', 'c'];
const maxLength = 3;


function login(password) {
	return password === "bac";
}

function brute() {
    for (let passwordLength = 0; passwordLength <= maxLength; passwordLength += 1){
        let passwordArray = createPasswordArray(passwordLength);
        
        do {
            let password = createStringFromArray(passwordArray);
            if (login(password)) {
                return password;
            }

            passwordArray = getNextPasswordArray(passwordArray);
        } while (passwordArray);
    }
            
    return null;
}

function createPasswordArray(arrayLength) {
    let passwordArray = [];
    for (let i = 0; i < arrayLength; i += 1){
        passwordArray.push(0);
        
    }
    return passwordArray;
}

function createStringFromArray(arr) {
    let password = '';
    for (let i = 0; i < arr.length; i += 1){
        password = password + allowedChars[arr[i]];
       
    }

    return password;
}

function getNextPasswordArray(passwordArray) {
    for (let i = passwordArray.length - 1; i >= 0; i--){
        if (passwordArray[i] < allowedChars.length-1) {
            passwordArray[i] = passwordArray[i] + 1;
            return passwordArray;
        }
        
        passwordArray[i] = 0;
    }
    return null;
}

// console.time()
// console.log(brute());
// console.timeEnd()






