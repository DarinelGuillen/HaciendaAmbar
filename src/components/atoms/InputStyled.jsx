import styled from 'styled-components'

const StyledInput = styled.input `

background-color: ${props => props.inputBorder === 1 ? "blue" : props.inputBorder === 2 ? "green" : props.inputBorder === 3 ? "black" : "white" };
border-radius:2em;
width: ${props => props.inputBorder === 1 ? "100%" : "50%"}
`
function InputStyled ({type,placeholder,inputBorder}){
    return(<StyledInput type={type} placeholder={placeholder} inputBorder={inputBorder}/>);
} 
export default InputStyled;