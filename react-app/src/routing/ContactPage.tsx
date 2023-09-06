import {useNavigate} from "react-router-dom";

const ContactPage = () => {
    const navigation = useNavigate();
    return (
        <form onSubmit={(evt) => {
            evt.preventDefault();
            navigation('/')
        }}>
            <button className="btn btn-primary">Submit</button>
        </form>
    )
}
export default ContactPage
