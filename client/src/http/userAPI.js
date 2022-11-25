import {$authHost, $host} from "./index";
import jwt_decode from "jwt-decode";
import axios from "axios";



export const login = async (email, password) => {
    const {data} = await axios.post('http://localhost:5000/auth/login', {email, password})
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const registration = async (email, password) => {
    const {data} = await axios.post('http://localhost:5000/auth/reg', {email, password})
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}