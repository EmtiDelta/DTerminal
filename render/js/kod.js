var fs = require('fs');

let konsol = document.getElementById("girdi")
let KonsolSonuç = document.getElementById("çıktı")
let konsoldeğer =  document.getElementById("girdi").value

const komut = ["help","clear","test","Rnum","exit","RPasswordGen"]




function Focus(){
    konsol.focus()
}

Focus()

function commands(){
    
    konsol.addEventListener("keydown", function(event){
        if(event.key === "Enter"){
            event.preventDefault();

            const konsoldeğer = konsol.innerText.trim();

            
            if (konsoldeğer === komut[0]) 
            {
                    KonsolSonuç.innerText = "";
                    KonsolSonuç.innerText += "Supported Commands:" + komut;
            } 

            else if (konsoldeğer === komut[1]) 
            {
                    KonsolSonuç.innerText = "";
            } 

            else if (konsoldeğer === komut[2]) 
            {
                    KonsolSonuç.innerText = "";
                    KonsolSonuç.innerText += "Hello World";
            }
            else if (konsoldeğer === komut[3]) 
            {
                    KonsolSonuç.innerText = "";
                    KonsolSonuç.innerText += "Your Lucky Number İs: " + randomNumber();
            }
            else if (konsoldeğer === komut[4]) 
            {
                window.close("Tmenu.html");
            }
            
            else if (konsoldeğer === komut[5]) 
            {
                
                KonsolSonuç.innerText = "";
                KonsolSonuç.innerText += "Here is Your New Password: " + PasswordGen();
              
            }
            

            konsol.innerText = ""; 
        }
    })
}

function randomNumber(){
    let number = Math.floor(Math.random() * 100);
    return number
}

function PasswordGen(length = 13) {
    const Numbers = "0123456789";
    const Letters = "qwertyuiopğüasdfghjklşiözxcvbnmöç";
    const UpperLetters = Letters.toUpperCase(); 
    const SpecialChars = "!@#$%&"; 

    const allChars = Letters + UpperLetters + Numbers + SpecialChars;

    let password = "";
    for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * allChars.length); 
        password += allChars[randomIndex]; 
    }

    return password;
}
//these are for test only and gone change i am testing if i like electron or not.

