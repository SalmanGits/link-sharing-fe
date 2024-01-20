
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import snow from "../assets/snow2.png"
import { url } from './service'
import { RWebShare } from "react-web-share";

const Home = () => {
    const [link, setLink] = useState()
    const [message, setMessage] = useState("")
    const navigate = useNavigate()
    const link1 = localStorage.getItem("link")
    const handleClick = async () => {
        try {
            const response = await axios.post(`${url}/create-link`);
            setLink(`https://feelshare.netlify.app/form/${response.data.linkId}`);
            localStorage.setItem("link", `https://feelshare.netlify.app/form/${response.data.linkId}`);
        } catch (error) {
            console.error('Error creating link:', error);
        }
    }
    const handleNavigate = () => {
        navigate("/responses")
    }
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
    console.log(link)
    useEffect(() => {
        if (message) {
            setTimeout(() => {
                setMessage("")
            }, 2000)
        }
    }, [message])

    const sharingLink = link ? link : link1
    console.log(sharingLink)
    return (
        <div className="parent">
            <div className="main-content">
                {/* <p className="wonderland-p">Wonderland</p> */}
                <button onClick={() => navigate("/name")} className="button-home">Get Started</button>
                <img className='snow-image' src={snow} alt="snow" />
            </div>

            {/* <div className="card">

                <div className="card-content">
                    <p>{message}</p>
                    {(link || link1) && (
                        <div className="link-parent">
                            <div className='input-parent'>
                                <input id="link-input" type="text" value={link || link1} readOnly />
                            </div>
               
                            <RWebShare
                                data={{
                                    text: "",
                                    url: sharingLink,
                                    title: "Share Your Link",
                                }}
                                onClick={() => console.log("shared successfully!")}
                            >
                                <button>Share 🔗</button>
                            </RWebShare>
                        </div>
                    )}
                    <div className="buttons">
                        <button onClick={handleClick} className="start-button one">Create your own link</button>
                        <button onClick={handleNavigate} className="start-button two">my responses</button>
                    </div>
                </div>

            </div> */}
        </div>
    )
}

export default Home