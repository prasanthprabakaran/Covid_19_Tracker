let form = document.createElement("form");
form.id="covidForm";

let input=document.createElement("input");
input.type="text";
input.id="country";
input.placeholder="Search Country";
input.required="true";

let submit=document.createElement("input");
submit.type="submit";
submit.value="Search";

form.append(input,submit);

let confirmed = divTag("confirmed");
let recovered = divTag("recovered");
let deaths = divTag("deaths")

document.body.append(form,confirmed,recovered,deaths);

function divTag(value) {
    let tag=document.createElement("div");
    tag.id=value;
    return tag;
};

let formSubmit = document.getElementById("covidForm");
formSubmit.addEventListener("submit",(event)=>{
    event.preventDefault();
    let country = document.getElementById("country").value;
    console.log(country);
    let url = `https://api.covid19api.com/dayone/country/${country}`;
    covid(url);
});

async function covid(url) {
    let response=await fetch(url);
    console.log(response);
    let data=await response.json();
    console.log(data);
    let index=data.length-1;

    confirmed.innerHTML=" ";
    recovered.innerHTML=" ";
    deaths.innerHTML=" ";
    confirmed.append(`Total confirmed cases :${data[index].Confirmed}`);

    recovered.append(`Total recovered cases :${data[index].Recovered}`);

    deaths.append(`Total deaths :${data[index].Deaths}`);
};
