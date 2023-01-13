import { ExecuteStatementCommand } from "@aws-sdk/client-dynamodb";
import { databaseDocumentClient } from "../databaseClient";

const tableName = "Company";

const baseParams = {
  TableName: tableName
};

export async function getCompanyById(id) {
  try {
    const dbResponse = await databaseDocumentClient.send(
      new ExecuteStatementCommand({
        Statement: "SELECT * FROM " + tableName + " where id=?",
        Parameters: [{ N: `${id}` }],
        // ProjectionExpression: "id, name, email"
      })
    );
    console.log("Success", dbResponse.Items[0]);
    return dbResponse.Items[0];
  } catch (error) {
    console.error(error);
    throw error;
  }
}
