import axios from "axios";
import { DynamoDB } from "aws-sdk";
import { APIGatewayProxyHandler } from 'aws-lambda';

const client = new DynamoDB.DocumentClient();
const url = 'http://checkip.amazonaws.com/';

export const handler: APIGatewayProxyHandler = (event, context, callback) => {

  getMyIp(url)
    .then(result => callback(null, { statusCode: 200, body: result }))
    .catch(err => callback(JSON.stringify(err)))
}

function getMyIp(url) {

  return axios.get(url)
    .then(response => {

      if (response.status !== 200) {
        throw (new Error('checkIp returned error'))
      }
      return response.data;
    })
    .catch(err => {

      throw new Error('axios failed');
    })
}
