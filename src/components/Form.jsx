import { useState } from "react";

import Switch from "react-switch";
import axios from "axios";
import { url } from "./service";
import { useNavigate, useParams } from "react-router-dom";




const Form = () => {
    const [formData, setFormData] = useState({
        name: '',
        paragraph: '',
        like: '',
        dislike: ''
    });
    const { id } = useParams()
    console.log(id)
    const [checked, setIsChecked] = useState(false)
    const navigate = useNavigate()

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    const handleToggleChange = () => {
        setIsChecked(!checked)

    }

    const handleSubmit = async (e) => {
        e.preventDefault();


        try {
            await axios.post(`${url}/submit-form/${id}`, { ...formData, anonymous: checked });
            alert("Your response was submitted")
            navigate("/")

        } catch (error) {
            console.error('Error submitting form:', error);
        }

    };

    return (
        <div className="form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
                <label htmlFor="name">Your Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <div className="span-parent">
                    <span>Keep it anonymous</span>
                    <Switch onChange={handleToggleChange} checked={checked} />
                </div>


                {/* <label htmlFor="anonymous">Your Anonymous name<span>(we will show this name to them)</span></label>
                <input
                    type="anonymous"
                    id="anonymous"
                    name="anonymous"
                    placeholder="Enter your anonymous name"
                    value={formData.anonymous}
                    onChange={handleChange}
                    required
                /> */}
                <label htmlFor="like">Things You Like About Them</label>
                <input
                    type="text"
                    id="like"
                    name="like"
                    placeholder="Enter here"
                    value={formData.like}
                    onChange={handleChange}
                    required
                />
                <label htmlFor="dislike">Things You Like About Them</label>
                <input
                    type="text"
                    id="dislike"
                    name="dislike"
                    placeholder="Enter here"
                    value={formData.dislike}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="paragraph">Write something about them</label>
                <textarea
                    id="paragraph"
                    name="paragraph"
                    placeholder="Enter your paragraph"
                    value={formData.paragraph}
                    onChange={handleChange}
                    required
                ></textarea>

                <button className="form-button" type="submit" onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    );
};

export default Form;
