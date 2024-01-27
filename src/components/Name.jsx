
import ProgressBar from "@ramonak/react-progress-bar";
import { useNavigate, useParams } from "react-router-dom";
const Name = () => {
    const {id} = useParams()
    const navigate = useNavigate()
    return (
        <div className="name-parent">
            <div className="progress-parent">

            </div>
            <ProgressBar
                completed={50}
                className="wrapper"
                barContainerClassName="container"
                completedClassName="barCompleted"
                customLabel=" "
            />

            {/* <ProgressForm/> */}
            <div className="name-content">
                <p>{`Whats's Your`}</p>
                <p className="p">Name?</p>
                <div className="input-container">
                    <input type="text" placeholder="Enter" />
                </div>


                <button onClick={()=>navigate(`/form/${id}`)} className="button-home1">Next</button>
            </div>
        </div>
    )
}

export default Name