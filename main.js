const person = {
    fname:"Ergashev",
    lname:"Sirojiddin",
    age:25,
    key:'12345'
  };


delete person.age;
  let txt = "";
  for (let x in person) {
    txt += person[1] + " ";
  }
console.log(txt);
