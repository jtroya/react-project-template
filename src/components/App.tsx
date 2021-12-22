import React from 'react';
import { ThemeProvider, Theme } from '@emotion/react';
import { Global, css } from '@emotion/react';

import NotoSansRegularTtf from '../fonts/NotoSans/NotoSans-Regular.ttf';
import NotoSansItalicTtf from '../fonts/NotoSans/NotoSans-Italic.ttf';
import NotoSansBoldTtf from '../fonts/NotoSans/NotoSans-Bold.ttf';
import NotoSansBoldItalicTtf from '../fonts/NotoSans/NotoSans-BoldItalic.ttf';

import Layout from './Layout';

const theme: Theme = {
  primary: 'hotpink',
  positive: 'green',
  negative: 'black',
};

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Global
        styles={css`
          @font-face {
            font-family: 'NotoSans';
            font-style: normal;
            font-weight: 400;
            src: url('${NotoSansRegularTtf}') format('truetype');
          }

          @font-face {
            font-family: 'NotoSans';
            font-style: italic;
            font-weight: normal;
            src: url('${NotoSansItalicTtf}') format('truetype');
          }

          @font-face {
            font-family: 'NotoSans';
            font-style: normal;
            font-weight: 700;
            src: url('${NotoSansBoldTtf}') format('truetype');
          }

          @font-face {
            font-family: 'NotoSans';
            font-style: italic;
            font-weight: 700;
            src: url('${NotoSansBoldItalicTtf}') format('truetype');
          }

          html,
          body {
            font-family: 'NotoSans', sans-serif;
          }
        `}
      />
      <Layout>
        <h2>New Template</h2>
      </Layout>
    </ThemeProvider>
  );
};

export default App;
