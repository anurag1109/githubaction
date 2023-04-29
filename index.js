
var arguments = process.argv;
const crypto = require("crypto");

const { sum, mult, sub, div } = require("./data");

if (arguments[2] == "add") {
  console.log(sum(arguments[3], arguments[4]));
}

if (arguments[2] == "mult") {
  console.log(mult(arguments[3], arguments[4]));
}

if (arguments[2] == "sub") {
  console.log(sub(arguments[3], arguments[4]));
}

if (arguments[2] == "divide") {
  console.log(div(arguments[3], arguments[4]));
}

if (arguments[2] == "sin") {
  console.log(Math.sin(+arguments[3]));
}

if (arguments[2] == "cos") {
  console.log(Math.cos(+arguments[3]));
}

if (arguments[2] == "tan") {
  console.log(Math.tan(+arguments[3]));
}

if (arguments[2] == "random") {
  if (!+arguments[3])
    console.log("Provide length for random number generation.");
  else {
    let x = +arguments[3];
    // let y = +arguments[4] || 60;
    // console.log(crypto.randomInt(x, y));

    crypto.randomBytes(x, (err, byt) => {
      if (err) {
        console.log(err);
        return;
      }

      console.log(byt.toString("binary"));
    });
  }

  // crypto.randomInt(x,y, (err, res) => {
  //     if (res)
  //         console.log(res)
  //     else
  //         console.log(err)
  // })
}


// switch (operation) {
  
//   default:
//     console.log("Invalid operation");
// }

