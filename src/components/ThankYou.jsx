import { useNavigate } from "react-router-dom"


const ThankYou = () => {
    const navigate = useNavigate()
    return (
        <div className="parent-thank">


            <div className="flex items-center justify-center br">
                <div className="p-1 rounded">
                    <div className="flex flex-col items-center p-4 space-y-2 thank br">
                        <svg xmlns="http://www.w3.org/2000/svg" className="text-green-600 w-28 h-28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <h1 className="text-4xl font-bold font-extrabold">Thank You !</h1>
                        <p>Your response has been captured</p>
                        <a
                        >


                        </a>
                    </div>
                </div>
            </div>
            <button onClick={()=>navigate("/")} className="form-button thankbtn">
                {/* <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 mr-2" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                            </svg> */}
                Home
            </button>
        </div>
    )
}

export default ThankYou