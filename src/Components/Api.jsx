import axios from "axios"


const API_URL = 'https://66213cb93bf790e070b24bc2.mockapi.io/books/'
export const axiosService = axios.create({
    baseURL:API_URL,
    headers:{
        "Content-Type":"application/json"
    }})