import styled from "styled-components";

export const RegisterContainer = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1.1rem;

    padding: 2rem 1rem;
    border-radius: 4px;

    letter-spacing: .03rem;

    background-color: var(--grey-3);

    header {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1.1rem;

        h2 {
            color: var(--grey-0);
            font-weight: 700;
            font-size: .9rem;
        }

        span {
            color: var(--grey-1);
            font-weight: 400;
            font-size: .5rem;
        }
    }

    div {
        display: flex;
        flex-direction: column;
        gap: .3rem;

        position: relative;
    }

    label {
        color: var(--grey-0);
        font-size: .6rem;
    }

    input, select {
        height: 38.38px;
        padding: 0 .7rem;

        background-color: var(--grey-2);

        border: none;
        border-radius: 4px;

        transition: .2s ease;

        color: var(--grey-1);

        :focus {
            outline: none;
            border: 2px solid var(--color-primary);
        }
    }

    select {
        color: var(--grey-1);
    }

    button {
        background-color: var(--color-primary-negative);
        color: var(--grey-0);

        height: 38.38px;

        border-radius: 4px;
    }

    @media (min-width: 700px) {
        max-width: 370px;
        width: 100%;

        input, select {
            font-size: .65rem;
        }
    }
`

export const RegisterMainContainer = styled.main`
    display: flex;
    flex-direction: column;
    gap: 2rem;

    padding: 3.5rem .8rem;

    @media (min-width: 700px) {
        justify-content: center;
        align-items: center;

        div {
            h2 {
                font-size: 1.1rem;
            }

            span {
                font-size: .7rem;
            }
        }

        label {
            font-size: .7rem;
        }
    }
`

export const Error = styled.p`
    color: var(--negative);
    font-size: .5rem;
    letter-spacing: .04rem;
    transition: .4s ease;
`

export const PasswordEye = styled.span`
    color: var(--grey-1);

    position: absolute;
    top: 27px;
    right: 10px;

    cursor: pointer;
`