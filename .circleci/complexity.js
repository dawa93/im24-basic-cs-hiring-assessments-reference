const { exec } = require('child_process');
const https = require('https');

// read results.json and add results on the file.
let studentInfo = require("../student.json");
let { theClass, student } = studentInfo;

const {
  sumSquaresTimeComplexity,
  nthPowerTimeComplexity,
  rockPaperScissorsTimeComplexity,
  TimeComplexity
} = require("../algo-complexity/algo-complexity");

const result = {
  class: theClass,
  name: student,
  problem: "time-complexity",
  answer: answer,
  passing: 0,
  failing: 0
};

if (sumSquaresTimeComplexity === TimeComplexity.LINEAR) {
  result.passing++;
} else {
  result.failing++;
}

if (nthPowerTimeComplexity === TimeComplexity.LOGARITHMIC) {
  result.passing++;
} else {
  result.failing++;
}

if (rockPaperScissorsTimeComplexity === TimeComplexity.EXPONENTIAL) {
  result.passing++;
} else {
  result.failing++;
}

console.log(result);

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
      fields: result
    })
  );
  req.end();
});
