import React from 'react';
import styled from 'styled-components';

import { SectionShadow } from '../../common/SectionShadow';

const Wrapper = styled.div`
    background: radial-gradient(60% 80% at 50% 160%, rgb(219 222 227 / 70%) 0%, rgba(4, 7, 13, 0) 100%);
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
`;

const Inner = styled.div`
    width: 1440px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin: 0 auto;
`;
const Box = styled.div`
    padding: 1rem;
    border: 1px solid white;
    border-radius: 1rem;
    width: 100%;
    color: white;
    height: 30vh;
`;

const Services: React.FC = () => {
    return (
        <Wrapper>
            <Inner>
                <Box>ads doad </Box>
                <Box>ads doad </Box>
                <Box>ads doad </Box>
                <Box>ads doad </Box>
            </Inner>
            <SectionShadow />
        </Wrapper>
    );
};

export default Services;