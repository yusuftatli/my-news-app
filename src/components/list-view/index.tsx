import React, { FC } from 'react';
import { Card, List } from 'antd';
import { INews } from '../../models';

export interface IListView {
    loading: boolean;
    onClikCard: (url: string) => void;
    dataList: INews[];
}

const { Meta } = Card;

const ListView: FC<IListView> = (props) => {
    return (
        <>
            <List
                loading={props.loading}
                style={{
                    display: 'flex', width: "49%",
                    padding: "15px",
                    justifyContent: "center"
                }}
                grid={{
                    xs: 8,
                    sm: 4,
                    column: 3
                }}
                dataSource={props.dataList}
                renderItem={item => (
                    <List.Item style={{ height: '100%' }}>
                        <Card
                            onClick={() => { props.onClikCard(item.url) }}
                            hoverable
                            style={{ width: 240 }}
                            cover={<img alt={item.author} src={item.urlToImage} />}
                        >
                            <Meta title={item.title} description={item.description} />
                        </Card>
                    </List.Item>
                )}
            />
        </>
    )
};
export default ListView;