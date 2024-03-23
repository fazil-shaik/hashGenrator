const hashpassGen = require('../password-hash-genrator/index')

async function testHashGeneration() {
    const password = 'MySecretPassword';
    const hash = await hashpassGen(password);

    if (hash !== null) {
        console.log('Hash generated successfully:', hash);
    } else {
        console.log('Error generating hash.');
    }
}

testHashGeneration();