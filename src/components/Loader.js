import styled, { keyframes } from 'styled-components'

const animation = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`

const LoaderWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;

`

const LoaderInner = styled.div`
    border-radius:50%;
    width:80px;
    height:80px;
    border: 10px solid ${props => props.theme.gray};
    border-top: 10px solid ${props => props.theme.blue};
    animation: ${animation} 2s linear infinite;
`

const Loader = () => <LoaderWrapper><LoaderInner></LoaderInner></LoaderWrapper>

export default Loader;