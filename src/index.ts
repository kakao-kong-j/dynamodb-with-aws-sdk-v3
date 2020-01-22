import {
  DynamoDBClient,
  ListTablesCommand,
} from "@aws-sdk/client-dynamodb-v2-node";

export const delay = (ms: number) =>
  new Promise(resolve => {
    setTimeout(resolve, ms);
  });

async function example() {
  console.log("start");
  await delay(10000).then(() => console.log("end wait!"));
  console.log("end wait");
  const client = new DynamoDBClient({
    endpoint: "amazon/dynamodb-local://dynamo:8000",
    region: "us-east-2",
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
  }
  console.log(6);
}
example();
