const fs = require('fs');
const axios = require('axios');
const process = require('process');

function cat(path) {
    fs.readFile(path, 'utf8', (err, data) => {
        if (err) {
            console.log(`Error reading ${path}: ${err}`);
            process.exit(1);
        } else {
            console.log(`File contents: ${data}`)
        }
    });
}

async function webCat(url) {
    try {
        let response = await axios.get(url);
        console.log(response.data);
    } catch (err) {
        console.log(`Error fetching ${url}: ${err}`);
        process.exit(1);
    }
}

let path = process.argv[2];

if (path.slice(0, 4) === 'http') {
    webCat(path);
} else {
    cat(path);
}