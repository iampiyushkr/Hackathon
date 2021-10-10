import { StylesContext } from "@material-ui/styles"
import { useHistory } from "react-router"
import styles from "./temp.module.css"

export const StudentHome = () => {
    const history = useHistory();
    return (
        <div style={{maxHeight:"100vh"}} className={styles.sintroCont}>
        <div className={styles.coverImageDiv}  style={{width:"100%", height:"100vh", padding:"80px"}}>
            <img className={styles.coverImage} style={{width:"100%"}} src="/cover.png" alt="cover"/>
        </div>
         <div style={{maxHeight:"100vh"}} className={styles.studentHomeCont}>
             <div style={{width:"50%", maxHeight:"100vh", marginLeft:"10px", paddingLeft:"80px"}} className={styles.bcm}>
                 {/* <div className={styles.imgDiv}>
                     <img src="https://c.neh.tw/thumb/f/720/d651c75422aa41d39947.jpg"/>
                 </div> */}
                 <div style={{display:"flex", maxHeight:"100vh", marginBottom:"19px", padding:"19px 90px", flexDirection:"column", borderBottom:"#9ed1e0"}}>
                 <h1 style={{marginLeft:"50px"}}>Looking for experts?</h1>
                 <p style={{marginLeft:"30px", color:"grey"}}>Get professional help from working professionals.</p>
             <div style={{maxHeight:"100vh"}} className={styles.optsDiv}>
                 <button onClick={() => history.push("/studentlogin")} className={styles.btnSpl}>Login</button>
                 <button onClick={() => history.push("/studentsignup")} className={styles.btnSpl}>Signup</button>
             </div>
                 </div>
             </div>
         </div>
            </div>
    )
}