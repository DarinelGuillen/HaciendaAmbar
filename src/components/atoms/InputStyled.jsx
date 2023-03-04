import styled from 'styled-components'

const StyledInput = styled.input `

background-color: red;
border-radius:0em;
width: ${props => props.typeStyle === 1 ? "100%" : "50%"}

`
function InputStyled ({type,placeholder,typeStyle,value}){
    return(
    <StyledInput 
    value={value}
    type={type} placeholder={placeholder} typeStyle={typeStyle}/>);
} 
export default InputStyled;