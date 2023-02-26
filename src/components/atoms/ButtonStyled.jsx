import styled from 'styled-components';

const StyledButton = styled.button`
  position: relative;
  margin: 0;
  padding: 17px 35px;
  outline: none;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  text-transform: uppercase;

  background-color: ${props => props.Danger ? "red" : "green"};
  border: ${props => props.Danger ? 'red' : 'green'};
  border-radius: 10px;
  color: #ffffff;
  font-weight: 400;
  font-family: inherit;
  z-index: 0;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.02, 0.01, 0.47, 1);

  &:hover {
    animation: rotate624 0.7s ease-in-out both;
  }

  &:hover span {
    animation: storm1261 0.7s ease-in-out both;
    animation-delay: 0.06s;
  }

  &:after {
  background: ${props => props.Danger ? "green" : "red"};
    content: "";
    height: 155px;
    left: -75px;
    opacity: 0.4;
    position: absolute;
    top: -50px;
    transform: rotate(35deg);
    transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
    width: 50px;
    z-index: -10;
  }

  &:hover:after {
    left: 120%;
    transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
  }


button span {
  color: #164ca7;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.7px;
}

@keyframes rotate624 {
  0% {
    transform: rotate(0deg) translate3d(0, 0, 0);
  }

  25% {
    transform: rotate(3deg) translate3d(0, 0, 0);
  }

  50% {
    transform: rotate(-3deg) translate3d(0, 0, 0);
  }

  75% {
    transform: rotate(1deg) translate3d(0, 0, 0);
  }

  100% {
    transform: rotate(0deg) translate3d(0, 0, 0);
  }
}

@keyframes storm1261 {
  0% {
    transform: translate3d(0, 0, 0) translateZ(0);
  }

  25% {
    transform: translate3d(4px, 0, 0) translateZ(0);
  }

  50% {
    transform: translate3d(-3px, 0, 0) translateZ(0);
  }

  75% {
    transform: translate3d(2px, 0, 0) translateZ(0);
  }

  100% {
    transform: translate3d(0, 0, 0) translateZ(0);
  }
}`

function ButtonStyled({ label, Danger, onClick }) {
  return (
    <StyledButton Danger={Danger} onClick={onClick}>
      <span>{label}</span>
    </StyledButton>
  );
}

export default ButtonStyled;

// Button shaking
// height: 3em;
//   width: 8em;
//   border: none;
//   border-radius: 10em;
//   background: #016DD9;
//   font-size: 17px;
//   color: #ffffff;
//   font-family: inherit;
//   font-weight: 500;

//   &:hover {
//     animation: shake3856 0.1s linear infinite both;
//   }

//   @keyframes shake3856 {
//     0% {
//       transform: translate(0);
//     }

//     20% {
//       transform: translate(-2px, 2px);
//     }

//     40% {
//       transform: translate(-2px, -2px);
//     }

//     60% {
//       transform: translate(2px, 2px);
//     }

//     80% {
//       transform: translate(2px, -2px);
//     }

//     100% {
//       transform: translate(0);
//     }
//   }
