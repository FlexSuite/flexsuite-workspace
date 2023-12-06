import React from 'react'
import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  
  return (
    <Html lang="en">
      <title>FlexSuite ERP</title>
      <link rel="shortcut icon" href="/black-icon.png" type="image/x-icon" />
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}