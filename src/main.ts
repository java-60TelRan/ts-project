//type mapping 
type Person = {
    name: string;
    age: number;
}
type ReadOnly<T> = {
  readonly[K in keyof T]: T[K] 
}
type Optional<T> = {
  [K in keyof T]?: T[K] // K is the key of T, and T[K] is the value of T[K]
}
const person: Person = {
    name: 'John',
    age: 30
};
const readOnlyPerson: ReadOnly<Person> = {
    name: 'John',
    age: 30
};
person.age = 31; // OK
//readOnlyPerson.age = 31; // Error: Cannot assign to 'age' because it is a read-only property