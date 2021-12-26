const category_type = document.querySelector(".category_type");
const childselected = document.querySelector(".childselected");
const parentselected = document.querySelector(".parentselected");

const parentname = document.querySelector("#parentname");
const childname = document.querySelector(".childname");



category_type.addEventListener("click", (eo) => {
    if (category_type.value == "parent") {
        console.log("is parent");
        childselected.style.display = "block";
        parentselected.style.display = "none";
    } else if (category_type.value == "child") {
        console.log("is child");
        childselected.style.display = "none";
        parentselected.style.display = "block";
        childname.style.display = "block";
    } else {
        childselected.style.display = "none";
        parentselected.style.display = "none";
    }
})