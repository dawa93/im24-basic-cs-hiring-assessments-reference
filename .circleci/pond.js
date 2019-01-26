const { exec } = require('child_process');
const https = require('https');

let studentInfo = require('../student.json')
let {theClass, student} = studentInfo

const pondResults = require('../react-pond/pond_results.json')
const { numFailedTests, numPassedTests} = pondResults

exec('echo "$airtable_api_key"', (err, apikey) => {
    if (err) {
        console.log(err)
        throw new Error('echo command did not work right')
    }

    if (apikey === "\n") {
        throw new Error('There is not the airtable_api_key')
    }

    const options = {
        hostname: 'api.airtable.com',
        path: '/v0/app8kEq9wXlsuffDy/Hiring%20Assessments',
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        Authorization: ' Bearer ' + apikey.trim()
        }
    };
    console.log(JSON.stringify(options.headers));

    const req = https.request(options, (res) => {
        res.on('data', (chunk) => {
            console.log(chunk.toString());
        // callback(null, result);
        });
    });

    req.on('error', (e) => {
        console.log(e)
        throw new Error('data did not send to airtable correctlu')
        // callback(new Error('failure'));
    });
    // send the request
    req.write(JSON.stringify({
        'fields': {
            'class': theClass,
            'name':student,
            'problem': 'react-pond',
            'passing': numPassedTests,
            'failing': numFailedTests,
        }
    }));
    req.end();
})