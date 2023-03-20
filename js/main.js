function funcSum() {
	let value = 0;
 
	return function add(num) {
		value += num;
	  return value;
	}
 }
 
 const sum = funcSum();
 
 console.log(sum(3));   // Output: 3
 console.log(sum(5));   // Output: 8
 console.log(sum(20));  // Output: 28
 