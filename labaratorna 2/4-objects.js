'use strict';

// Task 1: Object manipulation function
const fn = () => {
  // Creating object with constant reference
  const constObject = { name: 'John' };
  
  // Creating object with variable reference
  let varObject = { name: 'John' };
  
  // Modifying properties (this works for both)
  constObject.name = 'Peter';
  varObject.name = 'Peter';
  
  // Reassigning reference (only works for varObject)
  varObject = { name: 'James' };
  
  // We can't reassign constObject because it's constant:
  // constObject = { name: 'James' }; // This would throw an error
  
  return varObject;
};

// Task 2: Create user function
const createUser = (name, city) => ({
  name,
  city
});

// Exporting for tests
module.exports = {
  fn,
  createUser
};