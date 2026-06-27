import { useContext, useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { ShopContext } from '../context/shop-context'

const Login = () => {

    const [currentState, setCurrentState] = useState('Login');
    const { setToken, backendUrl } = useContext(ShopContext)

    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

    const onSubmitHandler = async (event) => {

        event.preventDefault();

        try {

            if (currentState === 'Sign Up') {

                const response = await axios.post(
                    backendUrl + '/api/user/register',
                    { name, email, password }
                )

                if (response.data.success) {

                    setToken(response.data.token)
                    localStorage.setItem('token', response.data.token)

                } else {

                    toast.error(response.data.message)

                }

            } else {

                const response = await axios.post(
                    backendUrl + '/api/user/login',
                    { email, password }
                )

                if (response.data.success) {

                    setToken(response.data.token)
                    localStorage.setItem('token', response.data.token)

                } else {

                    toast.error(response.data.message)

                }

            }

        } catch (error) {

            console.log(error)
            toast.error(error.response?.data?.message || error.message)

        }

    }

    return (
        <div className='flex items-center justify-center min-h-[70vh] py-10'>
            <form
                onSubmit={onSubmitHandler}
                className='az-panel flex flex-col items-center w-full max-w-[420px] p-8 sm:p-10 bg-white'
            >

                <p className='prata-regular text-2xl tracking-[0.16em] text-gray-950 uppercase'>
                    CHASEMART
                </p>

                <div className='inline-flex items-center gap-2 mb-8 mt-6'>
                  <h2 className='prata-regular text-xl text-gray-900'>{currentState}</h2>
                </div>

                <div className='w-full flex flex-col gap-4'>
                    {
                        currentState === 'Login'
                            ? ''
                            : (
                                <input
                                    onChange={(e) => setName(e.target.value)}
                                    value={name}
                                    type="text"
                                    className='az-input'
                                    placeholder='Name'
                                    required
                                />
                            )
                    }

                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        type="email"
                        className='az-input'
                        placeholder='Email'
                        required
                    />

                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        type="password"
                        className='az-input'
                        placeholder='Password'
                        required
                    />
                </div>

                <div className='w-full flex justify-between text-xs text-gray-500 mt-3 font-medium'>

                    <p className='cursor-pointer hover:text-black transition-colors'>Forgot your password?</p>

                    {
                        currentState === 'Login'
                            ? (
                                <p
                                    onClick={() => setCurrentState('Sign Up')}
                                    className='cursor-pointer hover:text-black transition-colors underline underline-offset-4'
                                >
                                    Create account
                                </p>
                            )
                            : (
                                <p
                                    onClick={() => setCurrentState('Login')}
                                    className='cursor-pointer hover:text-black transition-colors underline underline-offset-4'
                                >
                                    Login Here
                                </p>
                            )
                    }

                </div>

                <button className='az-primary-button w-full py-3.5 mt-8 tracking-wider text-xs font-semibold uppercase'>
                    {currentState === 'Login' ? 'Sign In' : 'Sign Up'}
                </button>

            </form>
        </div>
    )
}

export default Login
