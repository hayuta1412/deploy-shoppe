import { onRequest } from 'firebase-functions/v2/https';
import { createNestServer } from './main';



const server = createNestServer();

export const api = onRequest(async (request, response) => {
  const app = await server;
  return app(request, response);
});
