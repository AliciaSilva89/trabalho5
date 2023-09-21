document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("login-form");

    form.addEventListener("submit", function (event) {
        const email = form.querySelector("#email");
        const password = form.querySelector("#password");

        // Inicialmente, remova todas as mensagens de erro e classes de erro.
        const errors = document.querySelectorAll(".error");
        errors.forEach(error => {
            error.style.display = "none";
        });

        email.classList.remove("border", "border-danger");
        password.classList.remove("border", "border-danger");

        // Valide os campos em branco.
        let isValid = true;

        if (email.value.trim() === "") {
            email.classList.add("border", "border-danger");
            document.getElementById("email-error").style.display = "block";
            isValid = false;
        }

        if (password.value.trim() === "") {
            password.classList.add("border", "border-danger");
            document.getElementById("password-error").style.display = "block";
            isValid = false;
        }

        // Se algum campo estiver em branco, evite o envio do formulário.
        if (!isValid) {
            event.preventDefault();
        }
    });
});
