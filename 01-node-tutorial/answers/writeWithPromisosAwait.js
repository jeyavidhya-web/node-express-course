
const { writeFile, readFile } = require("fs").promises;


const writer = async () => {
  try {
    await writeFile("temp.txt", "Line 1: This is the first line.\n");
    await writeFile("temp.txt", "Line 2: This is the second line.\n", { flag: 'a' });
    await writeFile("temp.txt", "Line 3: This is the third line.\n", { flag: 'a' });
    await writeFile("temp.txt", "Line 4: This is the forth line.\n", { flag: 'a' });
    await writeFile("temp.txt", "Line 5: This is the fifth line.\n", { flag: 'a' });
    
    console.log("Writing to file completed.");
  } catch (err) {
    console.error("Error writing to file:", err);
  }
};

const reader = async () => {
  try {
    const data = await readFile("temp.txt", "utf-8");
    console.log("File content:\n", data);
  } catch (err) {
    console.error("Error reading the file:", err);
  }
};


const readWrite = async () => {
  await writer();
  await reader();
};


readWrite();
