criarItemsLista();
criarItemsLista2()

function criarItemsLista() {
    let lista1 = document.getElementById("minhaLista1");
    for (let index = 0; index < 50; index++) {
        let li = document.createElement("li");
        li.innerText = `Item ${index + 1}`
        lista1.appendChild(li)
    };
}

function criarItemsLista2() {
    let lista1 = document.getElementById("minhaLista2");
    for (let index = 0; index < 50; index++) {
        let li = document.createElement("li");
        li.innerText = `Item ${index + 1}`
        lista1.appendChild(li)
    };
}