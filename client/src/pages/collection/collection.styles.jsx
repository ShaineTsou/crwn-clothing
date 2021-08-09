import styled from 'styled-components';

export const CollectionPageStyles = styled.div`
    display: flex;
    flex-direction: column;

    .title {
        font-size: 38px;
        margin: 0 auto 30px;
    }
`;

export const ItemsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 10px;
`;