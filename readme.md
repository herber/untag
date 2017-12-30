# untag [![Build Status](https://travis-ci.org/herber/untag.svg?branch=master)](https://travis-ci.org/herber/untag)

> Normalized template literals

## Features
 - Removes empty first and last lines
 - Removes unnecessary indents

## Install
```
$ npm install untag
```

## Usage
```js
const untag = require('untag');

const scope = () => {
  return untag`
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  Nulla dolor odio, dignissim id auctor eu, pellentesque eget metus.
  Maecenas nec suscipit neque, ac faucibus nulla.
  Nulla molestie vitae nisi eu pretium.
  `;
};
```

## License

MIT © [](http://tobihrbr.com)
