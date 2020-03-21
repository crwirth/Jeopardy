let categories = []
var sampleCategories = []

/** Get NUM_CATEGORIES random category from API.
 *
 * Returns array of category ids
 */

async function getCategoryIds() {
    const res = await axios.get('http://jservice.io//api/categories?count=100');
    for (let cat of res.data) {
        categories.push(cat.id)
    }
    var sampleCategories = _.sampleSize(categories, 6);
    return sampleCategories;
}

getCategoryIds()

/** Return object with data about a category:
 *
 *  Returns { title: "Math", clues: clue-array }
 *
 * Where clue-array is:
 *   [
 *      {question: "Hamlet Author", answer: "Shakespeare", showing: null},
 *      {question: "Bell Jar Author", answer: "Plath", showing: null},
 *      ...
 *   ]
 */

async function getCategory() {

    var y = await getCategoryIds();

    const res1 = await axios.get(`http://jservice.io/api/category?id=${y[0]}`);
    const res2 = await axios.get(`http://jservice.io/api/category?id=${y[1]}`);
    const res3 = await axios.get(`http://jservice.io/api/category?id=${y[2]}`);
    const res4 = await axios.get(`http://jservice.io/api/category?id=${y[3]}`);
    const res5 = await axios.get(`http://jservice.io/api/category?id=${y[4]}`);
    const res6 = await axios.get(`http://jservice.io/api/category?id=${y[5]}`);

    let arr = [res1, res2, res3, res4, res5, res6]

    return arr

}

getCategory();

/** Fill the HTML table#jeopardy with the categories & cells for questions.
 *
 * - The <thead> should be filled w/a <tr>, and a <td> for each category
 * - The <tbody> should be filled w/NUM_QUESTIONS_PER_CAT <tr>s,
 *   each with a question for each category in a <td>
 *   (initally, just show a "?" where the question/answer would go.)
 */

let clues = []
let cluesUpdated = []

async function fillTable() {

    var values = await getCategory();

    var first = values[0];
    var second = values[1];
    var third = values[2];
    var fourth = values[3];
    var fifth = values[4];
    var sixth = values[5];
    
    var catArray = [sixth.data.title, fifth.data.title, fourth.data.title, third.data.title, second.data.title, first.data.title]


    var cluesQuestion1 = JSON.parse(JSON.stringify([first, ...first.data.clues], ["question"]))
    var cluesQuestion2 = JSON.parse(JSON.stringify([second, ...second.data.clues], ["question"]))
    var cluesQuestion3 = JSON.parse(JSON.stringify([third, ...third.data.clues], ["question"]))
    var cluesQuestion4 = JSON.parse(JSON.stringify([fourth, ...fourth.data.clues], ["question"]))
    var cluesQuestion5 = JSON.parse(JSON.stringify([fifth, ...fifth.data.clues], ["question"]))
    var cluesQuestion6 = JSON.parse(JSON.stringify([sixth, ...sixth.data.clues], ["question"]))

    var questionsArray = [cluesQuestion1, cluesQuestion2, cluesQuestion3, cluesQuestion4, cluesQuestion5, cluesQuestion6]
//   console.log(cluesQuestion1, cluesQuestion2, cluesQuestion3, cluesQuestion4, cluesQuestion5, cluesQuestion6)
    


    for (let y = 0; y <= 6 - 1; y++) {
        const th = document.querySelector("thead");
        const row = document.createElement('tr')
        const newTH = document.createElement("th");
        newTH.innerHTML += `${catArray[y]}`;
        th.append(newTH);

        for (let x = 0; x < 6; x++) {
            const cell = document.createElement('td');
            cell.setAttribute('id', `${y}-${x}`);
            cell.addEventListener("click", handleClick);
            cell.innerText = '$' + 200 * (y + 1);
            cell.style.color = 'pink';
            row.append(cell);
        }

        jeopardy.append(row)
    }
    
    let arr = [first, second, third, fourth, fifth, sixth]

    return arr

}

fillTable();

/** Handle clicking on a clue: show the question or answer.
 *
 * Uses .showing property on clue to determine what to show:
 * - if currently null, show question & set .showing to "question"
 * - if currently "question", show answer & set .showing to "answer"
 * - if currently "answer", ignore click
 * */

async function handleClick() {

}

handleClick();

/** Start game:
 *
 * - get random category Ids
 * - get data for each category
 * - create HTML table
 * */

async function setupAndStart() {
}
