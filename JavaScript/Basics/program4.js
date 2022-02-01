var person = {firstname:"Likhith",lastname:"Kumar"}

// way 1
console.log(person.firstname+" "+person.lastname)

// way 2
for(let x in person){
    console.log(person[x])
}