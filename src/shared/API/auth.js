import axios from "axios";


const authInstance = axios.create({
    baseURL:"https://connections-api.herokuapp.com"
})

const setToken = token => {
    if (token) {
        return authInstance.defaults.headers.authorization = `Bearer ${token}`
    }else authInstance.defaults.headers.authorization = ""
}

export const register = async (initData) => {
    const { data } = await authInstance.post("/users/signup", initData)
     setToken(data.token)
    return data
}

export const login = async (initData) => {
    const { data } = await authInstance.post("/users/login", initData)
     setToken(data.token)
    return data
}

export const logout = async () => {
    const { data } = await authInstance.post("/users/logout")
      setToken()
    return data
}

export const getCurrent = async (token) => {
    try {
        setToken(token)
        const { data } = await authInstance.get("/users/current")
        console.log(data)
    return data
    } catch (error) {
        setToken()
        throw error
        
    }
    
}
