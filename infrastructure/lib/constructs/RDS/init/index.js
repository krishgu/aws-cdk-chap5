const mysql = require('mysql');
// const AWS = require('aws-sdk');
import {
  GetSecretValueCommand,
  SecretsManagerClient,
} from "@aws-sdk/client-secrets-manager";
const fs = require('fs');
const path = require('path');

function query(connection, sql) {
  return new Promise((resolve, reject) => {
    connection.query(sql, (error, res) => {
      if (error) return reject(error);

      return resolve(res);
    });
  });
}

function getSecretValueJ3(secretId) {
  const secretVal_JSON = async (secretName = secretId) => {
    const client = new SecretsManagerClient();
    const response = await client.send(
      new GetSecretValueCommand({
        SecretId: secretName,
      }),
    );
  
    return JSON.parse(response.SecretString);
  };
  return secretVal_JSON;
}


// function getSecretValue(secretId) {
//   return new Promise((resolve, reject) => {
//     secrets.getSecretValue({ SecretId: secretId }, (err, data) => {
//       if (err) return reject(err);

//       return resolve(JSON.parse(data.SecretString));
//     });
//   });
// }

exports.handler = async e => {
  try {
    const { config } = e.params;
    const { password, username, host } =  getSecretValueJ3(
      config.credentials_secret_name,
    );
    const connection = mysql.createConnection({
      host,
      user: username,
      password,
      multipleStatements: true,
    });

    connection.connect();

    const sqlScript = fs
      .readFileSync(path.join(__dirname, 'script.sql'))
      .toString();
    const res = await query(connection, sqlScript);

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
