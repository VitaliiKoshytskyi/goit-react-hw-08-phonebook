import axios from "axios";


const authInstance = axios.create({
    baseURL:"https://connections-api.herokuapp.com"
})

export const register = async (initData) => {
    const { data } = await authInstance.post("/users/signup", initData)
    return data
}