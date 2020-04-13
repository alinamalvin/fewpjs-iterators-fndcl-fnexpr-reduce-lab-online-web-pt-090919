const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

let totalBatteries = [1, 2, 3].reduce(function(total, element){ return element * 2 + total}, 10)
// => 22
