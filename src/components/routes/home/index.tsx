import React from 'react';
import styled from 'styled-components';

import Hero from './hero';
import Partners from './partners';
import Services from './services';
import Portfolio from './portfolio';
import Contact from './contact';

const Wrapper = styled.div`
`;

const Home: React.FC = () => {
    return (
      <Wrapper>
        <Hero />
        <Partners />
        <Services />
        <Portfolio />
        <Contact />
      </Wrapper>
    );
};

export default Home;