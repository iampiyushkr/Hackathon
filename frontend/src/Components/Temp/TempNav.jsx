import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router"
import { logout } from "../../Redux/action";
import styles from "./temp.module.css";

export const TempNav = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    const student = useSelector(state => state.student);
    const studentLoggedIn = useSelector(state => state.studentLoggedIn);
    const mentorLoggedIn = useSelector(state => state.mentorLoggedIn);

    const history = useHistory();
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(logout());
        history.push("/studentlogin");
    }
    return (
        <div className={styles.nav} style={{ display: "flex", alignItems: "center", backgroundColor: "rgb(3, 125, 150);", height: "89px", justifyContent: "space-evenly" }}>
            <div style={{height:"85%", width:"300px"}}><img onClick={() => history.push("/")} style={{height:"90%", width:"70px", cursor:"pointer"}} src="/hawkEyeLogo.png" alt="hawk"/></div>
            <div style={{ cursor: "pointer" }} onClick={() => history.push("/blogs")}>Blog</div>
            <div style={{ cursor: "pointer" }} onClick={() => history.push("/studentlogin")}>Student Login</div>
            <div style={{ cursor: "pointer" }} onClick={() => history.push("/studentsignup")}>Student Signup</div>
            <div style={{ cursor: "pointer" }} onClick={() => history.push("/mentorlogin")}>Mentor Login</div>
            <div style={{ cursor: "pointer" }} onClick={() => history.push("/mentorsignup")}>Mentor Signup</div>
            <div style={{ cursor: "pointer" }} onClick={() => history.push("/mentorintro")}>Mentor Intro</div>
            {(studentLoggedIn || mentorLoggedIn) ? <div style={{ cursor: "pointer" }} onClick={handleLogout}>Logout</div> : null}
        </div>
    )
}