import styled, {css} from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const colors = {
  border: "#0075FF",
  error: "#F66060",
  success: "#1ed12d",
  white: "#fefefe",
};

const Formulario = styled.form`
  display: grid;
  grid-template-column: 1fr 1fr;
  gap: 20px;
  @media (max-width: 800px) {
    grid-template-column: 1fr;
  }
`;

const Label = styled.label`
  display: inline-block;
  font-weight: 700;
  padding: 10px;
  min-height: 40px;
  cursor: pointer;
  ${props => props.valid === 'false' && css`
    color: ${colors.error}
  ` }
`;

const GrupoInput = styled.div`
  position: relative;
  z-index: 90;
  
`;
const Input = styled.input`
    width: 100%;
    background: #fff;
    border-radius: 3px;
    height: 40px;
    line-height : 40px;
    padding: 0 40px 0 10px;
    transition: .3s ease all;
    border 3px solid trasparent;

    &:focus{
        border: 3px solid ${colors.border};
        outline: none;
        box-shadow: 3px 0 3px rgba(163, 163, 163, 0.4);
    }
    ${props => props.valid === 'true' && css`
        border: 3px solid trasparent !important;
    ` }
    ${props => props.valid === 'false' && css`
        border: 3px solid ${colors.error} !important;
    ` }
`;
const LeyendError = styled.p`
  font-size: 12px;
  margin-bottom: 0;
  color: ${colors.error};
  display: none;
    ${props => props.valid === 'true' && css`
        display: none;
        color: ${colors.error}
    ` }
    ${props => props.valid === 'false' && css`
        display: block;
        color: ${colors.error}
    ` }
`;
const IconValidation = styled(FontAwesomeIcon)`
  position: absolute;
  right: 10px;
  bottom: 14px;
  z-index: 100;
  font-size: 16px;
  opacity: 0;
  ${props => props.valid === 'false' && css`
        opacity: 1;
        color: ${colors.error}
  ` }
  ${props => props.valid === 'true' && css`
        opacity: 1;
        color: ${colors.success}
  ` }
`;
const ContainerTerms = styled.div`
  grid-column: span 2;
  input {
    margin-right: 10px;
  }
    @media (max-width: 800px) {
  grid-column: span 1;
  }
`;
const ContainerCenterButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-column: span 2;
  @media (max-width: 800px){
		grid-column: span 1;
	}
`;

const Button = styled.button`
  height: 40px;
  line-height: 40px;
  width: 30%;
  color: ${colors.white};
  background: #000;
  font-weight: bold;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  transition: 0.1s ease all;

  &:hover {
    box-shadow: 3px 0 30px rgba(163, 163, 163, 1);
  }
  @media (max-width: 800px){
		grid-column: span 1;
	}
`;

const MessageSuccess = styled.p`
  font-size: 14px;
  color: ${colors.success};
`;
const MessageError = styled.div`
  height: 40px;
  line-height: 40px;
  background: ${colors.error};
  padding: 0 15px;
  border-radius: 3px;
  grid-column: span 2;

  p {
    margin: 0;
  }
  b {  
    margin-left: 10px;
  }

`;


export {
  Formulario,
  Label,
  GrupoInput,
  Input,
  LeyendError,
  IconValidation,
  ContainerTerms,
  ContainerCenterButton,
  Button,
  MessageSuccess,
  MessageError,
};
