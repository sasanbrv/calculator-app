const keyboard = document.querySelector(".keyboard")
const buttons = keyboard.querySelectorAll("button")
let screen = document.querySelector(".innerText")
let value1 = "" 
let value2 = ""
let opr = ""
buttons.forEach(b => {
    b.addEventListener("click", () =>{
        if (b.textContent === "del"){
            value1 = value1.slice(0,-1)
            screen.textContent = Number(value1).toLocaleString();
        }else if (b.textContent === "reset"){
            value1 = ""
            value2 = ""
            screen.textContent = "0"
        }else if (b.textContent === "+"){
            opr = "+"
            if(value2 === ""){value2 = "0"}
            value2 = value1 + opr + value2
            value2 = eval(value2)
            value1 = ""
            if (value2.toString().length > 12) {
                screen.textContent = Number(value2).toExponential(10); 
            }else{
                screen.textContent = Number(value2).toLocaleString();
            }
        }else if (b.textContent === "-"){
            opr = "-"
            if (value2 === ""){
                 value2 = "0"
                 value2 = value1 + opr + value2
                 value2 = eval(value2)
                 value1 = ""
                 if (value2.toString().length > 12) {
                screen.textContent = Number(value2).toExponential(10);
            }else{
                screen.textContent = Number(value2).toLocaleString();
            }
            }else{
                value2 = value2 + opr + value1
                value2 = eval(value2)
                value1 = ""
                if (value2.toString().length > 12) {
                screen.textContent = Number(value2).toExponential(10); 
            }else{
                screen.textContent = Number(value2).toLocaleString();
            }
            }
        }else if (b.textContent === "*"){
            if (value2 === ""){value2 = "1"}
            opr = "*"
            value2 = value1 + opr + value2
            value2 = eval(value2)
            value1 = ""
            if (value2.toString().length > 12) {
                screen.textContent = Number(value2).toExponential(10);
            }else{
                screen.textContent = Number(value2).toLocaleString();
            }
        }else if (b.textContent === "/"){
            if (value2 === ""){value2 = "1"}
            opr = "/"
            value2 = value1 + opr + value2
            value2 = eval(value2)
            value1 = ""
             if (value2.toString().length > 12) {
                
                screen.textContent = Number(value2).toExponential(10);
            }else{
                screen.textContent = Number(value2).toLocaleString();
            }
        }else if (b.textContent === "="){
            value1 = value2 + opr + value1
            value1 = eval(value1)
            if (value2.toString().length > 12) {
                screen.textContent = Number(value1).toExponential(10); 
            }else{
                screen.textContent = Number(value1).toLocaleString();
            }
            value2 = ""
        }
        
        else{
            if ( value1.length > 10 ){
                return;
            }
            else if (value1 === "0" && b.textContent === "0" ){
                value1 = "0"
                screen.textContent = Number(value1).toLocaleString();
            }else if (value1 === "0" && b.textContent !=="0" && b.textContent !== "."){
                value1 = value1.slice(0,-1)
                value1 += b.textContent
                screen.textContent = Number(value1).toLocaleString();
            }else if (value1.includes(".") && b.textContent === "."){
                return
            }else{
                value1 += b.textContent
                screen.textContent = Number(value1).toLocaleString();
            }
        }
    })
})

function themeBtn(btn){
    const btnTheme = btn.textContent
    if(btnTheme === "2"){
        document.querySelector("body").classList = ""
        document.querySelector("body").classList.toggle("theme-two")
    } else if (btnTheme === "3"){
        document.querySelector("body").classList = ""
        document.querySelector("body").classList.toggle("theme-three")
    } else if (btnTheme === "1"){
        document.querySelector("body").classList = ""
        } 
}