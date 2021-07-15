
import styled from 'styled-components'
import colors from './colors.json'

const Nav = styled.nav`
    width: 100%;
    height: 10vh;
    background: #5C9ECF;

    @media(max-width: 860px) {
        .to-hide {
            display: none;
        }
    }
`

const Wrapper = styled.header`
    max-width: 95%;
    width: 1152px;
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

const Burger = styled.div`
    width: 40px;
    height: 40px !important;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media(min-width: 860px) {
        display: none !important;
    }
`

const Rect = styled.span`
    font-size: 0;
    line-height: 0;
    height: 16px;
    width: 100%;
    background: #f0f2f5;
    border-radius: 999px;
    transform-origin: 0 50%;
    transition: all .25s ease;

    &.active {
        &:first-child {
            transform: rotate(45deg) translate(7px, -1px);
        }

        &:nth-child(2) {
            opacity: 0;
        }

        &:last-child {
            transform: rotate(-45deg) translate(7px, 1px);
        }
    }
`

export { Nav, Wrapper, Burger, Rect }