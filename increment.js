class Increment {
  constructor() {
    this.counter = 0;
  }
  
  toString() {
    this.counter++;
    
    return this.counter;
  }
}
  
const increment = new Increment();
  
console.log('val: ' + increment);
console.log('val: ' + increment);
console.log('val: ' + increment);