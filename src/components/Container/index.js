import styled from 'styled-components'
import colors from '@/styles/colors.json'

const Box = styled.div`
    background: ${colors.white};
    border-radius: 8px;
    height: fit-content;

    @media(max-width: 860px) {
        animation: toggle-menu .25s ease;
    }
`

function Container({ children }) {
    return (
        <Box>
            { children }
        </Box>
    )
}

export { Container }