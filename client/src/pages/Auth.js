import React, {useContext,useEffect, useState} from 'react';
import {Container, Form, Card, Button, Row} from "react-bootstrap";
import {NavLink, useLocation, useNavigate} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE, MAIN_ROUTE} from "../utils/consts";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import { login, registration } from '../http/userAPI';



const Auth = observer(() => {
    const {user} = useContext(Context)
    const location = useLocation()
    const navigate = useNavigate() 
    const isLogin = location.pathname === LOGIN_ROUTE
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailDirty, setEmailDirty] = useState(false)
    const [emailError, setEmailError] = useState('Поле не может быть пустым1')
    const [passwordError, setPasswordError] = useState('Поле не может быть пустым2')
    const [passwordDirty, setPasswordDirty] = useState(false)
    const [formValid, setFormValid] = useState(false)
    const [validError, setValidError] = useState('')
    
    useEffect(()=>{
        if(emailError || passwordError){
            setFormValid(false)
        }
        else{
            setFormValid(true)
        }
    },[emailError,passwordError])

    const emailHandler = (e) => {
        setEmail(e.target.value)
        setValidError('')
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if (re.test(String(email).toLowerCase())===false || String(email)===false){
            setEmailError('Некорректный Email' )
            if(!e.target.value){
                setEmailError('Поле не может быть пустым')
            } 
        }
        else if(!e.target.value){
            setEmailError('Поле не может быть пустым')
        } 
        else{
            setEmailError('')
            return true
        }

    }
    
    const passwordHandler = (e) => {
        setPassword(e.target.value)
        setValidError('')
        if (String(e.target.value).length<6 || String(e.target.value).length>15){
            setPasswordError('Пароль должен содержать от 6 до 15 символов')
            if(!e.target.value){
                setPasswordError('Поле не может быть пустым')
            }           
        }
        else{
            setPasswordError('')
            return true
        }
        
    }

    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'email' :
                setEmailDirty(true)
                break
            case 'password' :
                setPasswordDirty(true)
                break
            
        }
        
    }

    const click = async () => {
        try {
            let data;
            if (isLogin) {
                data = await login(email, password);
            } else {
                data = await registration(email, password);
            }
            user.setUser(data)
            user.setIsAuth(true)
            navigate(MAIN_ROUTE)
        } catch (e) {
            if(isLogin){
                e.message = 'Неверный логин и/или пароль'
            }
            else{
                e.message = 'Такой аккаунт уже существует'
            }
            setValidError(e.message)
        }

    }

    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{height: window.innerHeight - 54}}
        >
            <Card style={{width: 600}} className="p-5">
                <h2 className="m-auto">{isLogin ? 'Авторизация' : "Регистрация"}</h2>
                <Form className="d-flex flex-column">
                    <label>Email</label>
                    {(emailError && emailDirty) && <div style={{color:"red"}}>{emailError}</div>}
                    <Form.Control
                        name = 'email'
                        value={email}
                        onBlur={e=>blurHandler(e)}
                        onChange={e => emailHandler(e)}
                        
                    />
                    <br/>
                    <label>Пароль</label>
                    {(passwordError && passwordDirty) && <div style={{color:"red"}}>{passwordError}</div>}
                    <Form.Control
                        name = 'password'
                        value={password}
                        onBlur={e=>blurHandler(e)}
                        onChange={e => passwordHandler(e)}
                        type="password"
                    />
                    <Row className="d-flex justify-content-between mt-3 pl-3 pr-3">
                        {isLogin ?
                            <div>
                                Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйся!</NavLink>
                                
                            </div>
                            :
                            <div>
                                Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите!</NavLink>
                                
                            </div>                           
                        }
                        {(validError) && <div style={{color:"red"}}>{validError}</div>}
                        <Button               
                            variant={"outline-success"}
                            onClick={click}
                            disabled = {!formValid}
                        >
                            {isLogin ? 'Войти' : 'Регистрация'}
                            
                        </Button>
                    </Row>

                </Form>
            </Card>
        </Container>
    );
});

export default Auth;