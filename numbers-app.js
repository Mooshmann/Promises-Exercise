let favNum = 13;
let baseURL = "http://numbersapi.com";

$.getJSON(`${baseURL}/${favNum}?json`).then(data => {
    console.log(data);
})

let favNums = [6,13,21];
$.getJSON(`${baseURL}/${favNums}?json`).then(data => {
    console.log(data);
})

Promise.all(
    Array.from({ length: 4}, () => {
        return $.getJSON(`${baseURL}/${favNum}?json`);
    })
).then(facts => {
    facts.forEach(data => $("#numbers-area").append(`<p>${data.text}</p>`));
});
