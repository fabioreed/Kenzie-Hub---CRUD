import styled from "styled-components";

export const LogoAndBtnContainer = styled.div`
    display: flex;
    justify-content: space-between;

        h1 {
            color: var(--color-primary);
            font-size: 1.4rem;
        }

        button {
            border-radius: 4px;
            height: 32px;
            width: 80px;

            color: var(--grey-0);
            background-color: var(--grey-3);
        }

        button:hover {
            background-color: var(--grey-2);
        }

    @media (min-width: 700px) {
        gap: 10.5rem;
    }
`