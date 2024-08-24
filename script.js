let arrayList = []

function screen(){
    const paragrafo = document.getElementById("meuParagrafo");
    let resultado = '';
    for(let i=0;i < arrayList.length;i++){
        resultado += arrayList[i] + '<br>';  
    }
    paragrafo.innerHTML = resultado;
    
}

function addInList(){
    let numero = prompt("Enter with an Tesk: ");
    arrayList.unshift(numero);
   screen();
}

function deleteInList() {
    const paragrafo = document.getElementById("meuParagrafo");
    let listHtml = "Which number do you want to delete?<br>";

   
    for (let i = 0; i < arrayList.length; i++) {
        listHtml += `${arrayList[i]} = ${i}<br>`
    }

    paragrafo.innerHTML = listHtml;

    setTimeout(() =>{
        const itemIndex = Number(prompt("Select the index: "));

    
        if (itemIndex >= 0 && itemIndex < arrayList.length) {
             arrayList.splice(itemIndex, 1);
            screen(); 
    }    else {
        alert("Invalid index. Please select a valid index.");
    }
    }, 0);
    
}

function changeTask(){
    const paragrafo = document.getElementById("meuParagrafo");
    let listHtml = "Which Task do you want to change?<br>";

   
    for (let i = 0; i < arrayList.length; i++) {
        listHtml += `${arrayList[i]} = ${i}<br>`
    }

    paragrafo.innerHTML = listHtml;

    setTimeout(() =>{
        const itemIndex = Number(prompt("Select the index: "));

    
        if (itemIndex >= 0 && itemIndex < arrayList.length) {
            const changeItem = prompt("Enter whith the new Task");
             arrayList.splice(itemIndex, 1, changeItem);
            screen(); 
    }    else {
        alert("Invalid index. Please select a valid index.");
    }
    }, 0);
}

