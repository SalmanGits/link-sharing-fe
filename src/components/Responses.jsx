import { useEffect, useState } from 'react'
import axios from 'axios';
import { url } from './service';
import { useNavigate } from 'react-router-dom';
import { animated, useSpring } from "react-spring";

const Responses = () => {
    const style = useSpring({
        from: {
            transform: "rotateY(0deg)"
        },
        transform: "rotateY(25deg)"
    });
    const link = localStorage.getItem("link")
    const [submissions, setSubmissions] = useState("")
    const submissions1 = [
        {
            _id: 1,
            name: "John Doe",
            paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            like: "Chocolate",
            dislike: "Rainy days"
        },
        {
            _id: 2,
            name: "Jane Smith",
            paragraph: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            like: "Coffee",
            dislike: "Spiders"
        },
        {
            _id: 3,
            name: "Alice Johnson",
            paragraph: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            like: "Reading",
            dislike: "Loud noises"
        }
    ];
    const navigate = useNavigate()

    const parts = new URL(link).pathname.split('/');
    const lastSegment = parts.pop() || parts.pop(); // Get the last segment or the previous one if it's empty

    console.log(lastSegment);
    useEffect(() => {
        const fetchSubmissions = async () => {
            try {
                const response = await axios.get(`${url}/submissions/${lastSegment}`);
                setSubmissions(response.data);
            } catch (error) {
                console.error('Error fetching submissions:', error);
            }
        };

        fetchSubmissions();
    }, [lastSegment]);
    return (
        <div>
            <button onClick={() => navigate('/')} className="form-button" style={{ width: "200px" }}>
                Go to Home
            </button>
            {/* <h1 className="text-center mt-5">Responses</h1> */}
            {submissions.length ? (
                <div className="table-container">
                    {submissions1.map((submission) => (
                        <animated.div key={submission._id} className="card-h" style={{ ...style }}>
                            <p>{submission?.name}</p>
                            <p>{submission?.paragraph}</p>
                            <p>{submission?.like}</p>
                            <p>{submission?.dislike}</p>

                        </animated.div>
                    ))}
                </div>
            ) : (
                <p>No Responses or you have not created your link</p>
            )}
        </div>
    )
}

export default Responses




// <table>
//                         <thead>
//                             <tr>
//                                 <th>Name</th>
//                                 <th>Paragraph</th>
//                                 <th>Like</th>
//                                 <th>Dislike</th>

//                             </tr>
//                         </thead>
//                         <tbody>
// {submissions.map((submission, index) => (
//     <tr key={index}>
//         <td>{submission?.name}</td>
//         <td>{submission?.paragraph}</td>
//         <td>{submission?.like}</td>
//         <td>{submission?.dislike}</td>
//         <td>{/* Add more fields as needed */}</td>
//         <td>{/* Add more fields as needed */}</td>
//         <td>{/* Add more fields as needed */}</td>
//     </tr>
// ))}
//                         </tbody>
//                     </table>