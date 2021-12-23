const addanwserbtn = document.querySelector(".addanwserbtn");
const anwserinput = document.querySelector(".anwserinput");
addanwserbtn.addEventListener("click", (eo) => {
    // console.log(item);
    // if (eo.value == 0) {

    console.log("dsdsfsfsf");
    // }
    anwserinput.insertAdjacentHTML('beforeend', ` <div class="anwsers input-group">
     <div>
    <span class="input-group-text" id="inputGroup-sizing-default">Anwser </span>
    </div>
    <div class="cccc">
    <input type="text" class="form-control addinput" style="width:27em">
    </div class="form-check" style="margin-left:1em;margin-top: 0em;">
    <input class="form-check-input" onclick="" type="checkbox" value="">
    </div>`)
})