import { FC } from 'react';
import styled from 'styled-components';

import { fontSizeAndHeight } from '../../styles/fontSizes';
import { colorStack } from '../../styles/colorStack';

const Wrapper = styled.div`
    ${fontSizeAndHeight[20]};
    textarea {
        border-radius: 5px;
        height: 150px;
        width: 500px;
        resize: none;  
        background: ${colorStack.middleGrey};
        border: none;
        outline: none;
        ${fontSizeAndHeight[20]};
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
}
`;

interface IProps {
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export const TextareaComponent: FC<IProps> = (props) => {
    return (
        <Wrapper>
            <textarea value={props.value} onChange={props.onChange} placeholder={props.placeholder}></textarea>
        </Wrapper>
    );

};