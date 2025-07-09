import { Suspense, FC } from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './home';
import { Spinner } from '../common/Spinner/Spinner';
import Contact from './contact';
import Privacy from './privacy';
import Terms from './terms';
import Clients from './clients';
import Cookies from './cookies';
import Services from './services';
import Portfolio from './portfolio';
import AboutUs from './aboutUs';
import AdvertisingSpaces from './advertisingSpaces';
import Advertisers from './advertisers';
import Advertisees from './advertisees';

export const Navigation: FC = () => {
    return (
        <Suspense fallback={<Spinner size="large" />}>
            <Routes>
                <Route index element={<Home />} />
                <Route path="/aboutUs" element={<AboutUs/>} />
                <Route path="/advertisingSpaces" element={<AdvertisingSpaces/>} />
                <Route path="/clients" element={<Clients/>} />
                <Route path="/cookies" element={<Cookies/>} />
                <Route path="/contact" element={<Contact/>} />
                <Route path="/privacy" element={<Privacy/>} />
                <Route path="/portfolio" element={<Portfolio/>} />
                <Route path="/services" element={<Services/>} />
                <Route path="/terms" element={<Terms/>} />
                <Route path="/advertisers" element={<Advertisers/>} />
                <Route path="/advertisees" element={<Advertisees/>} />

            </Routes>
        </Suspense>
    );
};