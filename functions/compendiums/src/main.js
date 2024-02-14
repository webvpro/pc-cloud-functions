import 'dotenv/config'
import { Client, Functions } from 'node-appwrite';

// This is your Appwrite function
// It's executed each time we get a request

const client = new Client()
    .setEndpoint(process.env.APPWRITE_ENDPOINT)
    .setProject(process.env.APPWRITE_PROJECT_ID)
    .setKey(process.env.APPWRITE_KEY);
const functions = new Functions(client)    

export default async ({ req, res, log, error }) => {
  // Why not try the Appwrite SDK?
  //
  const promise = functions.list();

promise.then(function (response) {
    console.log(response);
}, function (error) {
    console.log(error);
});

  // You can log messages to the console
  log('Hello, Logs!');

  // If something goes wrong, log an error
  //error('Hello, Errors!');

  // The `req` object contains the request data
  if (req.method === 'GET') {
    // Send a response with the res object helpers
    // `res.send()` dispatches a string back to the client
    return res.send('Hello, World!');
  }

  // `res.json()` is a handy helper for sending JSON
  return res.json({
    motto: 'Build like a team of hundreds_',
    learn: 'https://appwrite.io/docs',
    connect: 'https://appwrite.io/discord',
    getInspired: 'https://builtwith.appwrite.io',
  });
};
