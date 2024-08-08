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
          key={"push-gtm-event"}
          id="push-gtm-event"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-T3QZ4R2X');
          `,
          }}
        />
        <Script
          key={"gtm-script"}
          id="gtm-script"
          src="https://www.googletagmanager.com/gtag/js?id=G-K9GQLQF87M"
          strategy="beforeInteractive"
        />
        <Script
          key={"push-gtag-event"}
          id="push-gtm-event"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-K9GQLQF87M');
          `,
          }}
        />
        <Script
          key={"adsense"}
          id="adsense"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9831926548985981"
          strategy="beforeInteractive"
        />
        <Script
          key={"adBlocker"}
          id="adBlocker"
          src="https://fundingchoicesmessages.google.com/i/pub-9831926548985981?ers=1"
          strategy="beforeInteractive"
          nonce="2iKO0GIkt-TaKrM69irEgw"
        />
        <Script
          key={"adBlockerCode"}
          id="adBlockerCode"
          strategy="afterInteractive"
          nonce="2iKO0GIkt-TaKrM69irEgw"
          dangerouslySetInnerHTML={{
            __html: `
            (function() {function signalGooglefcPresent() {if (!window.frames['googlefcPresent']) {if (document.body) {const iframe = document.createElement('iframe'); iframe.style = 'width: 0; height: 0; border: none; z-index: -1000; left: -1000px; top: -1000px;'; iframe.style.display = 'none'; iframe.name = 'googlefcPresent'; document.body.appendChild(iframe);} else {setTimeout(signalGooglefcPresent, 0);}}}signalGooglefcPresent();})();
          `,
          }}
        />
        <Script
          key={"adsense123"}
          id="adsense123"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9831926548985981"
          strategy="beforeInteractive"
          crossOrigin="anonymous"
        />
        <ReduxProvider>
          <Component {...pageProps} key={router.route}/>
        </ReduxProvider>
      </>
    )
  }
}
export default MyApp;
