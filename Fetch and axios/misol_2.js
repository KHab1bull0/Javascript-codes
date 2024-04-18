

function oldPerson(arr){

    let old = arr[0]

    for(let i = 1; i< arr.length; i++){
        let age = old.deathYear - old.birthYear
        let arrage = arr[i].deathYear - arr[i].birthYear
        if(age < arrage){
            old = arr[i]
        }
    }

    return `Eng qari inson ${old.name} aka ${old.birthYear} tug'ilgan va ${old.deathYear - old.birthYear} yoshida vafot etgan.`
}

const people = [
    { name: "Ali", birthYear: 1900, deathYear: 1980 },
    { name: "Vali", birthYear: 1920, deathYear: 1995 },
    { name: "Hasan", birthYear: 1915, deathYear: 2005 },
    { name: "Husan", birthYear: 1905, deathYear: 1960 },
    { name: "Akbar", birthYear: 1900, deathYear: 1990 },
    { name: "Ahmat", birthYear: 1890, deathYear: 1990 }
];

console.log(oldPerson(people))