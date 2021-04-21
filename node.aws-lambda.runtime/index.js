'use strict';
console.log('Loading hello world function');

exports.handler = async (event) => {
    console.log("request: " + JSON.stringify(event));

    let responseBody = '';

    if (event.rawQueryString && event.rawQueryString === 'env') {
        responseBody = `
            <pre>${JSON.stringify(process.env, null, 4)}</pre>
        `;
    } else {
        let hrTime = process.hrtime()
        responseBody = `
            👋 <b>Hello World</b> from AWS Lambda using NodeJS runtime<br>
            ⏳ ${hrTime[0] * 1000000 + hrTime[1] / 1000}
        `;
    }
    
    // The output from a Lambda proxy integration must be 
    // in the following JSON object. The 'headers' property 
    // is for custom response headers in addition to standard 
    // ones. The 'body' property  must be a JSON string. For 
    // base64-encoded payload, you must also set the 'isBase64Encoded'
    // property to 'true'.
    let response = {
        statusCode: 200,
        headers: {
            "Content-Type": "text/html; charset=utf-8"
        },
        isBase64Encoded: true,
        body: (new Buffer(responseBody)).toString('base64')
    };
    console.log("response: " + JSON.stringify(response))
    return response;
};
