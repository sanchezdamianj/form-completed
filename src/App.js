import React, {useState} from 'react';
import { Formulario, Label,ContainerTerms, ContainerCenterButton,Button, MessageSuccess,
  MessageError } from './elements/Formulario';
import {  faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Input from './components/input'

const App = () =>{
  const [user, changeUser] = useState({field: '', valid: null});
  const [name, changeName] = useState({field: '', valid: null});
  const [password, changePassword] = useState({field: '', valid: null});
  const [password2, changePassword2] = useState({field: '', valid: null});
  const [cel, changeCel] = useState({field: '', valid: null});
  const [email, changeEmail] = useState({field: '', valid: null});
  const [terms, changeTerms] = useState(false);
  const [formValid, changeForm] = useState(null);
 
 const expresions = {
	user: /^[a-zA-Z0-9_-]{4,16}$/, // Letters, number, score,underscore
	name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letters & spaces, tildes.
	password: /^.{4,12}$/, // 4 a 12 digits.
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	cel: /^\d{7,14}$/ // 7 to 14 numbers.
  }
  const validPassword2 = () => {
    if(password.field.length > 0){
     (password.field !== password2.field)? 
     changePassword2((prevState)=>{
      return {...prevState, valid: 'false'}
     })
     :changePassword2((prevState)=>{
      return {...prevState, valid: 'true'}
      })
    }
  }

  const onChangeTerms = (e) => {
    changeTerms(e.target.checked);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    if(
      user.valid === 'true' && 
      name.valid === 'true' && 
      password.valid === 'true' &&
      password2.valid === 'true' &&
      cel.valid === 'true' &&
      email.valid === 'true' &&
      terms){
        changeForm(true);
        changeUser({field: '', valid: null});
        changeName({field: '', valid: null});
        changePassword({field: '', valid: null});
        changePassword2({field: '', valid: 'null'});
        changeCel({field: '', valid: null}) ;
        changeEmail({field: '', valid: null});
    }else {
        changeForm(false)
    }
  }
  return (
    <main>
      <Formulario action="" onSubmit={onSubmit}>
        <Input
          state={user}
          changeState={changeUser}
          type="text"
          label="User"
          placeholder="Username"
          name="username"
          leyendError= 'The username must contain minimun 6 characters'
          expressionRegular = {expresions.user}
         />
        <Input
          state={name}
          changeState={changeName}
          type="text"
          label="Name"
          placeholder="Enter your name"
          name="name"
          leyendError= 'The name must not be empty, and contains letters and spaces'
          expressionRegular = {expresions.name}
         />
        <Input
          state={password}
          changeState={changePassword}
          type="password"
          label="Password"
          placeholder="Enter your Password"
          name="password"
          leyendError= 'The name must contain minimun 4 to 12 characters'
          expressionRegular = {expresions.password}
         />
        <Input
          state={password2}
          changeState={changePassword2}
          type="password"
          label="Repeat your Password"
          placeholder="Enter your Password again"
          name="password2"
          leyendError= 'The password must be equal'
          functionValidPass= {validPassword2}
         />
        <Input
          state={cel}
          changeState={changeCel}
          type="cellphone"
          label="Cellphone"
          placeholder="Enter your cellphone"
          name="cel"
          leyendError= 'The cel must be completed with minimun 6 digits'
          expressionRegular = {expresions.cel}
         />
        <Input
          state={email}
          changeState={changeEmail}
          type="email"
          label="Enter your email"
          placeholder="email@email.com"
          name="email"
          leyendError= 'The email has invalid format'
          expressionRegular = {expresions.email}
         />


      <ContainerTerms>
        <Label>
          <input 
            type="checkbox" 
            name="terms" 
            id="terms" 
            checked={terms} 
            onChange={onChangeTerms}
            />
          Acepto los terminos y condiciones
        </Label>
      </ContainerTerms>

      {formValid === false && <MessageError>
        <FontAwesomeIcon icon={faExclamationTriangle}/>
        <b> Error: </b> Please, complete the form correctly.
      </MessageError>}

      <ContainerCenterButton>
        <Button type="submit" >Send</Button>
        {formValid === true && <MessageSuccess>Form Sent Succesfully</MessageSuccess>}
      </ContainerCenterButton>
      </Formulario>
    </main> 
  )
}

export default App;