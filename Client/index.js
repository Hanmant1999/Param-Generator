const genratePatternBtn = document.getElementById("generatebtn");
console.log(genratePatternBtn);
genratePatternBtn.addEventListener("click", genratePattern);
function genratePattern() {
    console.log("genratePattern");
    const enteredvalues = document.getElementById("paramPatternArray");
    console.log(enteredvalues.value);
    const eneterdPatern = document.getElementById("pattern");
    console.log(eneterdPatern.value);

}