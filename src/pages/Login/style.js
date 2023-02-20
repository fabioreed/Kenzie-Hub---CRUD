import styled from "styled-components";

export const Formm = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.7rem;
    
    padding: 2.6rem 1rem;

    background-color: var(--grey-3);
    border-radius: 4px;

    h3 {
        color: var(--grey-0);

        display: flex;
        justify-content: center;
        align-items: center;
    }

    @media (min-width: 700px) {
        width: 100%;
        max-width: 369px;
    }
`

export const Container = styled.main`
    display: flex;
    flex-direction: column;
    gap: 2rem;

    padding: .7rem;

    h1 {
        color: var(--color-primary);
        font-size: 1.4rem;

        display: flex;
        justify-content: center;
        align-items: center;
    }

    @media (min-width: 700px) {
        justify-content: center;
        align-items: center;

        padding: 4.8rem 0;
    }
`