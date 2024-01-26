import { useState } from "react";

import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"


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
    const fieldOrder = ['name', 'paragraph', 'like', 'dislike'];

    const handleChange = (e, fieldName) => {
        const { value } = e.target;
        setFormData({
            ...formData,
            [fieldName]: value
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
    console.log(formData)

    return (
        <div className="form-container">
            <div className="carousel-container">
                <Carousel className="w-full max-w-xs small-car">
                    <CarouselContent>
                        {fieldOrder.map((fieldName, index) => (
                            <CarouselItem key={index}>
                                <div className="p-1">
                                    <Card className="my-card">
                                        <CardContent className="flex aspect-square items-center justify-center p-6">
                                            <input
                                                type="text"
                                                className="text-4xl font-semibold w-60 h-16 text-center input-form"
                                                placeholder={`Enter ${fieldName}`}
                                                value={formData[fieldName]}
                                                onChange={(e) => handleChange(e, fieldName)}
                                            />
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
            <button className="form-button new">Submit</button>
        </div>
    );
};

export default Form;
