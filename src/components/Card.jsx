import { Link } from "react-router-dom";

// Step 2: Create Pages and Components
const Card = (props) => {
    return (
        // Step 4: Creating a Component for a Content Creator
        <Link to={`/creatorview/${props.id}`} className='creator-card'>
            <img src={props.imageURL} alt={`${props.name}'s profile picture.`} />
            <h4>{props.name}</h4>
            <div>{props.url}</div>
            <div>{props.description}</div>
        </Link>
    );
}
 
export default Card;