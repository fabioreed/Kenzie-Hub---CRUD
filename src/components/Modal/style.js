import styled from "styled-components";

export const BackgroundModal = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    
    position: fixed;
    top: 0;
    right: 0;
    
    background-color: rgba(0, 0, 0, 0.7);
`

export const ModalContainer = styled.form`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    /* background-color: var(--grey-2); */
    background-color: #00020f;
    background-image: linear-gradient(171deg, #00020f 0%, #02235a 15%, #6d18b0 72%);


    width: 90%;

    border-radius: 6px;
    
    div {
        padding: .6rem 1rem;

        h3 {
            margin-top: 1rem;
            color: var(--grey-0);
            font-size: .6rem;
        }

        span {
            margin-top: 1rem;
            cursor: pointer;
            font-size: .7rem;
            color: var(--grey-1);
        }
    }

    section {
        display: flex;
        flex-direction: column;

        /* background-color: var(--grey-3); */
        background-color: #00020f;
        background-image: linear-gradient(171deg, #00020f 0%, #02235a 81%, #6d18b0 100%);


        border-radius: 0  0  6px 6px;


        div {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: .8rem;

            label {
                font-size: .61rem;
                color: var(--grey-0);
            }

            input, select {
                width: 100%;
                padding: .5rem .8rem;

                background-color: var(--grey-2);

                border: none;
                border-radius: 4px;

                color: var(--grey-0);
            }

            button {
                width: 100%;
                height: 40px;
                padding: .5rem .8rem;
                background-color: var(--color-primary);
    
                border-radius: 4px;
                border: none;
    
                font-size: .7rem;
                font-weight: 400;

                :hover {
                    background-color: var(--color-primary-focus);
                }
            }
        }

    }

    @media (min-width: 370px) {
        max-width: 369px;
        width: 100%;

        button, input, select {
            height: 48px;
        }

        div {
            h3 {
                font-size: .8rem;
            }

            span {
                font-size: 1rem;

                transition: .4s ease;

                :hover {
                    color: var(--color-primary);
                }
            }
        }
    }
`

export const ButtonContainer = styled.aside`
    display: flex;
    gap: 2rem;
    width: 100%;

    button:nth-child(1n) {
        background-color: var(--color-primary-negative);

        :hover {
            background-color: var(--color-primary-focus);
        }
    }

    button:nth-child(2n) {
        background-color: var(--grey-1);

        :hover {
            background-color: var(--grey-2);
        }
    }

    @media (min-width: 370px) {
        button:nth-child(1n) {
            width: 204px;
        }

        button:nth-child(2n) {
            width: 98px;
        }
    }
`