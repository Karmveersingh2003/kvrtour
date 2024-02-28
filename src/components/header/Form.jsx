import React, { useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const Form = () => {
    const location = useLocation()

    const [inputs, setInputs] = useState({});
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log('You made a request');
        let response = await axios.post("http://localhost:4000/addproducts", inputs);
        console.log(response);

        let data = await axios.get("http://localhost:4000/", inputs);
        console.log(data);
    }

    return (
        <>

            {/* <h1>hello {location.state.id}</h1> */}
            <form onSubmit={handleSubmit}>
                <label>heading:
                    <input
                        type="text"
                        name="heading"
                        value={inputs.heading || ""}
                        onChange={handleChange}
                    />

                </label>
                <br />
                <br />
                <label>image:
                    <input
                        type="text"
                        name="image"
                        value={inputs.image || ""}
                        onChange={handleChange}
                    />
                </label>

                <br />
                <br />
                <label>text:
                    <input
                        type="text"
                        name="text"
                        value={inputs.text || ""}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <br />

                <label>textparagraph:
                    <input
                        type="string"
                        name="textparagraph"
                        value={inputs.textparagraph || ""}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <br />
                <label>heading2:
                    <input
                        type="string"
                        name="heading2"
                        value={inputs.heading2 || ""}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <br />
                <label>image2:
                    <input
                        type="string"
                        name="image2"
                        value={inputs.image2 || ""}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <br />
                <label>daystour:
                    <input
                        type="string"
                        name="daystour"
                        value={inputs.daystour || ""}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <br />
                <label>daynight:
                    <input
                        type="string"
                        name="daynight"
                        value={inputs.daynight || ""}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <br />
                <label>place:
                    <input
                        type="string"
                        name="place"
                        value={inputs.place || ""}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <br />



                <label>image22:
                    <input
                        type="string"
                        name="image22"
                        value={inputs.image22 || ""}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <br />
                <label>daystour2:
                    <input
                        type="string"
                        name="daystour2"
                        value={inputs.daystour2 || ""}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <br />
                <label>daynight2:
                    <input
                        type="string"
                        name="daynight2"
                        value={inputs.daynight2 || ""}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <br />
                <label>place2:
                    <input
                        type="string"
                        name="place2"
                        value={inputs.place2 || ""}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <br />



                <label>image23:
                    <input
                        type="string"
                        name="image23"
                        value={inputs.image23 || ""}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <br />
                <label>daystour3:
                    <input
                        type="string"
                        name="daystour3"
                        value={inputs.daystour3 || ""}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <br />
                <label>daynight3:
                    <input
                        type="string"
                        name="daynight3"
                        value={inputs.daynight3 || ""}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <br />
                <label>place3:
                    <input
                        type="string"
                        name="place3"
                        value={inputs.place3 || ""}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <br />
                <label>image24:
                    <input
                        type="string"
                        name="image24"
                        value={inputs.image24 || ""}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <br />
                <label>daystour4:
                    <input
                        type="string"
                        name="daystour4"
                        value={inputs.daystour4 || ""}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <br />
                <label>daynight4:
                    <input
                        type="string"
                        name="daynight4"
                        value={inputs.daynight4 || ""}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <br />
                <label>place4:
                    <input
                        type="string"
                        name="place4"
                        value={inputs.place4 || ""}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <br />

                <input type="submit" />
            </form>
        </>
    )
}

export default Form;