import { useSelector } from "react-redux"
import { selectUser } from "../AppSlice"
import { Navigate, Outlet } from "react-router-dom"

const ProtectedOutlet = () => {
    const user = useSelector(selectUser)
    return user ? <Outlet /> : <Navigate to="/login" replace />
}

export default ProtectedOutlet