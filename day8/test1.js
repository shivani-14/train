




class Foo{
	*[Symbol.iterator](){
		yield 1;
		yield 2;
	}
}

class Another{
	*[Symbol.iterator](){
		yield 'a';
		yield 'b';
	}
}
console.log(Array.from(new Foo))
console.log(Array.from(new Another))


            
            
            
            

// function *anotherGenenrator(i){
// 	yield i+1;
// 	yield i+2;
// 	yield i+3;
// }

// function *myGen(i){
// 	yield i;
// 	yield *anotherGenenrator(i);
// 	yield i+10
// }

// var gen= myGen(10)
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next().value)
// console.log(gen.next())
// console.log(gen.next())




// function *generatorMessage(){
// 	yield 1;
// 	yield 2;
// 	yield 3
// 	 console.log("END")
// }


// const gen=generatorMessage(10)
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next().value)
// console.log(gen.next())
// console.log(gen.next())






// function *generateForLoop(num){
// 	for(let i=0;i<num;i++){
// 	yield console.log(i)
// }
// }

// const genLoop=generateForLoop(10)
// genLoop.next()
// genLoop.next()
// genLoop.next()