import styled from "styled-components";

export const StyledPageNotFound = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    h1 {
        color: var(--grey-1);
        font-size: 6rem;
    }

    p {
        color: var(--grey-2)
    }

    img {
        width: 280px;
        border: 4px solid var(--grey-0);
        border-radius: 8px;
    }

    @media (min-width: 700px) {
        img {
            width: 480px;
        }
    }
`