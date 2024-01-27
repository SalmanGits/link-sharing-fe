
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import snow from "../assets/snow2.png"
import { url } from './service'
import { RWebShare } from "react-web-share";

const Home = () => {
    // const [link, setLink] = useState()
    // const [message, setMessage] = useState("")
    const [user, setUser] = useState()
    const [link, setLink] = useState("")
    const navigate = useNavigate()
    const token = localStorage.getItem("token")
    const profile = async () => {
        try {
            const response = await axios.get(`${url}/profile`, {
                headers: {
                    Authorization: token
                }
            });
            console.log(response)
            setUser(response.data.user)
            setLink(`https://feelshare.netlify.com/name/${response.data.user.linkId}`)


        } catch (error) {
            console.error('Error creating link:', error);
        }
    }
    // const handleNavigate = () => {
    //     navigate("/responses")
    // }
    // const handleCopy = () => {
    //     const linkInput = document.getElementById('link-input');
    //     linkInput.select();
    //     document.execCommand('copy');
    //     setMessage("Link Copied")
    // };

    // const handleShare = () => {
    //     // Implement share functionality (e.g., using navigator.share if available)
    //     alert('Share feature will be implemented here!');
    // };
    // console.log(link)
    useEffect(() => {
        // if (message) {
        //     setTimeout(() => {
        //         setMessage("")
        //     }, 2000)
        // }
        profile()
    }, [])

    // const sharingLink = link ? link : link1
    // console.log(sharingLink)
    console.log(token)
    return (
        <>

            <div className='buttons' style={{ display: "flex", justifyContent: "space-between" }}>
                {<div className="card">

                    <div className="card-content">

                        {link && (
                            <div className="link-parent">
                                {/* <div className='input-parent'>
                                    <input id="link-input" type="text" value={link} readOnly />
                                </div> */}

                                <RWebShare
                                    data={{
                                        text: "",
                                        url: link,
                                        title: "Share Your Link",
                                    }}
                                    onClick={() => console.log("shared successfully!")}
                                >
                                    <button className='form-button'>Share Your Link 🔗</button>
                                </RWebShare>
                            </div>
                        )}
                    </div>

                </div>}
                {/* <button onClick={() => navigate("/login")} className='form-button'>Login</button> */}
                <button onClick={() => navigate("/responses")} className='form-button'>Responses</button>

            </div>
            <div className="parent">

                <div className="main-content">
                    {/* <p className="wonderland-p">Wonderland</p> */}
                    {token ? "" : <button onClick={() => navigate("/login")} className="button-home">Get Started</button>}
                    <img className='snow-image' src={snow} alt="snow" />
                </div>


            </div>
        </>
    )
}

export default Home