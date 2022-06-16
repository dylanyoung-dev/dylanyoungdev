import '../sass/main.scss';
import { useEffect } from 'react';
import TagManager from 'react-gtm-module';
import { AppProps } from 'next/app';

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }: AppProps) {
    useEffect(() => {
        TagManager.initialize({ gtmId: 'GTM-PK9SFJP' });
    }, []);

    return <Component {...pageProps} />;
}