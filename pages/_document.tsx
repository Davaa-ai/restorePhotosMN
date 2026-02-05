import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang='mn'>
        <Head>
          <link rel='icon' href='/favicon.ico' />
          <meta
            name='description'
            content='Restore your old face photos and keep the memories alive.'
          />
          <meta property='og:site_name' content='restorePhotos.io' />
          <meta
            property='og:description'
            content='Restore your old face photos and keep the memories alive.'
          />
          <meta property='og:title' content='Face Photo Restorer' />
          <meta name='twitter:card' content='summary_large_image' />
          <meta name='twitter:title' content='Face Photo Restorer' />
          <meta
            name='twitter:description'
            content='Restore your old photos and keep the memories alive.'
          />
          <meta
            property='og:image'
            content='https://restore-photos.vercel.app/og-image.png'
          />
          <meta
            name='twitter:image'
            content='https://restore-photos.vercel.app/og-image.png'
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap&subset=cyrillic" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
