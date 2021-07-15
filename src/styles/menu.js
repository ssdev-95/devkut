import styled from 'styled-components'

const MenuWrapper = styled.div`
    height: 100%;
    width:100%;
    top: 0;
    left: 0;
    transition: left .2s ease;
    position: absolute;
    z-index: 999;
    animation: toggle-menu .25s ease;

    .hidden {
        display: none;
        animation: toggle-menu .25s reverse;
    }

    @media(min-width: 860px) {
        display: none;
    }
`

export { MenuWrapper }