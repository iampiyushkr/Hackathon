import { useDispatch } from "react-redux";
import { useHistory } from "react-router"
import { logout } from "../../Redux/action";

export const TempNav = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(logout());
        history.push("/studentlogin");
    }
    return (
        <div style={{display:"flex", backgroundColor:"cyan", height:"29px", justifyContent:"space-evenly", marginBottom:"159px"}}>
            <div style={{ cursor: "pointer" }} onClick={() => history.push("/studentlogin")}>Student Login</div>
            <div style={{ cursor: "pointer" }} onClick={() => history.push("/studentsignup")}>Student Signup</div>
            <div style={{ cursor: "pointer" }} onClick={() => history.push("/mentorlogin")}>Mentor Login</div>
            <div style={{ cursor: "pointer" }} onClick={() => history.push("/mentorsignup")}>Mentor Signup</div>
            <div style={{ cursor: "pointer" }} onClick={handleLogout}>Logout</div>
        </div>
    )
}