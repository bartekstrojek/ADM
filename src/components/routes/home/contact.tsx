import React, { useState } from 'react';
import styled from 'styled-components';
import { faEye, faPaperPlane } from '@fortawesome/pro-regular-svg-icons';
import { useIntl } from 'react-intl';

import { InputComonent } from '../../common/InputComponent';
import { TextareaComponent } from '../../common/TextareaComponent';
import { ButtonComponent } from '../../common/ButtonComponent';
import { SectionShadow } from '../../common/SectionShadow';


const Wrapper = styled.div`
    height: 50vh;
    background-image: ${`url(${process.env.PUBLIC_URL}/assets/img/tlo.png)`};
`;

const Inner = styled.div`
    height: 100%;
    width: 250px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: center;
    justify-content: center;
    color: white;
    margin: 0 auto;
`;

const Contact: React.FC = () => {

    const intl = useIntl();

    const [inputValue, setInputValue] = useState<string>('');
    const [textareaValue, setTextareaValue] = useState<string>('');

    const sendForm = () => {
        console.log('inputValue', inputValue);
        console.log('textareaValue', textareaValue);
    };

    return (
        <Wrapper>
            <Inner>
                <InputComonent iconName={faEye} value={inputValue} placeholder="email" onChange={(e) => setInputValue(e.target.value)} />
                <TextareaComponent value={textareaValue} onChange={(e) => setTextareaValue(e.target.value)} placeholder='Wpisz swoją wiadomość...' />
                <ButtonComponent type="button" clickHandler={sendForm} value={intl.formatMessage({ id: 'contact.sendButton' })} iconName={faPaperPlane} />
            </Inner>
            <SectionShadow />
        </Wrapper>
    );
};

export default Contact;