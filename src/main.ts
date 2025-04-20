//union
function kgToGr(kg: number|string) {
    //Narrowing type
    if (typeof kg === 'string') {
      
        kg = parseFloat(kg);
    }
    
    return kg * 1000;
}
//literals types
let a:50 | 75| 100 | "abc" ; // a can have only 50, 75 , 100 or "abc" as value

//intersection types
type A = {a: string};
type B = {b: number};
type C = A & B; // C has both properties a and b
let obj: C = {a: "hello", b: 42}; // valid
  type D = string & number; // D is never, as string and number are incompatible types

  type Product = {
    id: number; 
    name: string;
    price: number;
  }
  let productKey: keyof Product; // productKey can be "id", "name", or "price"
  productKey = "id"; // valid
  //productKey = "kuku";  Error: Type '"kuku"' is not assignable to type '"id" | "name" | "price"'.