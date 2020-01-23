
let categories = [];
let categoryIDs1 = [];



async function getCategoryIds() {
    const res = await axios.get('http://jservice.io//api/categories?count=6');
    console.log(res.data)
    for (let cat of res.data) {
        categoryIDs1.push(cat.id)
    }
}

getCategoryIds();


async function getCategory(arr1, arr2, arr3, arr4, arr5, arr6) {
    //API calls for category data
    const res2 = await axios.get(`http://jservice.io/api/category?id=${arr1}`);
    const res3 = await axios.get(`http://jservice.io/api/category?id=${arr2}`);
    const res4 = await axios.get(`http://jservice.io/api/category?id=${arr3}`);
    const res5 = await axios.get(`http://jservice.io/api/category?id=${arr4}`);
    const res6 = await axios.get(`http://jservice.io/api/category?id=${arr5}`);
    const res7 = await axios.get(`http://jservice.io/api/category?id=${arr6}`);

    console.log(res2);

    // Creates headers

    const th = document.querySelector("thead");
    const values = Object.values(res2.data);
    const newTH = document.createElement("th");
    newTH.innerHTML += `${values[1]}`;
    th.append(newTH);

    const th1 = document.querySelector("thead");
    const values1 = Object.values(res3.data);
    const newTH1 = document.createElement("th");
    newTH1.innerHTML += `${values1[1]}`;
    th1.append(newTH1);

    const th2 = document.querySelector("thead");
    const values2 = Object.values(res4.data);
    const newTH2 = document.createElement("th");
    newTH2.innerHTML += `${values2[1]}`;
    th2.append(newTH2);

    const th3 = document.querySelector("thead");
    const values3 = Object.values(res5.data);
    const newTH3 = document.createElement("th");
    newTH3.innerHTML += `${values3[1]}`;
    th3.append(newTH3);

    const th4 = document.querySelector("thead");
    const values4 = Object.values(res6.data);
    const newTH4 = document.createElement("th");
    newTH4.innerHTML += `${values4[1]}`;
    th4.append(newTH4);

    const th5 = document.querySelector("thead");
    const values5 = Object.values(res7.data);
    const newTH5 = document.createElement("th");
    newTH5.innerHTML += `${values5[1]}`;
    th5.append(newTH5);


    //Fills body with categorys

    $("#jeopardy").append(`<tr><td id="11">${values[3][0].question}</td><td id="21">${values1[3][0].question}</td><td id="31">${values2[3][0].question}</td><td id="41">${values3[3][0].question}</td><td id="51">${values4[3][0].question}</td><td id="61">${values4[3][0].question}</td>></tr>`)
    $("#jeopardy").append(`<tr><td id="12">${values[3][1].question}</td><td id="22">${values1[3][1].question}</td><td id="32">${values2[3][1].question}</td><td id="42">${values3[3][1].question}</td><td id="52">${values4[3][1].question}</td><td id="62">${values4[3][1].question}</td>></tr>`)
    $("#jeopardy").append(`<tr><td id="13">${values[3][2].question}</td><td id="23">${values1[3][2].question}</td><td id="33">${values2[3][2].question}</td><td id="43">${values3[3][2].question}</td><td id="53">${values4[3][2].question}</td><td id="63">${values4[3][2].question}</td>></tr>`)
    $("#jeopardy").append(`<tr><td id="14">${values[3][3].question}</td><td id="24">${values1[3][3].question}</td><td id="34">${values2[3][3].question}</td><td id="44">${values3[3][3].question}</td><td id="54">${values4[3][3].question}</td><td id="64">${values4[3][3].question}</td>></tr>`)
    $("#jeopardy").append(`<tr><td id="15">${values[3][4].question}</td><td id="25">${values1[3][4].question}</td><td id="35">${values2[3][4].question}</td><td id="45">${values3[3][4].question}</td><td id="55">${values4[3][4].question}</td><td id="65">${values4[3][4].question}</td>></tr>`)
}
getCategory(11531, 11532, 5412, 11496, 11498, 11499);


async function fillTable() {

}



async function handleClick() {
    const res2 = await axios.get(`http://jservice.io/api/category?id=11531`);
    const values = Object.values(res2.data);
    var x = document.getElementById("11").innerHTML = `${values[3][0].answer}`;
    var x1 = document.getElementById("12").innerHTML = `${values[3][1].answer}`;
    var x2 = document.getElementById("13").innerHTML = `${values[3][2].answer}`;
    var x3 = document.getElementById("14").innerHTML = `${values[3][3].answer}`;
    var x4 = document.getElementById("15").innerHTML = `${values[3][4].answer}`;

    const res3 = await axios.get(`http://jservice.io/api/category?id=11532`);
    const values1 = Object.values(res3.data);
    var x5 = document.getElementById("21").innerHTML = `${values1[3][0].answer}`;
    var x6 = document.getElementById("22").innerHTML = `${values1[3][1].answer}`;
    var x7 = document.getElementById("23").innerHTML = `${values1[3][2].answer}`;
    var x8 = document.getElementById("24").innerHTML = `${values1[3][3].answer}`;
    var x9 = document.getElementById("25").innerHTML = `${values1[3][4].answer}`;

    const res4 = await axios.get(`http://jservice.io/api/category?id=5412`);
    const values2 = Object.values(res4.data);
    var x10 = document.getElementById("31").innerHTML = `${values2[3][0].answer}`;
    var x11 = document.getElementById("32").innerHTML = `${values2[3][1].answer}`;
    var x12 = document.getElementById("33").innerHTML = `${values2[3][2].answer}`;
    var x13 = document.getElementById("34").innerHTML = `${values2[3][3].answer}`;
    var x14 = document.getElementById("35").innerHTML = `${values2[3][4].answer}`;

    const res5 = await axios.get(`http://jservice.io/api/category?id=11496`);
    const values3 = Object.values(res5.data);
    var x15 = document.getElementById("41").innerHTML = `${values3[3][0].answer}`;
    var x16 = document.getElementById("42").innerHTML = `${values3[3][1].answer}`;
    var x17 = document.getElementById("43").innerHTML = `${values3[3][2].answer}`;
    var x18 = document.getElementById("44").innerHTML = `${values3[3][3].answer}`;
    var x19 = document.getElementById("45").innerHTML = `${values3[3][4].answer}`;

    const res6 = await axios.get(`http://jservice.io/api/category?id=11498`);
    const values4 = Object.values(res6.data);
    var x20 = document.getElementById("51").innerHTML = `${values4[3][0].answer}`;
    var x21 = document.getElementById("52").innerHTML = `${values4[3][1].answer}`;
    var x22 = document.getElementById("53").innerHTML = `${values4[3][2].answer}`;
    var x23 = document.getElementById("54").innerHTML = `${values4[3][3].answer}`;
    var x24 = document.getElementById("55").innerHTML = `${values4[3][4].answer}`;

    const res7 = await axios.get(`http://jservice.io/api/category?id=11499`);
    const values5 = Object.values(res7.data);
    var x25 = document.getElementById("61").innerHTML = `${values5[3][0].answer}`;
    var x26 = document.getElementById("62").innerHTML = `${values5[3][1].answer}`;
    var x27 = document.getElementById("63").innerHTML = `${values5[3][2].answer}`;
    var x28 = document.getElementById("64").innerHTML = `${values5[3][3].answer}`;
    var x29 = document.getElementById("65").innerHTML = `${values5[3][4].answer}`;
}


async function setupAndStart() {
}

