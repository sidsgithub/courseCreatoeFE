import axios from '../axios';

export default function handleSignUp(payload){
    return axios.post('createusers',payload)
}