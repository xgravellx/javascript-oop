/* Array destructuring */
let names = ['hazal', 'yilmaz'];
const [first, last] = names;
console.log(first, last);

const colors = ['orange', 'blue', 'yellow', 'pink', 'red'];
const [c1, c2, ...remainingColors] = colors;
console.log(c1, c2, remainingColors);


/* Object destructuring */
let settings = {
    title: "Javascript",
    width: "300px",
    height: "400px",
}

const {title:t, width:w, height:h} = settings;
console.log(t, w, h);



const province = 'kocaeli';
const district = 'gebze';
const city = {
    province: province,
    district: district,
}
console.log(city);
/* OR */
const city2 = {province, district};
console.log(city2);