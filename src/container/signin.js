import axios from '../axios';

export default function handleSignIn(payload){
    return axios.post('users',payload)
}