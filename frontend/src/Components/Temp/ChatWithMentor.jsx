import { useSelector } from "react-redux"

export const ChatWithMentor = () => {
    const currentMentor = useSelector(state => state.currentMentor);
    const student = useSelector(state => state.student);
    return (
        <div>
            <h1>{student?.name}</h1>
            <h1>{currentMentor?.name}</h1>
        </div>
    )
}