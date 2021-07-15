import styled from 'styled-components'
import colors from './colors.json'

const Avatar = styled.img`
    border-radius: 999px;
    width: 80%;
    margin: 1rem 10%;
`

const User = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
    margin-top: 8px;

    &::before {
        content: '';
        width: 100%;
        height: 1px;
        background: ${colors.gray.secondary};
    }

    h3 {
        font-weight: 600;
        color: ${colors.text.primary};
        font-size: 1.58rem;
        margin-bottom: 4px;
    }

    p {
        font-weight: 400;
        color: ${colors.gray.tertiary};
        font-size: .95rem;
    }
`

const UserInfos = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    line-height: 0;

    h3 {
        color: ${colors.gray.secondary};
    }

    &::before {
        content: '';
        width: 100%;
        height: 1px;
        background: ${colors.gray.secondary};
        margin-bottom: 2.25rem;
    }
`

const Wrapper = styled.div`
    display: flex;
    width: fit-content;
    height: fit-content;
    align-items: center;
    margin-left: -12px;
    margin-top: -16px;
    cursor: pointer;
    gap: 1rem;

    &.reset {
        margin-top: 10px;
    }

    span {
        color: ${colors.text.primary};
    }

    svg {
        color: ${colors.text.tertiary};
    }
`

export { Avatar, User, UserInfos, Wrapper }