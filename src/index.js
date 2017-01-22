import './scss/style.scss';

function timeout(delay = 2000) {
  return (target, key, descriptor) => {
    const originalMethod = descriptor.value;
    return {
      ...descriptor,
      value(...args) {
        setTimeout(() => {
          originalMethod.apply(this, args);
        }, delay);
      },
    };
  };
}

function arrayToStringList(arr) {
  return arr.join(', ');
}

class Person {
  friends = [];
  name;

  constructor(name) {
    this.name = name;
  }

  addFriend(friend) {
    this.friends.push(friend);
  }

  @timeout(500);
  greet() {
    console.log(`Heyo, I'm ${this.name} with my friends ${arrayToStringList(this.friends)}`); // eslint-disable-line
  }
}

const person = new Person('Dr. Ecma S. Cript');
person.addFriend('ES2015');
person.addFriend('Object Rest Spread');
person.addFriend('Class Properties');
person.addFriend('Decorators');

person.greet();
