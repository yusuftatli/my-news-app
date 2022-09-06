import React, { FC } from 'react';
import { Divider, List } from 'antd';

const SiderMenu: FC = () => {
    const data = [
        'business', 'entertainment', 'general', 'health', 'science', 'sportstechnology'
    ];
    const onClick = () => {
    }

    return (
        <>
            <Divider orientation="left">topics</Divider>
            <List
                style={{ cursor: "pointer" }}
                size="small"
                bordered
                dataSource={data}
                renderItem={item => <List.Item onClick={onClick}>{item}</List.Item>}
            />
        </>
    )
};

export default SiderMenu;