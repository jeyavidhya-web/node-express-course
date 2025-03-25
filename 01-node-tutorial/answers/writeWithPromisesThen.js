const { writeFile, readFile } = require("fs").promises;

// Write to the temp.txt file
writeFile("temp.txt", "Line 1: This is the first line.\n")
  .then(() => {
    return writeFile("temp.txt", "Line 2: This is the second line.\n", { flag: 'a' });
  })
  .then(() => {
    return writeFile("temp.txt", "Line 3: This is the third line.\n", { flag: 'a' });
  })
  .then(() => {
    return writeFile("temp.txt", "Line 4: This is the forth line.\n", { flag: 'a' });
  })
  .then(() => {
    return writeFile("temp.txt", "Line 5: This is the fifth line.\n", { flag: 'a' });
  })
  .then(() => {
    return readFile("temp.txt", "utf8");
  })
  .then((data) => {
    console.log("File contents:\n", data); 
  })
  .catch((error) => {
    console.log("An error occurred: ", error); 
  });
