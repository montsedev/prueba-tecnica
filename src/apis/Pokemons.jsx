import axios  from 'axios'

export function getDitto(){
    return axios.get(`${import.meta.env.VITE_API_POKEMON}/pokemon/ditto`)
}