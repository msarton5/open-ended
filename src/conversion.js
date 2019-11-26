const readlineSync = require("readline-Sync"));

console.log();

origin = 0;
destination = 0;
value = Number(readlineSync.question("Enter a value: "));

while (!String.isString(origin) || origin !== "miles") {
  origin = String(readlineSync.question("Enter an origin unit: "));
    if (origin == "miles")
      destination = String(readlineSync.question("Enter a destination unit: "));
      if (destination )

}


console.log("\nThere are " + answer + origin +" in " + value + destination + ".\n");
