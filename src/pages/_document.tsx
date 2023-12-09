import React from 'react'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  
  return (
    <Html lang="en">
      <title>FlexSuite ERP</title>
      <link rel="shortcut icon" href="/black-icon.png" type="image/x-icon" />
      <Head />
      <body className='bg-gray-50'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}