const fs = require("fs")
let text = fs.readFileSync("text.txt", "utf-8")
console.log(text)
text = text.replace("Nipun", "IAS Nipun");
const newFile = fs.writeFileSync("Newt.txt", text)
console.log(text)