import ReactDOM from 'react-dom/client';
import { ClearCacheProvider } from 'react-clear-cache';
import { BrowserRouter } from 'react-router-dom';

import { IntlComponent } from './components/common/IntlComponent';
import { GlobalStyle } from './styles/global';
import { Navigation } from './components/routes';
import Layout from './components/common/layout';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <ClearCacheProvider duration={300000} auto>
        <IntlComponent>
            <GlobalStyle />
            <BrowserRouter>
                <Layout>
                    <Navigation />
                </Layout>
            </BrowserRouter>
        </IntlComponent>
    </ClearCacheProvider>
);