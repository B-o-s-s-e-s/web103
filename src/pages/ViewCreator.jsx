// Step 2: Create Pages and Components
// Step 6: Viewing a Single Content Creator
import { useNavigate, useParams } from 'react-router';
import { useEffect, useState } from 'react';
import { supabase } from '../client';
import { Link } from 'react-router-dom';


const ViewCreator = () => {
    const navigate = useNavigate();

    let { id } = useParams();
    id = parseInt(id);

    const [element, setElement] = useState();

    useEffect( () => {
        const fetchCreators = async() => {
            const { data, error } = await supabase.from('creators').select().match({ id: id });
            
            if (error != null) {
                console.log(error);
            }
            else {
                setElement(data[0]);
            }
        }
        fetchCreators();

    }, [id]);

    const deleteCreator = async() => {
        const { error } = await supabase.from('creators').delete().eq('id', id);
        if (error) {
            console.log(error);
        }
        navigate('/');
    }

    return (
        element &&
        <div className='center-on-page'>
            <div>
                <div className='creator-card'>
                    <img src={element.imageURL} alt={`${element.name}'s profile picture.`} />
                    <h4>{element.name}</h4>
                    <div>{element.url}</div>
                    <div>{element.description}</div>
                </div>
                <button className='' onClick={deleteCreator}>Delete Creator</button>
                <Link to={`/creatoredit/${element.id}`}><button className=''>Edit Creator</button></Link>
            </div>
        </div>
    );
}
 
export default ViewCreator;