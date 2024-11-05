for (let i = 0; i < 10; i++) {
    axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then(res => {
            const email = res.data.response;
            console.log(email);
        })
        .catch(err => console.err(err));
};
