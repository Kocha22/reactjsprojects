import React from "react";

export default function Form() {
    const [formData, setFormData] = React.useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        comments: '',
        employment: '',
        isFriendly: false,
        favColor: ''
    })

    console.log(formData)

    function handleChange(e) {
        const {name, value, checked, type} = e.target
        setFormData(prevFormData=> {
            return {
                ...prevFormData,
                [name] : type ==='checkbox' ? checked : value
            }
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
        console.log(formData)
    }

    return (
        <div>
            <form  onSubmit={handleSubmit}>
                <input 
                type="text"
                name="firstName"
                onChange={handleChange}
                />
                <br/>
                <input 
                type="text"
                name="lastName"
                onChange={handleChange}
                />
                <br/>
                <input 
                type="text"
                name="phone"
                onChange={handleChange}
                />
                <br/>
                <input 
                type="text"
                name="email"
                onChange={handleChange}
                />
                <br/>
                <br/>
                <textarea 
                name="comments"
                onChange={handleChange}
                />
                <br/>
                <input 
                type="checkbox"
                name="isFriendly"
                id="isFriendly"
                onChange={handleChange}
                />
                <label htmlFor="isFriendly">Are you Friendly?</label>
                <br/>
                <fieldset>
                    <legend>Are you employed?</legend>

                    <input 
                        type="radio"
                        name="employment"
                        value='employed'
                        id="unemployed"
                        onChange={handleChange}
                        />
                         <label htmlFor="unemployed">Unemployed</label>
                        <br/>
                        <input 
                        type="radio"
                        name="employment"
                        id="part-time"
                        value='part-time'
                        onChange={handleChange}
                        />
                        <label htmlFor="part-time">Part-time</label>
                        <br/>
                        <input 
                        type="radio"
                        name="employment"
                        id="full-time"
                        value='full-time'
                        onChange={handleChange}
                        />
                        <label htmlFor="full-time">Full-time</label>
                        <br/>
                </fieldset>
                <br/>
                <label htmlFor="favColor">What is your Favorite Color?</label>
                <br/>
                <select
                 id="favColor"
                 onChange={handleChange}
                 name="favColor"
                 value={formData.favColor}>
                    <option value="red">Red</option>
                    <option value="orange">Orange</option>
                    <option value="yellow">Yellow</option>
                    <option value="green">Green</option>
                    <option value="blue">Blue</option>
                    <option value="indigo">Indigo</option>
                    <option value="violet">Violet</option>
                </select>
                <br/>
            <br/>
            <button>Submit</button>
            </form>
        </div>
    )
}