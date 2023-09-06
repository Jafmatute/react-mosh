import {Link} from "react-router-dom";

const HomePage = () => {
    return (
        <>
            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores facere ipsum repudiandae. A adipisci,
                aliquam beatae consequatur culpa dicta ea eius ex illum officiis quia ratione repellat voluptatem!
                Labore, laborum?
            </div>
            <div className="d-flex justify-content-between">
                <Link to="/users">Users</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </>
    )
}
export default HomePage
