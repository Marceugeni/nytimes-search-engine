import React, { useState } from 'react';
import styled from 'styled-components';

const SearchFilter = ({ inputText }) => {
    const [search, setSearch] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        inputText(search);
    }
    
    return ( 
        <Form onSubmit={handleSubmit}>
            <Input 
                type="text" 
                placeholder="Sports" 
                onChange={(e) => setSearch(e.target.value)} 
            />
            <Button type="submit">Search!</Button>
        </Form>  
    )
}

const Input = styled.input`
    padding: 10px;
    border: none;
    border-radius: 12px 0 0 12px;
    outline: none;
`
const Button = styled.button`
    background-color: #434C5E;
    color: #eceff4;
    border: none;
    padding: 10px;
    border-radius: 0 12px 12px 0;
    
`
const Form = styled.form`
    padding: 10px;
`


 
export default SearchFilter;