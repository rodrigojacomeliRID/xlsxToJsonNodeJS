import * as xlsx from 'xlsx';
import * as fs from 'fs';

const filePath = './pbm.xlsx';
const jsonFilePath = './pbm.json';

const file = xlsx.readFile(filePath);

const worksheet = file.Sheets[file.SheetNames[0]];
const jsonData = xlsx.utils.sheet_to_json(worksheet);

fs.writeFileSync(jsonFilePath, JSON.stringify(jsonData));

console.log('Convert Successfully!!!');
