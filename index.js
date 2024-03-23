async function hashpassGen(password){
    const encoder = new TextEncoder();
    const passwordBuffer = encoder.encode(password);


    try {
        const hashBuffer = await crypto.subtle.digest('SHA-256', passwordBuffer);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        const hashHex = hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');
        return hashHex;
        
    } catch (error) {
        console.log('error while genrating hash',error)
        return null
    }
}
module.exports = hashpassGen;