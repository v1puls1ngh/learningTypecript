/*
	This the full tutorial for Typescipt: source official docs.	
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

/* You can use interfaces to annotate params and return valures to function */

function deleteUser(user: User): void {
	/*
		Code for the deleteUser function
	 */
}

function getAdminUser(): void {
	/*
		Code for getAdminUser
	*/
}

/*
	There is alerady a small set of primitive types available in Js: boolean, bigint, null
	, number, string, symbol, and undefined, which you can use in an interface. TS extends
	this list with a few more, such as any(allow anything), unknown(ensure someone using
	this type declares what the type is), never(it's not possible that this type could happen),
	and void(a function which returns undefined or has no return value)
	There are 2 syntaxes for building types: Interfaces adn Types. You should prefer interface.
	Use type when you need specific features.
*/

// COMPOSING TYPES
/*
	With TS, you can create complex types by combining simple ones. There are two ways to do
	so: with unions, and with generics.
*/
/*
	Unions: with unions, you can declare that a type could be one of many types. for example, you
	can describe a boolean type as being either true or false:
*/
type MyBool = true | false;

/*
	A popular use-case for union types is to describe the set of string or number literals that
	a value is allowed to be:
*/
type WindowStates = "open" | "closed" | "minimized" ;

/* 
	unions provide a way to handle different types too. To learn the type of a variable, use typeof.
	for example, you can make a function return different values depending on whether it is passed
	a string or an array.
*/
function getLength(obj: string | string[]) {
	return obj.length;
}

/*
	Generics: it provides variables to types: A common example is an array. An array without generics
	could contain anything. An array with generics can describe the values that the array contains.	
*/

type StringArray = Array<string>;
type NumberArray = Array<number>;
type ObjWithNameArray = Array<{ name: string }>;

/*
	You can interface you own types that use generics:
*/

interface Backpack<Type> {
	add: (obj: Type) => void;
	get: () => Type;	
}

declare const backpack: Backpack<string>;
const object = backpack.get();

