import React, { FC } from 'react';
import styled from "styled-components";
import { Button } from "antd";

export interface ILoadMoreButton {
    onClick: () => void
}

const LoadMoreButton: FC<ILoadMoreButton> = (props) => {
    const LoadMoreButtonDiv = styled.div`
        margin-top:20px;
        margin-bottom:20px;
        display: flex;
        justify-content: center;
    `;
    return (
        <>
            <LoadMoreButtonDiv>
                <Button onClick={props.onClick} type="primary">Load More</Button>
            </LoadMoreButtonDiv>
        </>
    )
};
export default LoadMoreButton;