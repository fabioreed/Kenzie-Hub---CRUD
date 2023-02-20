import styled from "styled-components";

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1.8rem;

    section {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        label {
            color: var(--grey-0);
            font-weight: 400;
            font-size: .5rem;
        }

        input {
            height: 38.5px;
            width: 100%;
            padding: 0 .8rem;

            border: none;
            outline: none;
            border-radius: 4px;

            color: var(--grey-1);
            background-color: var(--grey-2);

            transition: .2s ease;

            :focus {
               border: 2px solid var(--color-primary)
            }
        }

        button {
            height: 38.5px;
            border-radius: 4px;
            background-color: var(--color-primary);
            color: var(--grey-0);
        } 

        button:hover { 
            background-color: var(--color-primary-focus);
        }
    }

    span {
            font-size: .5rem;
            font-weight: 600;
            color: var(--grey-1);

            display: flex;
            justify-content: center;
            align-items: center;
    }

    button {
        height: 38.5px;
        border-radius: 4px;

        background-color: var(--grey-1);
        color: var(--grey-0);

        text-decoration: none;
    }
    
    button:hover {
        background-color: var(--grey-2);
    }

    @media (min-width: 700px) {
        div > label {
            font-size: .7rem;
        }
        span {
            font-size: .7rem;
        }
    }  
`

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: .4rem;

    position: relative;
`

export const Error = styled.p`
    color: var(--negative);
    font-size: .5rem;
    letter-spacing: .04rem;
    transition: .4s ease;
`

export const PasswordLoginEye = styled.p`
    position: absolute;
    top: 27px;
    right: 10px;

    cursor: pointer;

    color: var(--grey-1);
`