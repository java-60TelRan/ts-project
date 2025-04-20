type Person = {
  id: number;
  age: number;
  name?: string; // Optional property
}
const people: Person[] = [
  { id: 1, age: 25 },
  { id: 2, age: 30 },
  { id: 3, age: 35 }
];
function findPersonById(people: Person[], id: number): Person | undefined {
  return people.find(person => person.id === id);
}
const person = findPersonById(people, 20);
console.log(person?.name?.length); 
// function getPersonName(person: Person): string {
//   return person.name ?? "Vasya"; // Use nullish coalescing operator
// }
function getPersonName({name = "Vasya"}:Person): string {
  return name;
}
console.log(getPersonName(people[0])); 
function speed(speed?: number) {
  console.log(speed ?? 30);

}
speed(0);
