import './style.css'
//JS standard types
let a = 10; //infering type
//a = "kuku" //static types no allowed updating type
let b: number;

b = 10;
console.log(b);
let s: string = "10";
let bl: boolean;
bl = !!s;
let n:null = null;
let obj:{a: string} = {a: "kuku"};
if(obj) {
  //always true;
}
obj.a = "10";
const c = "b";
//alias 
type Person = {id: number, name: string, city: string, age: number};
let person: Person  = {id:123, age:25,
   city: "Lod", name: "Vasya"};
   console.log(person.age);
   
function createPerson(id: number, name: string, city: string, age: number): Person  {
return {id,name, city, age};
}
const person1: Person = createPerson(123, "Kolya", "Lod", 30);
person1.age = 40;
function displayPersonAge(person: Person): void {
  console.log(person.age);

}
function displayPersonName(person: Person): void {
  console.log(person.name);
}
function displayKuku(num: number): number {
  console.log(num);
  return 5;
}
let displayPersonField:(person: Person) => void;
displayPersonField = displayPersonAge;
displayPersonField(person1);
//displayPersonField = displayKuku; error
displayPersonField(person);
  
   


