const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");
import { DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";

const databaseClient = new DynamoDBClient({
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    sessionToken: process.env.AWS_SESSION_TOKEN,
  },
  region: process.env.AWS_DEFAULT_REGION,
});

const marshallOptions = {
  // Whether to automatically convert empty strings, blobs, and sets to `null`.
  convertEmptyValues: false, // false, by default.
  // Whether to remove undefined values while marshalling.
  removeUndefinedValues: true, // false, by default.
  // Whether to convert typeof object to map attribute.
  convertClassInstanceToMap: false, // false, by default.
};

const unmarshallOptions = {
  // Whether to return numbers as a string instead of converting them to native JavaScript numbers.
  wrapNumbers: false, // false, by default.
};

// Create the DynamoDB document client.
const databaseDocumentClient = DynamoDBDocumentClient.from(databaseClient, {
  marshallOptions,
  unmarshallOptions,
});

module.exports = { databaseClient, databaseDocumentClient };
