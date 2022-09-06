import React, { FC } from 'react';
import styled from "styled-components";
import { Input } from "antd";

export interface ISerchBox {
    onSearch: (value: string) => void
}

const { Search } = Input;
const SearchBox: FC<ISerchBox> = (props) => {

    const LoadMoreButtonDiv = styled.div`
        margin-top:20px;
        margin-bottom:20px;
        display: flex;
        justify-content: center;
    `;

    return (
        <>
            <LoadMoreButtonDiv>
                <Search placeholder="input search text" allowClear onSearch={props.onSearch} style={{ width: 400 }} />
            </LoadMoreButtonDiv>
        </>
    )
};

export default SearchBox;