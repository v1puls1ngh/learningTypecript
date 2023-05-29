/*
	This is the full tutorial for Typescipt: source official docs.	
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
//const object = backpack.get();

// STRUCTURAL TYPE SYSTEM

/*
	One of TS's core principles is that type checking focuses on the shape that values have.
	This is sometimes called "duck typing" or "structural typing".
	In a structural type system, if two object have the same shape, they are considered to be
	of the same type.
*/

interface Point {
	x: number;
	y: number;
}

function logPoint(p: Point) {
	console.log(`${p.x}, ${p.y}`);
}

const point = {x: 12, y: 25};
logPoint(point);

/*
	The point variable is never declared to be a Point type. however, TS compares the shape of point
	to the shape of Point in the type-check. They have the same shape, so the code passes.
	The shape-matching only requires a subset of the object's fields to match.
	
	There is no difference between how classes and objects conform to shapes.
*/

class VirtualPoint {
	x: number;
	y: number;
	
	constructor(x: number, y: number) {
		this.x = x;
		this.y = y;
	}
}

const newVPoint = new VirtualPoint(34, 56);
logPoint(newVPoint);
/*
	If the object or class has all the required properties, TS will say they match, regardless of the
	implementation details
*/

/* TS HANDBOOK */

// THE BASICS
/*
	When we run JS code, the way that our JS runtime chooses what to do is by figuring out the
	type of the value - what sort of behaviours and capabilities it has. For some values, such
	as primitives string and number, we can identify their type at runtime using the typedef 
	oprator. But for other things like functions, there's no corresponding runtime mechanism to
	identify their types.

	A type is the concept of describin which values can be passed and which will crash to
	function. JS only truly provides dynamic typing-running the code to see what happens.

	The alternative is to use a static type system to make predictions about what code is
	expected before it runs.
*/

/* Static type-checking */
/*
	Static type systems describe the shapes and behaviors of what our values will be when we run
	our programs. A type-checker like TS uses that information and tells us when things might be
	going off the rails.
*/

/* Non-exception failures */

/*
	So far we discussed runtime errors - cases where the JS runtime tell us that it thinks
	someting is nonsensical. Those cases come up because ECMAscript specification has explict
	instructions on how the language should behave when it runs into something unexpected.

	For example, the specification says that trying to call something that isn't callable should 
	throw an error. Maybe that sound like 'obvious behaviour', but you could imagine that accessing
	a property that doesn't exist on an object should throw an error too. Instead, JS gives us 
	different behaviour and return the value undefined.
	Ultimately, a static type  system has to make the call over what code should be flagged as an error
	in its system, even if it's 'valid' JS that won't immediately throw an error. While sometimes that
	implies a tradeoff in what you can express, the intent is to catch legitimate bugs in our programs.
	And TS catches lot of legimate bugs.
*/

/*
	Emitting with Errors:
	Type-checking code limits the sorts of programs you can run, and so there's tradeoff on what sorts
	of things a type-checker finds acceptable. MOst of the time that's okay, but there are scenarios 
	where those checks get in the way. For example, imagine yourself migrating JS code over to TS and
	introducing type-checking errors. Eventually you'll get around to cleaning things up for the type-
	checker, but the original JS code was already working! why should converting it over to TS stop you
	from running it?
	So TS doesn't get in your way. Of course, over time, you may want to be a bit more defensive
	against mistakes, and make TS act a bit more strictly. In that case, you can use the noEmitError
	compiler option.
	tsc --noEmitOnError file_name.ts
*/

/*
	Explicit Types:
	type annotations is used to describe what types of values, function or variables, can be called 
	with.	
	With this TS can tell us about other cases where function or variable called incorrectly.
	Keep in mind, we don't always have to write explicit type annotations. in many cases, TS can even
	just infer the types for us even if we omit them.
	ex - let msg = "hello there!";
	That's a feature, and it's best not to add annotations when the type system would end up inferring
	the same anyway.
*/

/* Erased Types - Type annotaions arent't part of JS(or ECMAScript to be pedantic), so there really
	aren't any browers or other runtimes that can just run TS unmodified.
	that's why TS needs a compiler in the first place - it needs some way to strip out or transform
	any TS specific code so that you can run it. Most TS specific coe gets erased away, and likewise,
	here our type annotations were completely erased.
	Note - Type annotations never change the runtime behaviour of your program.
*/

/* Downleveling:
	TS has the ability to rewrite code from newer versions of ECMAScript to older ones such ECMASCript
	3 or 5 (a.k.a ES3 and ES5). This process of moving from a newer or "higher" version of ECMAScript 
	down to an older or 'lower' one is sometimes called downleveling.
	By defualt TS targets ES3, an extremely old version of ECMASript. we could have chosen something
	more recent by usign the target option. running with -- target es2015 changes TS to target ES5.
*/

/* Stictness:
	TS has several type-checking strictness flags tha can be turned on or off, and all of our examples
	will be written with all of them enabled unless otherwise stated. The strict flag in the CLI, or 
	"strict": true in a tsconfig.json toggles them all on simultaneously, but we can opt out of them
	individually. The two biggest one you should know about are noImplicitAny and strictNullChecks.
*/

/* noImplicitAny:
	Recall that in some places, TS doesn't try to infer types of us and instead falls back to the most
	lenient type: any. This isn't the worst thing that can happen - after all, falling back to 'any' is
	just the plain JS experience anyway.
	However, using any often defeats the purpose of using TS in the first place. The more typed you pro	   -gram is, the mover validation and tooling you'll get, meaning you'll run into fewer bugs as you 
	code. Turning on the noImplicitAny flag will issue an error on any variables whose type is implici-
	tly inferred as any.
*/

/*
	strictNullChecks:
	By default, values like null and undefiined are assignable to any other type. This can make
	writing code easier, but forgetting to handle null and undefined is the cause of countless bugs in
	the world - some consider it a billion dollar mistake. The strictNullChecks flag makes handling
	null and undefined more explicit, and spares us from worrying about whether we forgot to handle
	null and undefined.	
*/


// EVERYDAY TYPES









