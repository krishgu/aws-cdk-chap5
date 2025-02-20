import mysql from 'mysql';
import {
  GetSecretValueCommand,
  SecretsManagerClient,
} from "@aws-sdk/client-secrets-manager";
import fs from 'fs';
import path from 'path';

import { fileURLToPath } from 'url';
import { dirname } from 'path';



function query(connection, sql) {
  return new Promise((resolve, reject) => {
    connection.query(sql, (error, res) => {
      if (error) return reject(error);

      return resolve(res);
    });
  });
}

async function getSecretValueJ3(secretId) {
  const secretVal_JSON = async (secretName) => {
    const client = new SecretsManagerClient();
    console.log("Trying to get secrets from " + secretName)
    const response = await client.send(
      new GetSecretValueCommand({
        SecretId: secretName,
      }),
    );
    console.log("Got from secrets " + " <<< " + JSON.stringify(response.SecretString) + ">>>");
    return JSON.parse(response.SecretString);
  };
  return secretVal_JSON(secretId);
}

export const handler = async e => {
  try {
    const { config } = e.params;
    console.log("Event is " + e);
    console.log("Params or Config is " + e.params);

    const { password, username, host } =  await getSecretValueJ3(
      config.credentials_secret_name,
    );
    console.log(`got secrets -- ${host}, ${username}`);
    const connection = mysql.createConnection({
      host,
      user: username,
      password,
      multipleStatements: true,
    });

    connection.connect();
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);

    const sqlScript = fs
      .readFileSync(path.join(__dirname, 'script.sql'))
      .toString();
    const res = await query(connection, sqlScript);
    console.log("Ran script ${__dirname}/script.sql -- mysql -- exiting well");
    return {
      status: 'OK',
      results: res,
    };
  } catch (err) {
    return {
      status: 'ERROR',
      err,
      message: err.message,
    };
  }
};
