//1) First to understand the problems
//array transfomed to string
const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];
const data3 = [17, 21, 23, 12, 5, -5, 0, 4];
const data4 = [17, 21, 23, 12, 5, -5, 0, 4, 2, 3];
console.log(`...${data1[0]}ºC... ${data1[1]}ºC...${data1[2]}ºC...`);
const printForecast = function (arr) {
  let result = "";
  for (i = 0; i < arr.length; i++) {
    result = result + `${arr[i]}ºC in ${i + 1} days... `;
  }
  console.log("..." + result);
};
printForecast(data1);
printForecast(data2);
printForecast(data3);
printForecast(data4);
