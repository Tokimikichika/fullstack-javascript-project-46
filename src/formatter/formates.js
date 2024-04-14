import json from './json.js';
import plain from './plain.js';
import stylish from './stylish.js';

const formates = (data, format, replacer = '    ') => {
  switch (format) {
    case 'stylish':
      return stylish(data, replacer);
    case 'plain':
      return plain(data);
    case 'json':
      return json(data, null, replacer);
    default:
      return `Invalid output format: '${format}'`;
  }
};
export default formates;
