import styled from 'styled-components'
import { Col } from "react-bootstrap"

const MainCol = styled(Col)`
    color: white;
    text-align: center;
    min-height: 50vh;
    border-bottom: 3px solid;
    @media (min-width: 992px){
        border-bottom: 0px solid;
        border-right: 3px solid;
    }
`
export default MainCol