const {
  CreateTableCommand,
  ScalarAttributeType,
} = require("@aws-sdk/client-dynamodb");

const { databaseClient } = require("./databaseClient");

const tableDefinitions = [
  // Admin Table
  {
    AttributeDefinitions: [
      {
        AttributeName: "id", //ATTRIBUTE_NAME_1
        AttributeType: "N", //ATTRIBUTE_TYPE
      },
      // {
      //   AttributeName: "name", //ATTRIBUTE_NAME_2
      //   AttributeType: "S", //ATTRIBUTE_TYPE
      // },
      // {
      //   AttributeName: "email", //ATTRIBUTE_NAME_2
      //   AttributeType: "S", //ATTRIBUTE_TYPE
      // },
      // {
      //   AttributeName: "password_hash", //ATTRIBUTE_NAME_2
      //   AttributeType: "S", //ATTRIBUTE_TYPE
      // },
    ],
    KeySchema: [
      {
        AttributeName: "id", //ATTRIBUTE_NAME_1
        KeyType: "HASH", // Partition key
      },
    ],
    ProvisionedThroughput: {
      ReadCapacityUnits: 1,
      WriteCapacityUnits: 1,
    },
    TableName: "Admin", //TABLE_NAME
    StreamSpecification: {
      StreamEnabled: false,
    },
  },
  // User Table
  {
    AttributeDefinitions: [
      {
        AttributeName: "id", //ATTRIBUTE_NAME_1
        AttributeType: "N", //ATTRIBUTE_TYPE
      },
      // {
      //   AttributeName: "login", //ATTRIBUTE_NAME_1
      //   AttributeType: "S", //ATTRIBUTE_TYPE
      // },
      // {
      //   AttributeName: "name", //ATTRIBUTE_NAME_2
      //   AttributeType: "S", //ATTRIBUTE_TYPE
      // },
      // {
      //   AttributeName: "email", //ATTRIBUTE_NAME_2
      //   AttributeType: "S", //ATTRIBUTE_TYPE
      // },
      // {
      //   AttributeName: "password", //ATTRIBUTE_NAME_2
      //   AttributeType: "S", //ATTRIBUTE_TYPE
      // },
      // {
      //   AttributeName: "location", //ATTRIBUTE_NAME_2
      //   AttributeType: "S", //ATTRIBUTE_TYPE
      // },
      // {
      //   AttributeName: "driving_license", //ATTRIBUTE_NAME_2
      //   AttributeType: "N", //ATTRIBUTE_TYPE
      // },
    ],
    KeySchema: [
      {
        AttributeName: "id", //ATTRIBUTE_NAME_1
        KeyType: "HASH", // Partition key
      },
    ],
    ProvisionedThroughput: {
      ReadCapacityUnits: 1,
      WriteCapacityUnits: 1,
    },
    TableName: "User", //TABLE_NAME
    StreamSpecification: {
      StreamEnabled: false,
    },
  },
  // Company Table
  {
    AttributeDefinitions: [
      {
        AttributeName: "id", //ATTRIBUTE_NAME_1
        AttributeType: "N", //ATTRIBUTE_TYPE
      },
      // {
      //   AttributeName: "login", //ATTRIBUTE_NAME_1
      //   AttributeType: "S", //ATTRIBUTE_TYPE
      // },
      // {
      //   AttributeName: "name", //ATTRIBUTE_NAME_2
      //   AttributeType: "S", //ATTRIBUTE_TYPE
      // },
      // {
      //   AttributeName: "email", //ATTRIBUTE_NAME_2
      //   AttributeType: "S", //ATTRIBUTE_TYPE
      // },
      // {
      //   AttributeName: "password", //ATTRIBUTE_NAME_2
      //   AttributeType: "S", //ATTRIBUTE_TYPE
      // },
      // {
      //   AttributeName: "short_description", //ATTRIBUTE_NAME_2
      //   AttributeType: "S", //ATTRIBUTE_TYPE
      // },
    ],
    KeySchema: [
      {
        AttributeName: "id", //ATTRIBUTE_NAME_1
        KeyType: "HASH", // Partition key
      },
    ],
    ProvisionedThroughput: {
      ReadCapacityUnits: 1,
      WriteCapacityUnits: 1,
    },
    TableName: "Company", //TABLE_NAME
    StreamSpecification: {
      StreamEnabled: false,
    },
  },
  // Vehicle Table
  {
    AttributeDefinitions: [
      {
        AttributeName: "id", //ATTRIBUTE_NAME_1
        AttributeType: "N", //ATTRIBUTE_TYPE
      },
      // {
      //   AttributeName: "type", //ATTRIBUTE_NAME_1
      //   AttributeType: "S", //ATTRIBUTE_TYPE
      // },
      // {
      //   AttributeName: "model", //ATTRIBUTE_NAME_1
      //   AttributeType: "S", //ATTRIBUTE_TYPE
      // },
      // {
      //   AttributeName: "year", //ATTRIBUTE_NAME_1
      //   AttributeType: "S", //ATTRIBUTE_TYPE
      // },
      // {
      //   AttributeName: "comfort_class", //ATTRIBUTE_NAME_1
      //   AttributeType: "S", //ATTRIBUTE_TYPE
      // },
      // {
      //   AttributeName: "fuel_type", //ATTRIBUTE_NAME_1
      //   AttributeType: "S", //ATTRIBUTE_TYPE
      // },
      // {
      //   AttributeName: "photo", //ATTRIBUTE_NAME_1
      //   AttributeType: "S", //ATTRIBUTE_TYPE
      // },
      // {
      //   AttributeName: "distance_km", //ATTRIBUTE_NAME_1
      //   AttributeType: "N", //ATTRIBUTE_TYPE
      // },
      // {
      //   AttributeName: "address", //ATTRIBUTE_NAME_1
      //   AttributeType: "S", //ATTRIBUTE_TYPE
      // },
      // {
      //   AttributeName: "location", //ATTRIBUTE_NAME_1
      //   AttributeType: "S", //ATTRIBUTE_TYPE
      // },
      // {
      //   AttributeName: "dates_available", //ATTRIBUTE_NAME_1
      //   AttributeType: "S", //ATTRIBUTE_TYPE
      // },
      // {
      //   AttributeName: "gearbox_type", //ATTRIBUTE_NAME_1
      //   AttributeType: "S", //ATTRIBUTE_TYPE
      // },
      // {
      //   AttributeName: "price_per_km", //ATTRIBUTE_NAME_1
      //   AttributeType: "S", //ATTRIBUTE_TYPE
      // },
      // {
      //   AttributeName: "seats", //ATTRIBUTE_NAME_1
      //   AttributeType: "N", //ATTRIBUTE_TYPE
      // },
      // {
      //   AttributeName: "isAvailable", //ATTRIBUTE_NAME_1
      //   AttributeType: "N", //ATTRIBUTE_TYPE
      // },
      // {
      //   AttributeName: "next_inspection_date", //ATTRIBUTE_NAME_1
      //   AttributeType: "S", //ATTRIBUTE_TYPE
      // },
      // {
      //   AttributeName: "company_id", //ATTRIBUTE_NAME_1
      //   AttributeType: "N", //ATTRIBUTE_TYPE
      // },
    ],
    KeySchema: [
      {
        AttributeName: "id", //ATTRIBUTE_NAME_1
        KeyType: "HASH", // Partition key
      },
    ],
    ProvisionedThroughput: {
      ReadCapacityUnits: 1,
      WriteCapacityUnits: 1,
    },
    TableName: "Vehicle", //TABLE_NAME
    StreamSpecification: {
      StreamEnabled: false,
    },
  },
  // Booking Table
  {
    AttributeDefinitions: [
      {
        AttributeName: "id", //ATTRIBUTE_NAME_1
        AttributeType: "N", //ATTRIBUTE_TYPE
      },
      // {
      //   AttributeName: "vehicle_id", //ATTRIBUTE_NAME
      //   AttributeType: "N", //ATTRIBUTE_TYPE
      // },
      // {
      //   AttributeName: "user_id", //ATTRIBUTE_NAME
      //   AttributeType: "N", //ATTRIBUTE_TYPE
      // },
      // {
      //   AttributeName: "company_id", //ATTRIBUTE_NAME
      //   AttributeType: "N", //ATTRIBUTE_TYPE
      // },
      // {
      //   AttributeName: "date", //ATTRIBUTE_NAME
      //   AttributeType: "S", //ATTRIBUTE_TYPE
      // },
      // {
      //   AttributeName: "start_location", //ATTRIBUTE_NAME
      //   AttributeType: "S", //ATTRIBUTE_TYPE
      // },
      // {
      //   AttributeName: "endpoint_location", //ATTRIBUTE_NAME
      //   AttributeType: "S", //ATTRIBUTE_TYPE
      // },
    ],
    KeySchema: [
      {
        AttributeName: "id", //ATTRIBUTE_NAME_1
        KeyType: "HASH", // Partition key
      },
    ],
    ProvisionedThroughput: {
      ReadCapacityUnits: 1,
      WriteCapacityUnits: 1,
    },
    TableName: "Booking", //TABLE_NAME
    StreamSpecification: {
      StreamEnabled: false,
    },
  },
  // Review Table
  {
    AttributeDefinitions: [
      {
        AttributeName: "id", //ATTRIBUTE_NAME_1
        AttributeType: "N", //ATTRIBUTE_TYPE
      },
      // {
      //   AttributeName: "vehicle_id", //ATTRIBUTE_NAME
      //   AttributeType: "N", //ATTRIBUTE_TYPE
      // },
      // {
      //   AttributeName: "user_id", //ATTRIBUTE_NAME
      //   AttributeType: "N", //ATTRIBUTE_TYPE
      // },
      // {
      //   AttributeName: "company_id", //ATTRIBUTE_NAME
      //   AttributeType: "N", //ATTRIBUTE_TYPE
      // },
    ],
    KeySchema: [
      {
        AttributeName: "id", //ATTRIBUTE_NAME_1
        KeyType: "HASH", // Partition key
      },
    ],
    ProvisionedThroughput: {
      ReadCapacityUnits: 1,
      WriteCapacityUnits: 1,
    },
    TableName: "Review", //TABLE_NAME
    StreamSpecification: {
      StreamEnabled: false,
    },
  },
];

(() => {
  try {
    tableDefinitions.forEach(async (definition) => {
      const data = await databaseClient.send(
        new CreateTableCommand(definition)
      );
      console.log(`Table "${definition.TableName}" Created`, data);
    });
  } catch (err) {
    console.log("Error", err);
  }
})();
