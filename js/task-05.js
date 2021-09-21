const refs = {
    inputFiled: document.getElementById("name-input"),
    textFiled: document.getElementById("name-output"),
  };

  refs.inputFiled.addEventListener("input", onInputValue);

  function onInputValue(even) {
      if (!"") refs.textFiled.textContent = "" ? "незнакомец" : even.target.value;
  }
  
  


