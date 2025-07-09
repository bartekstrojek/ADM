import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useIntl } from 'react-intl';

import { SectionShadow } from '../../common/SectionShadow';


const Wrapper = styled.div`
    background: radial-gradient(60% 80% at 50% 160%, rgb(219 222 227 / 70%) 0%, rgba(4, 7, 13, 0) 100%);
    position: relative;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: white;
    gap: 1rem;
    img {
        height: 80px;
    }
`;

const Video = styled.video`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    object-fit: cover;
    filter: grayscale(1) blur(10px);
`;

const Hero: React.FC = () => {
    // tslint:disable-next-line:no-null-keyword
    const videoRef = React.useRef<HTMLVideoElement>(null);
    
    const intl = useIntl();

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = .7;
        }
    }, [videoRef]);
    return (
        <Wrapper>
            <Video controls={false} autoPlay muted loop ref={videoRef} >
                <source src={`${process.env.PUBLIC_URL}/assets/video/hero-bg.mp4`} type="video/mp4" />
            </Video>
            <img src={`${process.env.PUBLIC_URL}/assets/img/logo-white.png`} />
            <span>{intl.formatMessage({ id: 'hero.mainSlogan' })}</span>
            <SectionShadow />
        </Wrapper>
    );
};

export default Hero;