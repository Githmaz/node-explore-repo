// testing of linting rules

interface A {
}

const a: A = {
  b: 1
};

function sum(a: number, b: number) {
  return a + b;
}

// eslint-disable-next-line no-empty-function
function times2() {

}

const objA = { a: 1 };
const sum12 = sum(1, 2);

// Hello

/** Hello */

/**
 * Hello
 *
 */

class ClassA {
  readonly a = 1;
  readonly b = 2; aa = 1; bb = 2;
}

let value = 1;

switch (value) {
  case 1:
    // eslint-disable-next-line indent, no-console
    console.log(value);
    break;
  case 2:
    break;
  default:
    break;
}

const arrowFn = () => {
  // Do something...
};

const objB = { a: 1 };

let numberOne = 1;

export default {
  a: 1
};
