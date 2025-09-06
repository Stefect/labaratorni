'use strict';

function hoistingDemo() {
    console.log(x); // невизначено через підйомне навантаження
    var x = 5;
    console.log(x); // 5
}
hoistingDemo();