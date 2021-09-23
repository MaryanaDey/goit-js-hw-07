const refs = {
    inputFiled: document.getElementById("validation-input"),
};

refs.inputFiled.addEventListener("blur", calculateSymbol);

function calculateSymbol(e) {
    const maxLength = refs.inputFiled.getAttribute("data-length");
    const userVal = e.target.value.length;



    if (userVal == maxLength){
     return refs.inputFiled.classList.add("valid");
    } else {
       refs.inputFiled.classList.add("invalid"); 
    }
}



