const core = require('@actions/core');
const axios = require('axios');

async function main() {
    try {
        const message = core.getInput('message') || 'Default message';
        const response = await axios.get('https://dummy.restapiexample.com/api/v1/employee/1');
        console.log('Message: ', message);
        console.log("axios response: ", response.data);
    } catch (error) {
        core.setFailed(error.message);
    }
}

main();