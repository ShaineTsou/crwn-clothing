import styled from 'styled-components';

export const CollectionPageStyles = styled.div`
    display: flex;
    flex-direction: column;

    .title {
        font-size: 38px;
        margin: 0 auto 30px;
    }

    @media screen and (max-width: 800px) {
        align-items: center;    
    }
`;

export const ItemsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 10px;
    
    @media screen and (max-width: 800px) {
        grid-template-columns: 1fr 1fr;
    }
`;