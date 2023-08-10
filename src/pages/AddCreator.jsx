// Step 7: Adding a Content Creator

import { useNavigate } from 'react-router';
import { supabase } from '../client';
import { useState } from 'react';

// Step 2: Create Pages and Components
const AddCreator = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');  
    const [url, setUrl] = useState(''); 
    const [imageURL, setImageURL] = useState(''); 
    const [description, setDescription] = useState(''); 

    const addCreator = async() => {
        const data = {
            name: name,
            url: url,
            imageURL: imageURL,
            description: description
        }

        const { error } = await supabase.from('creators').insert(data);
        
        if (error !== null) {
            console.log('error');
        }

        navigate('/');
    }

    return (
        <div className="center-on-page">
            <div className='form-column'>
                <h1 style={{textAlign: 'center'}}>Add Creator</h1>
                <input type="text" placeholder="Name" onChange={ (e) => setName(e.target.value)}/>
                <input type="text" placeholder="Url" onChange={ (e) => setUrl(e.target.value)}/>
                <input type="text" placeholder="Image Url" onChange={ (e) => setImageURL(e.target.value)}/>
                <input type="text" placeholder="Description" onChange={ (e) => setDescription(e.target.value)}/>
                <button onClick={addCreator}>Add Creator</button>
            </div>
        </div>
    );
}
 
export default AddCreator;