const apiUrl = "http://localhost:3000/";

async function GetApiRequest() {
    const apiData = await fetch(apiUrl, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });
    const data = await apiData.json();
    // console.log(data);
    return data;
}
console.log();
// GetApiRequest();

// fetch('http://localhost:3000/', {
//     method: "GET",
//     headers: {
//         "Content-Type": "application/json",
//     }
// })
//     .then(response => response.json())
//     .then(data => data.forEach(element => console.log(element._id)));



async function postApiRequest(data) {
    const apiData = await fetch(apiUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    }).then(response => response.json())
        .then(data => console.log(data))
}

// postApiRequest({ name: 'We did it boys' });

async function putApiRequest(ID, data) {
    const apiData = await fetch(`${apiUrl}${ID}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
}

// puTApiRequest("fcfc7ec3-b969-416a-82d7-1cae70f05024", { name: 'We doe again' })

async function deleteApiRequest(ID) {
    const apiData = await fetch(`${apiUrl}${ID}`, {
        method: "DELETE",
    })
}
// deleteApiRequest(GetApiRequest());
// deleteApiRequest("434ec415-1344-43e4-a390-e866bc48eb29");


(async function () {
    // deleteApiRequest("d386e9ad-dc97-45a6-92fb-e9016ad5650d");
})()
