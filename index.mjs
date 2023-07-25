import { createRequire } from 'node:module';

const req = createRequire(import.meta.url);

export function resolve(path) {
  return req.resolve(path);
}
