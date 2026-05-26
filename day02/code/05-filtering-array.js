//1. greater than, lambda
const scores = [50,55,65,70,85,90,100]
const topScore = scores.filter(item => item >= 80);

console.table([scores])
console.log(topScore)


//1.1 old schoold
let topScores2 = [];
for (let item = 0; item < scores.length; item++) {
    if (scores[item] >= 80)   {
        topScores2=[...topScores2,scores[item]]
    }
}

console.table([topScores2])


//2. filtering object
const fleet = [
    { id: "Hino-01", status: "Active", fuel: 80 },
    { id: "Hino-02", status: "Maintenance", fuel: 20 },
    { id: "Hino-03", status: "Active", fuel: 15 }
];

const activeTruk = fleet.filter(truk=> truk.status === 'Active')
console.log(activeTruk)