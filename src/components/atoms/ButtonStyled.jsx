import styled from 'styled-components'; //isc importacion
import Label from './Label';

const StyledButton = styled.button`
    width: 100%;
    background: ${props => props.Danger ? "red" : "green"};
    color: white;
`;

function ButtonStyled({ label, Danger, onClick }) {
    return (
        <StyledButton Danger={Danger} onClick={onClick}>
            {label}
        </StyledButton>
    )
}

export default ButtonStyled;
