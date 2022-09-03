// Dhruv Kakadiya
// ID - 991653956
// Date - 10/6/2022

const form = document.querySelector("form");
const tableBody = document.querySelector("#listContent");
const tableElement = document.querySelector("table");
    
function addItem(e) {
    e.preventDefault();
    const quantity = document.getElementById("quantity").value;
    const text = document.getElementById("text").value;

    if(document.getElementById("text").value.length == 0){
        alert('Product Missing');
    }
    else if(document.getElementById("quantity").value.length == 0){
        alert('Quantity Missing');
    }
    else{
        tableBody.innerHTML += `
            <tr>
                <td>${text}</td>
                <td>${quantity}</td>
                <td><button class="deleteButton">X</button></td>
            </tr>
        `;

        document.form.reset();
    }
}

function removeItem(e) {
    if (!e.target.classList.contains("deleteButton")) {
        return;
    }

    const button = e.target;
    button.closest("tr").remove();
}

form.addEventListener("submit", addItem);
tableElement.addEventListener("click", removeItem);