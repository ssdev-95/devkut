import styled from 'styled-components'
import colors from './colors.json'

const Main = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 1024px;
    max-width: 90vw;
    gap: 10px;
    margin-top: 2rem;

    div {
        padding: 8px;
        margin-bottom: 10px;
    }
    
    .profileArea {
        display: none;

        img {
            border-radius: 999px;
        }
    }

    .communityArea {
        display: block;
        flex: 1;
    }

    .contentArea {
        display: block;
        flex: 1;
    }

    .statsArea {
        display: flex;
        justify-content: flex-start;
        width: 100%;

        p {
            span {
            font-weight: 600;
            }
        }

        div {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;

            p {
                font-size: .9rem;
            }

            .icons {
                display: flex;
                flex: 1;
                flex-wrap: no-wrap;
            }

            svg {
                color: ${colors.text.primary};
                font-size: 1.5rem;
                line-height: 0;
                cursor: pointer;
            }
        }
    }

    @media(min-width: 860px) {
        flex-direction: row;
        
        .communityArea {
            flex: .4;
        }

        .contentArea {
            flex: .6;
        }

        .profileArea {
            display: block;
            flex: .25;
        }
    }
`

export { Main }