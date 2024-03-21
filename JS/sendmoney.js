 // Función para agregar un contacto
 function addContact() {
    var name = document.getElementById("contactName").value;
    var email = document.getElementById("contactEmail").value;
    var option = document.createElement("option");
    option.text = name;
    option.value = email;
    document.getElementById("contactSelect").appendChild(option);
    document.getElementById("contactList").innerHTML += "<li>" + name + " - " + email + "</li>";
}

// Función para realizar una transferencia
function transfer() {
    var contact = document.getElementById("contactSelect").value;
    var amount = document.getElementById("amount").value;
    document.getElementById("transferHistory").innerHTML += "<li>Transferencia a " + contact + " por " + amount + "</li>";
}