
import RegisterForm from "components/RegisterForm/RegisterForm"

// import { useDispatch } from "react-redux"
// import { register } from "redux/auth/auth-operations"


const RegisterPage = () => {
    // const dispatch = useDispatch()

    // const onRegister = (data) => {
    //     dispatch(register(data))
    // }
    

    return (
        <div>
            <h1>Register Page</h1>
            <RegisterForm  />
        </div>
    )
}

export default RegisterPage
// onSubmit={ onRegister}