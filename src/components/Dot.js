import styled from 'styled-components'

const DotWrapper = styled.span`
    font-weight: 800 !important;
    background: ${props => props.theme.defaultGradient};
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
`

const Dot = () => <DotWrapper>.</DotWrapper>

export default Dot