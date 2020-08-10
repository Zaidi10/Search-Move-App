import React, { useState, useEffect } from 'react'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Button } from "reactstrap";

export default function SearchBarComponent(props) {
    const [search, setSearch] = useState("");
    const [type, setType] = useState("title");
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen(prevState => !prevState);

    const handleChange = (e) => {

        setSearch(e.target.value);
    }
    const handleDropDownChange = (e) => {
        setType(e.target.value);

    }
    const handleKeyDown = (e) => {
        if (e.keyCode === 13) {
            props.handleSerch(search, type);
        }
    }

    return (
        <div className="input-group md-form form-sm form-2 pl-0 search-con">
            <input className="form-control my-0 py-1 lime-border" onKeyDown={handleKeyDown} placeholder="Search" onChange={handleChange} value={search} type="text" placeholder="Search" aria-label="Search" />
            <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle className="drop_down" caret>
                    {type}
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem value="title" onClick={handleDropDownChange}>Title</DropdownItem>
                    <DropdownItem value="movie" onClick={handleDropDownChange}>Movie</DropdownItem>
                    <DropdownItem value="Series" onClick={handleDropDownChange}>Series</DropdownItem>
                    <DropdownItem value="year" onClick={handleDropDownChange}>Year</DropdownItem>
                </DropdownMenu>
            </Dropdown>
            <Button className="search_button" onClick={() => props.handleSerch(search, type)}>Search</Button>
        </div>
    )
}
