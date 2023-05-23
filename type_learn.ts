/*
	This the full tutoriail for Typescipt: source official docs.	
 */

/* First begin with TS for JS developers.  */

// TS has all the JS features and also TS's type system. TS is the superset of JS with added features. The main benefit of TS is that it hightlights unexpected behaviour in your code, lowering the chance of bugs.

// TYPE BY INFERENCE
let helloWorld = "helloWorld";
// this means: given below
//let helloWorld: string = "Hello World"; // This is the type declaration of the helloworld variable.

// 	DEFINING TYPES 
/*
	You can use various design patterns; some may cause difficulty in inferring type such as DP. 
	To cover these, TS supports an extension of the JS which offers places for you to tell TS what
	the types should be.
	for examaple, you can explicitly describe objects's shape useing an interface declaration.
*/
interface User {
	name: string,
	id: number
}
/* you can declare JS objects that confomr to the that interface  */
const user: User = {
	name: 'Hayes',
	id: 0
}
/* you can declare interface declartion with classes. */
class UserAccount {
	name: string;
	id: number;
	constructor(name: string, id: number) {
		this.name = name;
		this.id = id;
	}
}

const n_user: User = new UserAccount("vipul", 5);
console.log("n_user", n_user)
console.log(helloWorld)
