import styled from 'styled-components'
import colors from '@/styles/colors.json'

const Box = styled.div`
    background: ${colors.white};
    border-radius: 8px;
`

function Container({ children }) {
    return (
        <Box>
            { children }
        </Box>
    )
}

export { Container }