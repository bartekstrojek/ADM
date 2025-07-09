import React from 'react';

import Header from './header';
import Footer from './footer';

interface IProps {
    children: React.ReactNode;
}

const Layout: React.FC<IProps> = props => {
    return (
        <div>
            <Header />
            {props.children}
            <Footer />
        </div>
    );
};

export default Layout;