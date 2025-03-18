const fs=require('fs');
const path=require('path');


const filePath = path.join(__dirname, "temporary", "fileA.txt");


if (!fs.existsSync(path.dirname(filePath))) {
  fs.mkdirSync(path.dirname(filePath));  
}

fs.writeFileSync(filePath, "This is the first line.\n");
fs.writeFileSync(filePath, "This is the second line.\n", { flag: 'a' }); 
fs.writeFileSync(filePath, "This is the third line.\n", { flag: 'a' }); 


const fileContent = fs.readFileSync(filePath, "utf8");


console.log("File Content:\n", fileContent);
