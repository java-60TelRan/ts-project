import './style.css'

type Person = {id: number, name: string, city: string, age: number};
//any - not recommended 
let a: any;
a = 10;
a = "kuku";
a = undefined;
a.a = 10;
a = {};
//unknown - safed any

function display(obj: unknown) {
  typeof obj === "number" && obj++;
  console.log(obj);
  let sub: string;
  typeof obj === "string" &&(sub = obj.substring(1, 2));
}
//index signature 
let obj: {[key: number]:string} = {};
obj[1] = "10";
obj[2.6] = "w";

//arrays
let ar: number[] = [1, 2, 3];
//ar.push(...[1, 2, "k"]); error
