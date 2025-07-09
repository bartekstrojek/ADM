import { FC } from 'react';
import { IconDefinition } from '@fortawesome/pro-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

import { colorStack } from '../../styles/colorStack';
import { fontSizeAndHeight } from '../../styles/fontSizes';

const Wrapper = styled.div`
    background-color: ${colorStack.ligthGrey};
    display: flex;
    gap:8px;
    align-items: center;
    border-bottom: 1px solid ${colorStack.middleOrange};
    padding: 4px 8px;
    border-radius: 4px;
    ${fontSizeAndHeight[20]};
    input {
        background: none;
        border: none;
        outline: none;
        ${fontSizeAndHeight[20]};
        width: 100%;
        &::placeholder {
            color: ${colorStack.content}!important;
            font-weight: 400!important;
            font-size: 16px!important;
            line-height: 16px!important;
            &:disabled {
                color: ${colorStack.middleGrey}!important;
            }
        }
    }

`;

const Separator = styled.div`

    width: 2px;
    height: 20px;
    background-color: ${colorStack.content};
`;

interface IProps {
    value: string;
    iconName: IconDefinition;
    placeholder: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputComonent: FC<IProps> = (props) => {
    return (
        <Wrapper>
            <FontAwesomeIcon color={colorStack.content} icon={props.iconName} />
            <Separator />
            <input type="text" placeholder={props.placeholder} value={props.value} onChange={props.onChange} />
        </Wrapper>
    );
};