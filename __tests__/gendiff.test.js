import path from 'path';
import { fileURLToPath } from 'url';
import genDiff from '../src/index.js';
import { expectedStylish, expectedPlain, expectedJSON } from '../__fixtures__/expected.js';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);
const getFixturePath = (filepath) => path.join(dirname, '..', '__fixtures__', filepath);
const casesForSuccessTests = [
  ['file1.json', 'file2.json'],
  ['file1.yml', 'file2.yml', 'stylish'],
  ['file1.yaml', 'file2.yaml', 'plain'],
  ['file1.yaml', 'file2.yaml', 'json'],
];

const outputFormats = {
  stylish: expectedStylish,
  plain: expectedPlain,
  json: expectedJSON,
};

test.each(casesForSuccessTests)('Compare %s with %s in format %s', (filepath1, filepath2, format = 'stylish') => {
  const fixturePath1 = getFixturePath(filepath1);
  const fixturePath2 = getFixturePath(filepath2);
  const expected = outputFormats[format];

  expect(genDiff(fixturePath1, fixturePath2, format)).toEqual(expected);
});

test('Should throw error for unsupported file extension', () => {
  const fixturePath1 = getFixturePath('file1.json'); 
  const fixturePath2 = getFixturePath('file2.txt'); 
  const expectedMessage = 'File extension .txt is not supported'; 
  expect(() => genDiff(fixturePath1, fixturePath2)).toThrow(expectedMessage); 
});

test('Should throw error for invalid output format', () => {
  const fixturePath1 = getFixturePath('file1.json'); 
  const fixturePath2 = getFixturePath('file2.json'); 
  const expectedMessage = "Invalid output format: 'unusual'"; 
  expect(() => genDiff(fixturePath1, fixturePath2, 'unusual')).toThrow(expectedMessage); 
});
