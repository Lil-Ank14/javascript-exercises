const convertToCelsius = function (degreeF) {
  let celsius = (degreeF - 32) * (5 / 9);
  celsius = Math.round(celsius * 10) / 10;
  return celsius;
};

const convertToFahrenheit = function (degreeC) {
  let farenheight = degreeC * (9 / 5) + 32;
  farenheight = Math.round(farenheight * 10) / 10;
  return farenheight;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
