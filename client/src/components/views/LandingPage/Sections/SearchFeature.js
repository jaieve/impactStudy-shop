import React, {useState} from 'react';
import { Input, Space } from 'antd';
import {uninitialized} from "mongoose/lib/connectionstate";

const { Search } = Input;


const onSearch = value => console.log(value);

function SearchFeature(props) {
    const [SearchTerm, setSearchTerm] = useState("");

    const searchHandler = (e) => {
        setSearchTerm(e.currentTarget.value);
        props.refreshFunction(e.currentTarget.value);
    }

    return (
        <div>
            <Search placeholder="input search text"
                    onChange={searchHandler}
                    style={{ width: 200 }}
                    value={SearchTerm}
            />
        </div>
    );
}

export default SearchFeature;