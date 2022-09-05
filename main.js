const serverUrl = ""; //INSERT serverURL found in Moralis Server Settings
const appId = "";   //INSERT appId found in Moralis Server Settings
Moralis.start({serverUrl, appId});

async function login() {
    let user = Moralis.User.current();
    if (!user) {
        user = await Moralis.authenticate({
            signingMessage: "Log in using Moralis",
        })
            .then(function (user) {
                console.log("logged in user:", user);
                console.log(user.get("ethAddress"));
            })
            .catch(function (error) {
                console.log(error);
            });
    }
}

async function logOut() {
    await Moralis.User.logOut();
    console.log("logged out");
}

document.getElementById("btn-login").onclick = login;
document.getElementById("btn-logout").onclick = logOut;

