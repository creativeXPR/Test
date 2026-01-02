// netlify/functions/hello.js
exports.handler = async function(event, context) {
    // This is what runs when someone visits your function URL
   const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=AIzaSyBdPiVCHZuZlxrzm2cesUovghmZyoi9jeg`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ contents: [{ parts: [{text: event.body || "I'm planning on integrating you into my webapp called study piece where you aid users in answering study related questions like what's actuarial Mathematics, and how do we recognise a survival function?"}] }] })
            });
            
            const data = await response.json();
            // console.log(data['candidates'][0]['content']['parts'][0]['text']);
    
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
            aiResponse: data['candidates'][0]['content']['parts'][0]['text'],
            method: event.httpMethod
        })
    };
};
