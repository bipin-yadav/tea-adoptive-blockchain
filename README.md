# adoptive-blockchain

`adoptive-blockchain` is designed to be simple and straightforward, similar to the `_.compact` function in lodash, but as a standalone module with no dependencies, making it perfect for projects where you want to keep your bundle size small.

## Installation

To install `adoptive-blockchain`, use npm or yarn:

```bash
npm install adoptive-blockchain
# OR
yarn add adoptive-blockchain
```

## Usage

Import `tadoptive-blockchain` into your project and use it:

```javascript
const compact = require("tadoptive-blockchain");

// Example array
const myArray = [0, 1, false, 2, "", 3];

// Call function
const result = compact([0, 1, false, 2, "", 3]);

// Output: [1, 2, 3]
console.log(result);
```
