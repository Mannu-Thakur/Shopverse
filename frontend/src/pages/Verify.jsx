import { useCallback, useContext, useEffect } from 'react'
import { ShopContext } from '../context/shop-context'
import { useSearchParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from 'axios'

const Verify = () => {

    const { navigate, token, setCartItems, backendUrl } = useContext(ShopContext)
    const [searchParams] = useSearchParams()

    const success = searchParams.get('success')
    const orderId = searchParams.get('orderId')
    const session_id = searchParams.get('session_id')

    const verifyPayment = useCallback(async () => {

        try {

            if (!token) {
                return null
            }

            const response = await axios.post(
                backendUrl + '/api/order/verifyStripe',
                {
                    success,
                    orderId,
                    session_id
                },
                {
                    headers: { token }
                }
            )

            if (response.data.success) {
                setCartItems({})
                navigate('/orders')
            }
            else {
                navigate('/cart')
            }

        } catch (error) {

            console.log(error)
            toast.error(error.response?.data?.message || error.message)

        }

    }, [backendUrl, navigate, orderId, session_id, setCartItems, success, token])

    useEffect(() => {
        verifyPayment()
    }, [verifyPayment])

    return (
        <div>

        </div>
    )
}

export default Verify
