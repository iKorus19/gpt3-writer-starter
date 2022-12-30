import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <meta property="og:title" content="Blog it up, Bitch!" key="title"/>
        <meta property="og:description" content="Ai Blog Writing Assistant" key="description"/>
        <meta
          property="og:image"
          content="http://thejonathonjames.com/wp-content/uploads/2022/12/share-image.png"
        />
        <meta name="twitter:card" content="summary_large_image"></meta>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
