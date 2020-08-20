import Head from 'next/head';
import Nav from './nav';

const Layout = ({ children }) => {
    return (
        <div>
            <Head>
                <link type="image/x-icon" rel="shortcut icon" href="/favicon.ico" />
                <title>IGS Quoting App</title>
            </Head>
            <Nav />
            <main>{children}</main>
        </div>
    );
};

export default Layout;
