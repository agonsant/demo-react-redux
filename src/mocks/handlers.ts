import { rest } from 'msw';
import { charactersFullfilledResponse } from './characters-mocks';

export const handlers = [
  rest.get('https://swapi.dev/api/people', (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json(charactersFullfilledResponse));
  }),
];

export const errorHandlers = [
  rest.get('https://swapi.dev/api/people', (_req, res, ctx) => {
    return res.once(ctx.status(429), ctx.json(null));
  }),
];
