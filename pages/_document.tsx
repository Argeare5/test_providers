import { Head, Html, Main, NextScript } from 'next/document';
import React from 'react';

import { getCssText, reset } from '../src/ui/utils/theme';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Wandering on the Web3 labyrinth building great projects"
        />

        <link rel="icon" href="/favicon.ico" />

        <title>AAVE | Governance</title>

        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

Document.getInitialProps = async function getInitialProps(ctx: any) {
  // render page
  const results = await ctx.defaultGetInitialProps(ctx);
  // get the css for the current rendering cycle
  const stitchesCssString = getCssText();
  // reset the styles between renders
  reset();
  return {
    ...results,
    styles: (
      <>
        {results.styles}
        <style
          id="stitches"
          dangerouslySetInnerHTML={{ __html: stitchesCssString }}
        />
      </>
    ),
  };
};
