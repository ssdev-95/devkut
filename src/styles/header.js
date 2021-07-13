
import styled from 'styled-components'
import colors from './colors.json'

const Nav = styled.nav`
    width: 100%;
    height: 10vh;
    background: #5C9ECF;
`

const Wrapper = styled.header`
    max-width: 95%;
    width: 1024px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    div {
        display: flex;
        align-items:center;
        height: 100%;
        gap: 1rem;

        span {
            color: ${colors.white};
            font-weight: 700;
        }

        button {
            color: ${colors.white};
            border: 0;
            background: rgba(0,0,0,0);
            cursor: pointer;
        }

        label {
            background: ${colors.element.secondary};
            display: flex;
            height: 60%;
            align-items: center;
            justify-content: center;
            border-radius: 999px;
            padding: 0 4px;
            
            button {
                padding: 2px;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
            }

            input {
                color: ${colors.gray.ternary};
                background: rgba(0,0,0,0);
                height: 95%;
                padding: 2px 4px;
                border: 0;
                outline: 0;
            }

            &:hover {
                border: 1px solid ${colors.element.primaary};
            }
        }

        img {
            height: 7vh;
            width: auto;
        }

        a {
            text-decoration: none;
            color: ${colors.white};
        }
    }
`

export { Nav, Wrapper }