
import { css } from '@linaria/core';
import { setupWorker } from 'msw/browser';

const myClass = css`
  color: red;
`
const worker = setupWorker([]);

worker.start({
  serviceWorker: {
    url: './mockServiceWorker.js'
  }
});
