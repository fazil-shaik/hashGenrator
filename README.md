# hashGenrator

# Password Hash Generator

A simple npm package to generate a hash from a password using the SHA-256 algorithm.

## Installation

You can install the package using npm:

```bash
npm install password-hash-generator
```

Usage
First, require the hashpassGen function in your Node.js application:
```bash
const hashpassGen = require('password-hash-generator');
```
Then, use the hashpassGen function to generate a hash from a password:
```bash
const password = 'MySecretPassword';
hashpassGen(password)
  .then(hash => console.log('Generated Hash:', hash))
  .catch(err => console.error('Error generating hash:', err));
```
The hashpassGen function returns a Promise that resolves with the generated hash (in hexadecimal format) or rejects if there's an error during hash generation.

License:
This project is licensed under the MIT License - see the LICENSE file for details.

