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
    const dialog = document.getElementById("contact_modal");
    const firstname = document.getElementById("firstname_input").value;
    const lastname = document.getElementById("lastname_input").value;
    const email = document.getElementById("email_input").value;
    const msg = document.getElementById("msg_input").value;

    console.log("Bonjour je suis " + firstname + " " + lastname + " .");
    console.log("Mon email est le suivant : " + email);
    console.log("Voici mon message : " + msg);
    dialog.close();
}

const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
    event.preventDefault();
});

document.querySelector("form .contact_button").addEventListener("click", () => {
    getInfo();
})