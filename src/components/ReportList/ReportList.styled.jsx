import styled from '@emotion/styled';

export const List = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top:20px;
    margin-bottom:30px;
`;

export const Item = styled.li`
    display:flex;
    flex-direction: column;
    align-items: center;
    margin-right:20px;
`;

export const ItemData = styled.p`
    font-size: 12px;
    line-height: 1,16;
    color: var(--text-color-3);
    text-transform: uppercase;
`;

export const ItemImg = styled.img`
    margin-top:5px;
    margin-bottom:5px;
`;
