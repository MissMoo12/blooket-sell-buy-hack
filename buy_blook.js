const TOKEN = prompt("Enter their token: ");
const BOX = prompt("Which box: ");

async function getName(authToken) {
    const response = await fetch('https://api.blooket.com/api/users/verify-token?token=JWT+' + authToken);
    const data = await response.json();

    return data.name
};

const NAME = await getName(TOKEN.split("JWT ")[1]);

for (var i = 0; i <= 20; i++) {
    const RES = await fetch("https://api.blooket.com/api/users/unlockblook", {
        "headers": {
            "accept": "application/json, text/plain, */*",
            "accept-language": "en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7",
            "authorization": TOKEN,
            "content-type": "application/json;charset=UTF-8"
        }, 
        "referrerPolicy": "no-referrer",
        "body": "{\"name\":\"" + NAME + "\",\"box\":\"" + BOX + "\"}",
        "method": "PUT",
        "mode": "cors",
        "credentials": "include"
    })
}

// if (RES.status == 200) {
//     alert("Successfully bought box " + BOX + " for " + NAME + ". ");
// }
// else {
//     alert("Error: " + RES.statusText);
// }