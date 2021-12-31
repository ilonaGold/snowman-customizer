const inputs = document.querySelectorAll(".controls input");
const root = document.documentElement;

function changeColor (name, value) {
  root.style.setProperty(`--${name}`, value);
}

inputs.forEach(input => input.addEventListener("change", () => {
    changeColor(input.name, input.value);
}))
    
    
    
