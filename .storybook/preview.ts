import type { Preview } from '@storybook/react';
import { rest } from 'msw';

import { initialize, mswLoader } from 'msw-storybook-addon';
initialize();
const preview: Preview = {
  parameters: {
    msw: {
      handlers: [
        rest.get('/todos', (req, res, ctx) => {
          return res(ctx.json([]));
        }),
      ],
    },
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  loaders: [mswLoader],
};

export default preview;
