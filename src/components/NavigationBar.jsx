import { Link } from "react-router-dom";

const NavigationBar = () => {
    return (
        <Link to='/'>
            <h2 className='logo'>Creatorverse</h2>
        </Link>
    );
}
 
export default NavigationBar;