import React from "react";
import { GrupoInput, LeyendError, IconValidation, Label, Input} from '../elements/Formulario';
import {faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

const InputComponent = ({state,changeState,type,label, placeholder, name, leyendError,expressionRegular, functionValidPass}) => {
  const onChange = (e) => {
    changeState({...state, field: e.target.value})
  }
  const validate = () =>{
    if(expressionRegular){
        if(expressionRegular.test(state.field)){
            changeState({...state, valid: 'true'});
        } else {
            changeState({...state, valid: 'false'});
        }
    }
    functionValidPass?functionValidPass():console.log('no');
  }

  return (
    <div>
      <Label htmlFor={name} valid={state.valid}>{label}</Label>
      <GrupoInput>
        <Input 
        type={type} 
        placeholder={placeholder} 
        id={name} 
        value={state.field}
        onChange={onChange}
        onKeyUp={validate}
        onBlur={validate}
        valid= {state.valid}
        />
        <IconValidation  
            valid={state.valid} 
            icon={state.valid === 'true' ? faCheckCircle : faTimesCircle} />
      </GrupoInput>
      <LeyendError valid={state.valid}>{leyendError}</LeyendError>
    </div>
  );
};
export default InputComponent;
