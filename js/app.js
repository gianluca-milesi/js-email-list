const emailList = document.getElementById("email-list");
const generateButton = document.getElementById("generate-btn");

generateEmails();

function generateEmails() {

    emailList.innerHTML = "";

    for (let i = 0; i < 10; i++) {
        axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then(res => {
                const email = res.data.response;
                const liItem = document.createElement("li");
                liItem.innerHTML = email;
                emailList.appendChild(liItem);

                console.log(email);
            })
            .catch(err => console.err(err));
    };
}

generateButton.addEventListener("click", generateEmails);

