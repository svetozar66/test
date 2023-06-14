import http from 'http';
import {
  createHttpTerminator,
} from 'http-terminator';

const server = http.createServer();

const httpTerminator = createHttpTerminator({
  server,
});

await httpTerminator.terminate();
