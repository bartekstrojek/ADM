import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { faAddressBook, faAddressCard, faBillboard, faBriefcase, faCookieBite, faEye, faGearComplexCode, faLink, faRectangleAd, faShieldHalved } from '@fortawesome/pro-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useIntl } from 'react-intl';


import { colorStack } from '../../../styles/colorStack';
import { fontSizeAndHeight } from '../../../styles/fontSizes';

const Wrapper = styled.div`
    width: 100%;
    bottom: 0;
    left: 0;
    z-index: 1000;
        `;

const Inner = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 1440px;
    margin: 24px auto;
    gap: 1rem;
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

const Footer: React.FC = () => {
    const intl = useIntl();
    return (
        <Wrapper>
            <Inner>
                <Link to="/aboutUs"><FontAwesomeIcon icon={faAddressCard} />{intl.formatMessage({ id: 'global.aboutUs' })}</Link>

                <Link to="/portfolio"><FontAwesomeIcon icon={faBriefcase} />{intl.formatMessage({ id: 'global.portfolio' })}</Link>

                <Link to="/advertisingSpaces"><FontAwesomeIcon icon={faBillboard} />{intl.formatMessage({ id: 'global.advertisingSpaces' })}</Link>

                <Link to="/contact"><FontAwesomeIcon icon={faAddressBook} />{intl.formatMessage({ id: 'global.contact' })}</Link>

                <Link to="/services"><FontAwesomeIcon icon={faGearComplexCode} />{intl.formatMessage({ id: 'global.services' })}</Link>

                <Link to="/cookies"><FontAwesomeIcon icon={faCookieBite} />{intl.formatMessage({ id: 'footer.cookies' })}</Link>

                <Link to="/privacy"><FontAwesomeIcon icon={faShieldHalved} />{intl.formatMessage({ id: 'footer.privacy' })}</Link>

                <Link to="/advertisers"><FontAwesomeIcon icon={faBillboard} />{intl.formatMessage({ id: 'footer.advertisers' })}</Link>

                <Link to="/advertisees"><FontAwesomeIcon icon={faBillboard} />{intl.formatMessage({ id: 'footer.advertisees' })}</Link>
            </Inner>
        </Wrapper>
    );
};

export default Footer;