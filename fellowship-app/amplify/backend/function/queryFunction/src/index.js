const AWS = require('aws-sdk');
const dynamoDB = new AWS.DynamoDB();

exports.handler = async (event) => {
    const params = {
        Statement: 'SELECT * FROM "dfellowshiptbl-dev"' // Your PartiQL query
    };

    try {
        const data = await dynamoDB.executeStatement(params).promise();
        return {
            statusCode: 200,
            body: JSON.stringify(data.Items),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Failed to execute PartiQL', error }),
        };
    }
};
