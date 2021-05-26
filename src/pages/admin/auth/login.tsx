import React, { useContext, useState } from 'react'
import { TextField } from '../../../components/utils/forms/TextField'
import { useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import Button from '../../../components/utils/buttons/Button'
import { AuthContext } from '../../../store/auth/authContext'
import logoImg from './../../../assets/imgs/logo.png'

interface IFormInputs {
    email: string
    password: string
    remember: boolean
}

const schema = yup.object().shape({
    email: yup
        .string()
        .email('Debe ser un email valido*')
        .required('El email es requerido*'),
    password: yup
        .string()
        .required('El password es requerido*')
})

const Login: React.FC = () => {

    const { logIn } = useContext(AuthContext)
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    const { register, handleSubmit, watch, formState: { errors } } = useForm<IFormInputs>({
        resolver: yupResolver(schema)
    })

    const handleLogin = async ({ email, password }: IFormInputs): Promise<void> => {
        try {
            setLoading(true);
            setError(false);
            await logIn(email, password);
            history.push('/admin')
        } catch (err) {
            setError(true);
            console.log(err);
        }
        setLoading(false);
    }

    return (
        <div className="flex justify-center items-center h-screen bg-gray-200 px-6">
            <div className="p-6 max-w-sm w-full bg-white shadow-md rounded-md">
                <div className="flex justify-center items-center flex-col">
                    <img src={logoImg} alt="Logo" className="w-40" />
                </div>
                <form className="mt-4"
                    onSubmit={handleSubmit(handleLogin)}
                >
                    <TextField
                        id="email"
                        type="email"
                        label="Email:"
                        name="email"
                        value={watch('email', '')}
                        errorMessage={errors.email?.message}
                        register={register}
                    />
                    <TextField
                        id="password"
                        type="password"
                        label="Password:"
                        name="password"
                        value={watch('password', '')}
                        errorMessage={errors.password?.message}
                        register={register}
                    />
                    {
                        error && (<p className="text-center my-1 text-red-500">
                            Las credenciales no existen
                        </p>)
                    }
                    <div className="mt-6 outline-none">
                        <Button
                            type="submit"
                            text="Iniciar sesión"
                            isDisabled={loading}
                            isLoading={loading}
                        />
                    </div>
                </form>
            </div>
        </div >
    )
}

export default Login;