sum = (a, b) => {
  return +a + +b;
};

sub = (a, b) => {
  return +a - +b;
};

mult = (a, b) => {
  return +a * +b;
};

div = (a, b) => {
  return +a / +b;
};

module.exports = { sum, mult, sub, div };
