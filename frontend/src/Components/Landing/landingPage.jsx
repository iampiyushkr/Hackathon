import React from "react"
import styles from "./landing.module.css"
import { Link } from "react-router-dom"

function Landing() {
    return <>
        <div className={ styles.maindiv}>
            <h1 className={styles.maindivh1}>"KNOWLEDGE IS LIKE A GARDEN, IF IT <br />IS NOT CULTIVATED, IT CANNOT BE HARVESTED."</h1>
            <h3 className={styles.maindivh3}>--African Proverb</h3>
        </div>
        <div className={styles.maindiv2}>
            <h2 className={styles.maindiv2h3}>LOGIN AS</h2>
            <div className={styles.maindiv2div1}>
                <div className={styles.landingstudentdiv}>
                    <div className={styles.landingstudentdiv1}>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Student_%28example%29.svg/1024px-Student_%28example%29.svg.png" alt="studentprofile" />
                    </div>
                   <Link to="/studentlogin"><button className={styles.landingstudentbutton}>Student</button></Link>
                </div>
                <div className={styles.landingmentordiv}>
                    <div className={styles.landingstudentdiv2}>
                        <img src="https://cdn3.iconfinder.com/data/icons/mentor/512/mentor-adviser-counselor-consultant-19-512.png" alt="studentprofile"/>
                    </div>
                    <Link to="/mentorlogin"><button className={styles.landingstudentbutton}>Mentor</button></Link>

                </div>
            </div>
        </div>
        <br/>
        <br/>
        <br/>
    </>
}

export default Landing