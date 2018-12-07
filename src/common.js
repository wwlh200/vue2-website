import xlsx from 'node-xlsx';
var fs = require('fs');

const xlsx2json = () => {
  debugger;
  const workSheetsFromBuffer = xlsx.parse(fs.readFileSync(`${__dirname}/one.xlsx`));
  const workSheetsFromFile = xlsx.parse(`${__dirname}/one.xlsx`);
}

export default xlsx2json;

