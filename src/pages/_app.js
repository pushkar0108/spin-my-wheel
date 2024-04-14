import App from 'next/app';
import Script from 'next/script';

import "../app/globals.css";
import ReduxProvider from '../redux/provider';

class MyApp extends App {
  render() {
    const { Component, pageProps, router } = this.props;
    return(
      <>
        <Script
          id="gtm-script"
          src="https://www.googletagmanager.com/gtag/js?id=G-X0H0Q127NB"
          strategy="beforeInteractive"
        />
        <Script
          id="push-gtm-event"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-X0H0Q127NB');
          `,
          }}
        />
        <ReduxProvider>
          <Component {...pageProps} key={router.route}/>
        </ReduxProvider>
      </>
    )
  }
}
export default MyApp;
