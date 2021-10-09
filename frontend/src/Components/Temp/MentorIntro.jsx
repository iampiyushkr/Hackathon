import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import styles from "./temp.module.css";

export const MentorIntro = () => {
    const history = useHistory();
    const mentor = useSelector(state => state.mentor);
    const mentorLoggedIn = useSelector(state => state.mentorLoggedIn);
    if (mentorLoggedIn) {
        history.push("/mentordashboard");
    }
    return (
        <div className={styles.mentorHomeCont}>
            <div className={styles.bcm}>
                <div className={styles.imgDiv}>
                    <img src="https://c.neh.tw/thumb/f/720/d651c75422aa41d39947.jpg"/>
                </div>
                <div style={{display:"flex", marginBottom:"19px", padding:"19px 80px", flexDirection:"column", borderBottom:"#9ed1e0"}}>
                <h1>Become a Mentor</h1>
                <p style={{margin:"0", color:"grey"}}>Join us to make a difference in the lives our students</p>
            <div className={styles.optsDiv}>
                <button onClick={() => history.push("/mentorlogin")} className={styles.btnSpl}>Login</button>
                <button onClick={() => history.push("/mentorsignup")} className={styles.btnSpl}>Signup</button>
            </div>
                </div>
            </div>
        </div>
    )
}