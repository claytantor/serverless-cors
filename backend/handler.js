exports.getInfo = (event, context, callback) => {
    console.log('processing event: %j', event);

    let result = {
        message: "cors is working."
    }

    callback(null, {
        statusCode: 200,
        headers: {
            "Content-Type":"application/json",
            "Access-Control-Allow-Origin" : "*", // Required for CORS support to work
        },
        body: JSON.stringify(result)});
};

