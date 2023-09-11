let val = document.getElementById("listVal");
let tsk = document.getElementById("tasks");
let btn = document.getElementById("btnn");
btn.addEventListener("click", () => {
    if (val.value == "") {
        return alert("can not be empty");
    }
    else {
        let div = document.createElement("label");
        div.className = "lb";
        div.innerHTML = `<input type="checkbox"><p class="data">${val.value}</p><span class="cut" title="delete task">\u00d7</span>`;
        tsk.appendChild(div);
        val.value = "";
        saveData();
    }
})

tsk.addEventListener("click", (e) => {
    if (e.target.tagName == "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false)

function saveData() {
    localStorage.setItem("data", tsk.innerHTML);
}
function showData() {
    let da = localStorage.getItem("data");
    tsk.innerHTML = da;
}
showData();