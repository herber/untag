const minIndent = str => {
  const match = str.match(/^[ \t]*(?=\S)/gm);

  if (!match) {
    return 0;
  }

  return Math.min.apply(Math, match.map(x => x.length));
};

const removeIndent = str => {
  const indent = minIndent(str);

  if (indent === 0) {
    return str;
  }

  const re = new RegExp(`^[ \\t]{${indent}}`, 'gm');

  return str.replace(re, '');
};

const untag = (strings, ...values) => {
  let str = '';
  strings.forEach((string, i) => {
    str += string + (values[i] !== undefined ? values[i] : '');
  });

  return removeIndent(str)
    .replace(/\n$/, '')
    .replace(/^\n/, '');
};

module.exports = untag;
