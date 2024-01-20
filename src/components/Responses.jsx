import { useEffect, useState } from 'react'
import axios from 'axios';
import { url } from './service';
import { useNavigate } from 'react-router-dom';

const Responses = () => {
    const link = localStorage.getItem("link")
    const [submissions, setSubmissions] = useState("")
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
            <button onClick={() => navigate('/')} className="form-button">
                Go to Home
            </button>
            <h1 className="text-center mt-5">Responses</h1>
            {submissions.length ? (
                <div className="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Paragraph</th>
                                <th>Like</th>
                                <th>Dislike</th>

                            </tr>
                        </thead>
                        <tbody>
                            {submissions.map((submission, index) => (
                                <tr key={index}>
                                    <td>{submission?.name}</td>
                                    <td>{submission?.paragraph}</td>
                                    <td>{submission?.like}</td>
                                    <td>{submission?.dislike}</td>
                                    <td>{/* Add more fields as needed */}</td>
                                    <td>{/* Add more fields as needed */}</td>
                                    <td>{/* Add more fields as needed */}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <p>No Responses or you have not created your link</p>
            )}
        </div>
    )
}

export default Responses