import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';

import { SectionShadow } from '../../common/SectionShadow';

const Wrapper = styled.div`
    background: radial-gradient(60% 80% at 50% 160%, rgb(219 222 227 / 70%) 0%, rgba(4, 7, 13, 0) 100%);
    position: relative;
`;

const ElemSlider = styled.div`
    img{
        width:50%;
        margin: 0 auto;
    }
`;

const Partners: React.FC = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: false
    };

    return (
        <Wrapper>
            <Slider {...settings}>
                <ElemSlider>
                    <img src={`${process.env.PUBLIC_URL}/assets/img/partners/airsoft-zone-logo.png`} />
                </ElemSlider>
                <ElemSlider>
                    <img src={`${process.env.PUBLIC_URL}/assets/img/partners/asg-krakow-arena-logo.png`} />
                </ElemSlider>
                <ElemSlider>
                    <img src={`${process.env.PUBLIC_URL}/assets/img/partners/ashm-logo.png`} />
                </ElemSlider>
                <ElemSlider>
                    <img src={`${process.env.PUBLIC_URL}/assets/img/partners/empire-logo.png`} />
                </ElemSlider>
                <ElemSlider>
                    <img src={`${process.env.PUBLIC_URL}/assets/img/partners/gamma-events-logo.png`} />
                </ElemSlider>
                <ElemSlider>
                    <img src={`${process.env.PUBLIC_URL}/assets/img/partners/gate-logo.png`} />
                </ElemSlider>
                <ElemSlider>
                    <img src={`${process.env.PUBLIC_URL}/assets/img/partners/ipsc-logo.png`} />
                </ElemSlider>
                <ElemSlider>
                    <img src={`${process.env.PUBLIC_URL}/assets/img/partners/krakowski-konwent-logo.png`} />
                </ElemSlider>
                <ElemSlider>
                    <img src={`${process.env.PUBLIC_URL}/assets/img/partners/marsh-logo.png`} />
                </ElemSlider>
                <ElemSlider>
                    <img src={`${process.env.PUBLIC_URL}/assets/img/partners/playair-pro-logo.png`} />
                </ElemSlider>
                <ElemSlider>
                    <img src={`${process.env.PUBLIC_URL}/assets/img/partners/sklep-asg-logo.png`} />
                </ElemSlider>
            </Slider>
            <SectionShadow />
        </Wrapper>
    );
};

export default Partners;