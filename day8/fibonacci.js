// fibonacci series using generator functions

function *fibonacci() {
  var a = 0;
  var b = 1;
  while (true) {
    var now = a;
    a = b;
    b = now + a;
    yield now;
  }
}
var numbers = fibonacci();
for (let i = 0; i < 10; i++) {
  console.log(numbers.next().value);
}


















