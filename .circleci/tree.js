const { exec } = require("child_process");
const https = require("https");

let studentInfo = require("../student.json");
let { theClass, student } = studentInfo;

exec(
  'npm run test-tree | grep -E "[0-9]+\\s(passing|failing)"',
  (err, stdout1, stderr) => {
    if (err) {
      console.log(err);
      throw new Error("can not take the test result");
    }

    // Get test result from the console and cleasing it for spread sheet
    let matchWithPassing = stdout1.match(/([.\d,]+)[ ]+passing/);
    let matchWithFaling = stdout1.match(/([.\d,]+)[ ]+failing/);
    let passing = matchWithPassing ? Number(matchWithPassing[1]) : 0;
    let faling = matchWithFaling ? Number(matchWithFaling[1]) : 0;

    exec('echo "$airtable_api_key"', (err, apikey) => {
      if (err) {
        console.log(err);
        throw new Error("echo command did not work right");
      }

      if (apikey === "\n") {
        throw new Error("There is not the airtable_api_key");
      }

      const options = {
        hostname: "api.airtable.com",
        path: "/v0/app8kEq9wXlsuffDy/Hiring%20Assessments",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: " Bearer " + apikey.trim()
        }
      };
      console.log(JSON.stringify(options.headers));

      const req = https.request(options, res => {
        res.on("data", chunk => {
          console.log(chunk.toString());
          // callback(null, result);
        });
      });

      req.on("error", e => {
        console.log(e);
        throw new Error("data did not send to airtable correctlu");
        // callback(new Error('failure'));
      });
      // send the request
      req.write(
        JSON.stringify({
          fields: {
            class: theClass,
            name: student,
            problem: "tree-map",
            passing: passing,
            failing: faling
          }
        })
      );
      req.end();
    });
  }
);
