const addanwserbtn = document.querySelector(".addanwserbtn");
const anwserinput = document.querySelector(".anwserinput");


let anwserindex = 1;
let correctindexvalue;
addanwserbtn.addEventListener("click", (eo) => {
    console.log("dsdsfsfsf");

    anwserinput.insertAdjacentHTML('beforeend', `<div class="anwsers input-group m-4">
    <div>
        <span class="input-group-text" id="inputGroup-sizing-default">Anwser ${anwserindex + 1} </span>
    </div>
    <div class="cccc">
        <input type="text" name="answer" class="form-control addinput" style="width:27em">
    </div class="form-check">

    <input hidden class="form-check-input" name="corectanswer" value="false">
    <input class="form-check-input" onclick="clicked(this)" value="${anwserindex}" type="checkbox">
</div>`)
    anwserindex++
})

const hii = document.querySelector(".hii");

function clicked(obj) {
    if (obj.checked = true) {
        console.log("yess");
        // console.log(obj.value);
        // console.log(obj.previousElementSibling.value);
        obj.previousElementSibling.value = obj.value;
        // obj.value = 1;
    } else {
        console.log("noo");
    }
    // console.log(obj.value);
}


function clickedd(obj) {

    console.log("jjj");
    console.log(obj.value);
    // console.log(test);
    test = obj.value
    hii.value = obj.value




}
// const ddd = document.querySelector('.ddd')

// ddd.addEventListener('click', (e) => {