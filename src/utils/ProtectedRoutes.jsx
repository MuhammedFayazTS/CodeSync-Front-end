import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { verifyTokenAPI } from "../services/allAPI"

const ProtectedRoute = ({ children }) => {
    const navigate = useNavigate()
    const token = sessionStorage.getItem('token')

    const verifyToken = async (token) => {
        try {
            const header = {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
            const response = await verifyTokenAPI(header)
            if (response.status === 200) {
                console.log(response.data)
                return null;
            }
                if (response.response.status === 401) {
                alert("Authentication failed")
                navigate('/sign-in')
                return null;
            }
        } catch (error) {
            console.log(error)
            navigate('/sign-in')
        }
    }

    useEffect(() => {
        // if no token in session storage redirect to login page
        if (!token) {
            navigate('/sign-in')
            return null;
        }
        // validate token
        verifyToken(token)

    }, [token])


    return (
        <>{children}</>
    )
}

export default ProtectedRoute