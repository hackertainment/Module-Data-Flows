async function request() {
    //const url = "https://simulatehttpcode.vercel.app/statuscode?q=404";
    const url = "https://xkcd.now.sh/?comic=latest";
    const response = await fetch(url);

    console.log(response);

    return response;
};

let promise = request()
    .then((response) => response.json())
    .then((json) => {
        let img = document.getElementById("xkcd");
        img.src = json.img;
        img.alt = json.alt;
        console.log(json);
    })
    .catch((error) => {
        document.body.textContent = "ERROR: "+error.message;
        console.log(error.message);
    });