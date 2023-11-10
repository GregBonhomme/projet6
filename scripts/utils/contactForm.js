//ouverture et fermeture de la modale
function displayModal() {
    const modal = document.getElementById("contact_modal");
    modal.showModal();
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.close();
}

//validation du formulaire
function getInfo() {
    let input_check = 0;
    const dialog = document.getElementById("contact_modal");
    const firstname = document.getElementById("firstname");
    const lastname = document.getElementById("lastname");
    const email = document.getElementById("email");
    const msg = document.getElementById("msg");
    document.getElementById("firstname_error").innerText = "";
    document.getElementById("lastname_error").innerText = "";
    document.getElementById("email_error").innerText = "";
    document.getElementById("msg_error").innerText = "";


    if (!firstname.checkValidity()) {
        document.getElementById("firstname_error").innerText = "Veuillez renseigner votre prénom.";
    } else {
        console.log("Bonjour je suis " + firstname.value + " .");
        input_check++;
    }
    if (!lastname.checkValidity()) {
        document.getElementById("lastname_error").innerText = "Veuillez renseigner votre nom.";
    } else {
        console.log("Mon nom est " + lastname.value + " .");
        input_check++;
    }
    if (!email.checkValidity()) {
        document.getElementById("email_error").innerText = "Veuillez renseigner un Email valide.";
    } else {
        console.log("Mon email est le suivant : " + email.value);
        input_check++;
    }
    if (!msg.checkValidity()) {
        document.getElementById("msg_error").innerText = "Veuillez entrer un message.";
    } else {
        console.log("Voici mon message : " + msg.value);
        input_check++;
    }
    console.log(input_check);
    if (input_check == 4) {
        dialog.close();
    }
};