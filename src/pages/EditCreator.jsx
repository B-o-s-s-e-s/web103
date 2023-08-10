// Step 2: Create Pages and Components
// Step 8: Updating a Content Creator

import { useNavigate, useParams } from 'react-router';
import { supabase } from '../client';
import { useEffect, useState } from 'react';

const EditCreator = () => {
    let { id } = useParams();
    id = parseInt(id);

    const navigate = useNavigate();
    const [name, setName] = useState('');  
    const [url, setUrl] = useState(''); 
    const [imageURL, setImageURL] = useState(''); 
    const [description, setDescription] = useState(''); 

    useEffect( () => {
        const fetchCreators = async() => {
            const { data, error } = await supabase.from('creators').select().match({ id: id });
            
            if (error != null) {
                console.log(error);
            }
            else {
                setName(data[0].name);
                setUrl(data[0].url);
                setImageURL(data[0].imageURL);
                setDescription(data[0].description);
                console.log(data[0])
            }
        }
        fetchCreators();

    }, [id]);

    const editCreator = async() => {
        const data = {
            id: id,
            name: name,
            url: url,
            imageURL: imageURL,
            description: description
        }

        const { error } = await supabase.from('creators').update(data).eq('id', id);
        
        if (error !== null) {
            console.log('error');
        }

        navigate(`/creatorview/${data.id}`);
    }

    return (
        <div className="center-on-page">
            <div className='form-column'>
                <h1 style={{textAlign: 'center'}}>Edit Creator</h1>
                <input type="text" value={name} onChange={ (e) => setName(e.target.value)}/>
                <input type="text" value={url} onChange={ (e) => setUrl(e.target.value)}/>
                <input type="text" value={imageURL} onChange={ (e) => setImageURL(e.target.value)}/>
                <input type="text" value={description} onChange={ (e) => setDescription(e.target.value)}/>
                <button onClick={editCreator}>Edit Creator</button>
            </div>
        </div>
    );
}
 
export default EditCreator;