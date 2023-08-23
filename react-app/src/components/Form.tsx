import {FormEvent, useState} from "react";

const Form = () => {

    const [person, setPerson] = useState({
        name: '',
        age: ''
    })

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();

        console.log(person)
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input value={person.name} onChange={(evt) => setPerson({
                    ...person, name: evt.target.value
                })} id="name" type="text" className="form-control"/>
            </div>
            <div className="mb-3">
                <label htmlFor="age" className="form-label">Age</label>
                <input value={person.age} onChange={(evt) => setPerson({
                    ...person, age: parseInt(evt.target.value)
                })} id="age" type="number" className="form-control"/>
            </div>
            <button type="submit" className="btn btn-primary">
                Submit
            </button>
        </form>
    );
}
export default Form
