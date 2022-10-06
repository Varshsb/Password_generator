
/**
 * Obj: Two 15 length random passwords need to be generated
 * 
 * Required: Character array which contains the character needed to gen password
 * I need to pick the index randomly to make the password random
 * 
 * Store: String of password whose length is 15 . o/p
 */




// total 256 characters
// 0 -255
// 33 to 126
let characterArray = [] 

// Array index should start from 0
// I need index to start from 0
// I need the characters whose ASCII value is between 33 and 126.

for (let i = 33; i <= 126; i++) {
    characterArray.push(String.fromCharCode(i))
}

let generatePasswordsButton = document.getElementById("generatePasswords")

function generatePassword() {

    let password = ""

    while (password.length <= 15) {
        let randIndex = Math.floor(Math.random()* characterArray.length) //pick a random index
        password += characterArray[randIndex] // fetch the character at the random index from the character array
    }

    return password

}


generatePasswordsButton.addEventListener ("click", function() {
    
    let rectangleElOne = document.getElementById("rectangle-el-one")
    let rectangleElTwo = document.getElementById("rectangle-el-two")
    rectangleElOne.textContent = generatePassword()
    rectangleElTwo.textContent = generatePassword()
        
})
   



        


