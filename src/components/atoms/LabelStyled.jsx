import styled from 'styled-components'; //isc importacion

const StyledLabel =styled.label`
        font-weight: bold;
        color: ${props => props.danger ? "red" : "black"};
`;
function LabelStyled({ label, danger }) {
    return (
      <StyledLabel danger={danger}>{label}</StyledLabel>
    );
  }  
export default LabelStyled;
