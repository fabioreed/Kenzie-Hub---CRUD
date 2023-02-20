import styled from "styled-components";

export const HeaderHome = styled.header`
    display: flex;
    justify-content: space-between;

    padding: 1.5rem .8rem;

    border-bottom: 1px solid var(--grey-3);

    h1 {
        font-size: 1.4rem;
        color: var(--color-primary);
    }

    button {
        height: 32px;
        border-radius: 4px;

        padding: 0 1rem;

        background-color: var(--grey-3);
        color: var(--grey-0);
    }

    button:hover {
        background-color: var(--grey-2);
    }

    @media (min-width: 1017px) {
        padding: 1.5rem 20rem;
    }
`

export const SectionHome = styled.section`
    display: flex;
    flex-direction: column;
    gap: .6rem;

    padding: 2.1rem .7rem;

    border-bottom: 1px solid var(--grey-3);

    h2 {
        font-size: 1.1rem;
        color: var(--grey-0);
    }

    p {
        color: var(--grey-1);
        font-size: .7rem;
        font-weight: 600;
    }

    @media (min-width: 1005px) {
        padding: 1.5rem 20rem;

        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
`

export const SectionUser = styled.section`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1.5rem .8rem;

    h3, p {
        color: var(--grey-2);
    }

    @media (min-width: 1005px) {
        padding: 1.5rem 20rem;
    }
`

export const MainContainer = styled.main`
    /* padding: 1.5rem .8rem; */

`