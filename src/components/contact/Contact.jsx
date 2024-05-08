import React, {useState} from 'react';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');    


    return (
        <div className='container_Contact'>
            <h2>Me contacter</h2>
            <form action="">

                
            </form>
            
        </div>
    );
};

export default Contact;