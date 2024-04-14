import fs from 'fs';
import path from 'path';
import formates from './formatter/formates.js';
import parsers from './parsers.js';
import searchDiff from './search.js';

function transferPathToFileContent(filepath) {
  const normalizePath = filepath.includes('fixtures') ? filepath : path.resolve(process.cwd(), '__fixtures__', filepath);
  if (!fs.existsSync(normalizePath)) {
    return `File does not exist at the specified path ${filepath}`;
  }

  const fileContent = fs.readFileSync(normalizePath, 'utf-8');
  const fileExtension = path.extname(normalizePath);

  return parsers(fileContent, fileExtension);
}

function genDiff(filepath1, filepath2, format = 'stylish') {
  const data1 = transferPathToFileContent(filepath1);
  const data2 = transferPathToFileContent(filepath2);

  if (typeof data1 === 'string') {
    return data1;
  }
  if (typeof data2 === 'string') {
    return data2;
  }
  const diff = searchDiff(data1, data2);
  const formattedDiff = formates(diff, format);
  return formattedDiff;
}

export default genDiff;
