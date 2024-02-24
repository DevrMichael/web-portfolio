import React from 'react';
import { Preview } from '@storybook/react';

const preview: Preview = {
  decorators: [
    (Story) => (
      <div
        style={{
          backgroundColor: '#F3F5FB',
          width: 'fit-content',
          padding: '1rem',
          borderRadius: '0.25rem',
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export default preview;

// export const parameters = {
//   actions: { argTypesRegex: '^on[A-Z].*' },
//   controls: {
//     matchers: {
//       color: /(background|color)$/i,
//       date: /Date$/,
//     },
//   },
//   backgrounds: {
//     default: 'default',
//     values: [
//       {
//         name: 'default',
//         value: '#F3F5FB',
//       },
//       {
//         name: 'light',
//         value: '#FFFFFF',
//       },
//       {
//         name: 'dark',
//         value: '#000000',
//       },
//     ],
//   },
// };
