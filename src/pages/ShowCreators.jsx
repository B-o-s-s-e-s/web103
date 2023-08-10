// Step 2: Create Pages and Components
// Step 5: Viewing All Content Creators
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { supabase } from '../client';
import Card from "../components/Card";

const ShowCreators = () => {
    const [creators, setCreators] = useState([]);

    useEffect( () => {
        const fetchCreators = async() => {
            const { data, error } = await supabase.from('creators').select();
            
            if (error != null) {
                console.log(error);
            }
            else {
                setCreators(data);
            }
        }
        
        fetchCreators();

    }, []);
    
    return (
        <div>
            <div className='creator-card-container'>
                { creators.map( (element, index) => (
                    <Card 
                    key={index}
                    id={element.id}
                    imageURL={element.imageURL}
                    name={element.name}
                    url={element.url}
                    description={element.description}/>
                    )
                    )
                }
            </div>
            <Link to='/creatoradd'>
                <button className='action-button'>Add Creator</button>
            </Link>
        </div>
    );
}
 
export default ShowCreators;