import {
  DynamoDBClient,
  ListTablesCommand,
} from "@aws-sdk/client-dynamodb-v2-node";

async function example() {
  console.log("start");
  const client = new DynamoDBClient({
    endpoint: "http://localhost:8000",
    region: "us-east-1",
  });
  const command = new ListTablesCommand({});
  try {
    console.log(1);
    const results = await client.send(command);
    console.log(2);
    console.log(results!.TableNames!.join("\n"));
    console.log(3);
  } catch (err) {
    console.log(4);
    console.error(err);
    console.log(5);
    throw new Error("db is not exist");
  }
  console.log(6);
}
example();
