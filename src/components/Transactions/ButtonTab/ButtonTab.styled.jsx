import styled from "@emotion/styled";

export const Button = styled.button`
    background-color: ${({labelColorBG}) => labelColorBG ? 'var(--bg-tab-selected)' : '--bg-tab'};
    text-transform: uppercase;
    border: none;

    height: 40px;
    width: 138px;

    color: ${({labelColorText}) => labelColorText ? 'var(--acent-color)' : 'var(--text-color)'};
    font-weight: bold;
    font-size: 12px;
    line-height: 1.17;

    position: absolute;
    left: ${({leftPos=0}) => `${leftPos}px`};
    top: ${({topPos=0}) => `${topPos}px`};

    border-top-right-radius: 20px;
    border-top-left-radius: 20px;

    display: flex;
    justify-content: center; 
    align-items: center;

        cursor: pointer;
`