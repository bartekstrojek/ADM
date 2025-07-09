import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useIntl } from 'react-intl';

import { colorStack } from '../../../styles/colorStack';
import { faAddressBook, faAddressCard, faBillboard, faBriefcase, faGearComplexCode, faGlobe, faLanguage } from '@fortawesome/pro-regular-svg-icons';
import { fontSizeAndHeight } from '../../../styles/fontSizes';
import { SectionShadow } from '../SectionShadow';



const Wrapper = styled.div`
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 1000;
    background: rgba(36, 36, 36, 0.8);
    backdrop-filter: blur(10px);
`;

const Inner = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1440px;
    margin: 0 auto;
    padding: 1rem 0;
    a{
            color: white;
            display: flex;
            gap: 4px;
            align-items: center;
        }
        svg {
            ${fontSizeAndHeight[16]};
            color: ${colorStack.white};
        }
`;

const Logo = styled.div`
    img {
        height: 40px;
    }
`;
const Menu = styled.div`
    display: flex;
    gap: 1rem;
    a {
        color: white;
    }
`;

const Language = styled.div`
     color: white;
            display: flex;
            gap: 4px;
            align-items: center;
        }
        svg {
            ${fontSizeAndHeight[16]};
            color: ${colorStack.white};
        }
`;

const Header: React.FC = () => {

    const intl = useIntl();
    return (
        <Wrapper>
            <Inner>
                <Logo>
                    <a href='/'>
                        <img src={`${process.env.PUBLIC_URL}/assets/img/logo-white.png`} />
                    </a>
                </Logo>
                <Menu>

                    <Link to="/aboutUs"><FontAwesomeIcon icon={faAddressCard} />{intl.formatMessage({ id: 'global.aboutUs' })}</Link>

                    <Link to="/portfolio"><FontAwesomeIcon icon={faBriefcase} />{intl.formatMessage({ id: 'global.portfolio' })}</Link>

                    <Link to="/advertisingSpaces"><FontAwesomeIcon icon={faBillboard} />{intl.formatMessage({ id: 'global.advertisingSpaces' })}</Link>

                    <Link to="/contact"><FontAwesomeIcon icon={faAddressBook} />{intl.formatMessage({ id: 'global.contact' })}</Link>

                    <Link to="/services"><FontAwesomeIcon icon={faGearComplexCode} />{intl.formatMessage({ id: 'global.services' })}</Link>

                </Menu>

                <Language><FontAwesomeIcon icon={faGlobe} />PL</Language>
            </Inner>
            <SectionShadow />
        </Wrapper>
    );
};

export default Header;