// netlify/functions/hello.js
exports.handler = async function(event, context) {
    // This is what runs when someone visits your function URL
    
    return {
        statusCode: 200,
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'  // Allows any website to call this
        },
        body: JSON.stringify({
            message: "Hello from Netlify Function!",
            timestamp: new Date().toISOString(),
            yourData: event.body || "No data sent",
            method: event.httpMethod
        })
    };
};
