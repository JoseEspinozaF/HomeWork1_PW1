function changeBackground() {
    document.getElementById("demo").style.color = "white";
    document.getElementById("demo").style.backgroundColor = "black";
}

function addRows() {
    const tablaa = document.getElementById("tabla");
    let row = tablaa.insertRow(5);
    let celda1 = row.insertCell(0);
    let celda2 = row.insertCell(1);
    let celda3 = row.insertCell(2);
    celda1.innerHTML = "Need for";
    celda2.innerHTML = "Accion";
    celda3.innerHTML = "22/22/2022"

}