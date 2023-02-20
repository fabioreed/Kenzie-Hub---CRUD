import styled from "styled-components";

export const TechSection = styled.section`
    div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        
        margin-bottom: 1.1rem;

        button {
            font-size: .8rem;
            font-weight: 700;

            padding: .6rem;
            border-radius: 4px;

            background-color: var(--grey-3);
            color: var(--grey-0);

            :hover {
                background-color: var(--grey-2);
            }
        }
    }
`
export const TechList = styled.ul`
    border: 1px solid var(--grey-2);
    border-radius: 4px;
    background-color: var(--grey-3);

    padding: 1.3rem .5rem;

    display: flex;
    flex-direction: column;
    gap: 1rem;

    li {
        display: flex;
        justify-content: space-between;

        border-radius: 4px;

        padding: .75rem;

        background-color: var(--grey-4);

        transition: .2s ease;
        cursor: pointer;

       :hover {
            background-color: var(--grey-2);
        }

        h4 {
            color: var(--grey-0);
            font-size: .8rem;
        }

        span {
            color: var(--grey-1);
            font-size: .8rem;
        }
    }
`