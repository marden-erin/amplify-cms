import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';
import { FaHeading } from "react-icons/fa6";
import './format.css'


import React from 'react'

const Format = ({ editor }) => {
    if (!editor) {
        return null
    }


return(
    <DropdownButton className='format-dropdown' id="dropdown-button-drop-down" title=<FaHeading /> drop='down'>
    <Dropdown.Item onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}>H1</Dropdown.Item>
    <Dropdown.Item onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}>H2</Dropdown.Item>
    <Dropdown.Item onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}>H3</Dropdown.Item>
    </DropdownButton>
);
}


export default Format