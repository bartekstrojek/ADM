import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC } from 'react';
import styled from 'styled-components';

import { colorStack } from '../../styles/colorStack';
import { fontSizeAndHeight } from '../../styles/fontSizes';

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    background-color: ${colorStack.middleGreen};
    border-radius: 4px;
    ${fontSizeAndHeight[20]};
    padding: 4px 8px;
    width: 100%;;
    button{
        ${fontSizeAndHeight[20]};
        color: ${colorStack.white};
    }

`;

interface IProps {
    type: 'submit' | 'reset' | 'button' | undefined;
    value: string;
    iconName: IconDefinition;
    clickHandler: () => void;
}

export const ButtonComponent: FC<IProps> = (props) => {
    return (
        <Wrapper>
            <button type={props.type} onClick={props.clickHandler}>{props.value}</button>
            <FontAwesomeIcon icon={props.iconName} />
        </Wrapper>
    );
};