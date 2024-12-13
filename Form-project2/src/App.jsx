import { useState } from 'react';
import './index.css';

function App() {
    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        age: "",
        email: "",
        phonenumber: "",
        password: "",
        repeatpassword: "",
    });

    const [errors, setErrors] = useState({});
    const [succes, setSuccess] = useState({});

    const validateField = (name, value) => {
        setErrors((prev) => ({
            ...prev,
            [name]: "",
        }));
        if (value.trim() === "") {
        setErrors((prev) => ({
            ...prev,
            [name]: "Field can't be empty",
        }));
        setSuccess((prev) => ({
            ...prev,
            [name]: "",
        }));
        return;
    }

        if (name === "firstname" && value.length < 5) {
            setErrors((prev) => ({
            ...prev,
            [name]: "First Name must be at least 5 characters",
                }));
        } else if (name === "firstname" && value.length >= 5){
            setSuccess((prev) => ({
                ...prev,
                [name]: "First Name is ok",
                }));
        } else if (name === "lastname" && value.length < 5) {
            setErrors((prev) => ({
            ...prev,
            [name]: "Last Name must be at least 5 characters",
                }));
        } else if (name === "lastname" && value.length >= 5){
            setSuccess((prev) => ({
                ...prev,
                [name]: "Last Name is ok",
                }));
        } else if (name === "age" && value < 18){
            setErrors((prev) => ({
            ...prev,
            [name]: "Age must be at least 18years old",
                }));
        } else if (name === "age" && value >= 18){
            setSuccess((prev) => ({
                ...prev,
                [name]: "Age is ok",
                }));
        } 
        else if (name === "phonenumber") {
            const stringValue = String(value);
            if(isNaN(value) || stringValue.length < 10){
            setErrors((prev) => ({
            ...prev,
            [name]: "Phone number must be valid",
                })) ;
        } else if (name === "phonenumber"){
            if(!isNaN(value) || stringValue.length >= 10){
            setSuccess((prev) => ({
                ...prev,
                [name]: "Phone Number is ok",
                }));
            }
        }
        } else if (name === "password" && value.length < 9){
            setErrors((prev) => ({
            ...prev,
            [name]: "Password must be at least 9 characters",
                }));
        } else if (name === "password" && value.length >= 9){
            setSuccess((prev) => ({
                ...prev,
                [name]: "Password is ok",
                }));
        } else if (name === "repeatpassword" && value !== formData.password){
            setErrors((prev) => ({
            ...prev,
            [name]: "Password must be the same",
    }));
    } else if (name === "repeatpassword" && value === formData.password){
        setSuccess((prev) => ({
            ...prev,
            [name]: "Password is ok",
            }));
    }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        validateField(name, value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
    };

return (
        <div className='container'>
            <h1>Form</h1>
            <br />
            <form onSubmit={(e) => handleSubmit(e)}>
                <input
                className={
                    formData.firstname.trim() === ""
                        ? "" // Aucune classe appliquée si le champ est vide
                        : errors.firstname
                        ? "error"
                        : "success"
                }
                    type="text"
                    name="firstname"
                    placeholder="First Name"
                    onChange={(e) => handleChange(e)}
                />
                {errors.firstname && <p>{errors.firstname}</p>}
                <br />
                <input
                    className={
                        formData.lastname.trim() === ""
                            ? "" // Aucune classe appliquée si le champ est vide
                            : errors.lastname
                            ? "error"
                            : "success"
                    }
                    type="text"
                    name="lastname"
                    placeholder="Last Name"
                    onChange={(e) => handleChange(e)}
                />
                {errors.lastname && <p>{errors.lastname}</p>}
                <br />
                <input
                className={
                    formData.age.trim() === ""
                        ? "" // Aucune classe appliquée si le champ est vide
                        : errors.age
                        ? "error"
                        : "success"
                }
                    type="number"
                    name="age"
                    placeholder="Age"
                    value={formData.age}
                    onChange={(e) => handleChange(e)}
                />
                {errors.age && <p>{errors.age}</p>}
                <br />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={(e) => handleChange(e)}
                />
                <br />
                <input
                    className={
                        formData.phonenumber.trim() === ""
                            ? "" // Aucune classe appliquée si le champ est vide
                            : errors.phonenumber
                            ? "error"
                            : "success"
                    }
                    type="text"
                    name="phonenumber"
                    placeholder="Phone Number"
                    onChange={(e) => handleChange(e)}
                />
                {errors.phonenumber && <p>{errors.phonenumber}</p>}
                <br />
                <input
                className={
                    formData.password.trim() === ""
                        ? "" // Aucune classe appliquée si le champ est vide
                        : errors.password
                        ? "error"
                        : "success"
                }
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={(e) => handleChange(e)}
                />
                {errors.password && <p>{errors.password}</p>}
                <br />
                <input
                    className={
                        formData.repeatpassword.trim() === ""
                            ? "" // Aucune classe appliquée si le champ est vide
                            : errors.repeatpassword
                            ? "error"
                            : "success"
                    }
                    type="password"
                    name="repeatpassword"
                    placeholder="Repeat Password"
                    onChange={(e) => handleChange(e)}
                />
                {errors.repeatpassword && <p>{errors.repeatpassword}</p>}
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default App;