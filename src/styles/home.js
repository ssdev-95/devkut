import styled from 'styled-components'
import colors from './colors.json'

const Main = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 1152px;
    max-width: 90vw;
    gap: 10px;
    margin-top: 2rem;
    position: relative;

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

        section {
            display: block;
            flex: 1;

            h3 {
                width: 100%;
                
                span {
                    color: ${colors.text.primary};
                }
            }
        }
    }

    .contentArea {
        display: block;
        flex: 1;
    }

    .statsArea {
        display: flex;
        justify-content: flex-start;
        width: 100%;
        flex-wrap: wrap;
        gap: 2px;
        height: fit-content;
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

const Stat = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    p {
        font-size: .9rem;
    }
`

const StatsWrapper = styled.div`
    display: flex;
    width: fit-content;
    height: fit-content;
    align-items: center;
    margin-left: -8px;
    gap: 3px;

    span {
        color: ${colors.text.primary};
        font-size: .9rem;
    }

    svg {
        color: ${colors.text.primary};
        font-size: .9rem;

        &.active {
            color: ${colors.text.tertiary};
        }
    }
`

const MHeader = styled.div`
    display: flex;
    flex-direction: column;
    gap: .95rem;

    h1 {
        font-weight: 400;
    }

    p {
        color: ${colors.gray.quaternary};
        span {
            font-weight: 600;
            color: ${colors.gray.tertiary};
        }
    }
`

const BoxContainer = styled.div`
    display: grid;
    padding: 4px;
    gap: 2px;
    grid-template-columns: repeat(3, 3fr);
    grid-template-rows: repeat(3, 3fr);
    grid-template-areas: "boxT1 boxT2 boxT3" "boxM1 boxM2 boxM3" "boxB1 boxB2 boxB3";
`

const Box = styled.div`
    position: relative;
    width: 100%;
    overflow: hidden;

    img {
        width: 90px;
        height: auto;
        border-radius: 8px;
    }

    span {
        position: absolute;
        top: 1.5rem;
        left: 1rem;
        color: ${colors.gray.ternary};
        font-size: .8rem;
        font-weight: 700;
        text-overflow: ellipsis;
    }
`

const Actions = styled.div`
    width :100%;

    h3 {
        font-weight: 500;
        height: 2rem;
    }

    div {
        display: flex;
        width: 100%;
        gap: 4px;

        button {
            flex: 1;
            background-color: ${colors.background.primary};
            padding: 6px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 8px;
            border: 0;

            span {
                color: ${colors.text.primary};
            }

            &:hover {
                background: ${colors.text.primary};

                span {
                    color: ${colors.gray.ternary};
                }
            }
        }
    }

    form input {
        width: 100%;
        height: 2rem;
        border-radius: 999px;
        border: 0;
        background:#f0f0f0;
        color: ${colors.gray.tertiary};
        padding: 0 1rem;
    }
`

export { Main, Stat, StatsWrapper, MHeader, BoxContainer, Box, Actions }