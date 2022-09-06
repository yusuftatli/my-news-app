import React, { useState, useEffect, FC } from "react";
import { INews, IPagination } from "../models"
import SearchBox from "../components/search";
import LoadMoreButton from "../components/load-more-button";
import ListView from "../components/list-view";


const News: FC = () => {
    const [loading, setLoading] = useState(false);
    const [news, setNews] = useState<INews[]>([]);
    const [filteredNews, setFilteredNews] = useState<INews[]>([]);
    const [pagination, setPagination] = useState<IPagination>({
        page: 1,
        pageSize: 9,
    });
    const [category, setCategory] = useState<string>("business");

    useEffect(() => {
        setCategory("business")
        loadNews(pagination);
    }, []);

    const loadNews = (pagination: IPagination) => {
        setLoading(true)
        fetch(`https://newsapi.org/v2/top-headlines?category=${category}&page=${pagination.page}&pageSize=${pagination.pageSize}&language=en&apiKey=c3af95617ba94603914ce3f904c40e9d`)
            .then((res) => res.json())
            .then(
                (result) => {
                    const responseData = news.concat(result.articles).map(news => {
                        return {
                            key: news.title,
                            ...news,
                        };
                    });
                    setNews(responseData);
                    setFilteredNews(responseData);
                    setLoading(false)
                },
                (error) => {
                    setLoading(false)
                }
            );
    }

    const loadMoreNews = () => {
        const page = pagination.page + 1;
        const pageSize = pagination.pageSize + 9;
        setPagination({ page: page, pageSize: pageSize })
        loadNews({ page, pageSize });
    }


    const onClickContent = (val: string) => {
        window.open(val, "_blank")
    }

    const onSearch = (val: string) => {
        const filterContent = news.filter(f => f.title?.includes(val) || f.description?.includes(val))
        setFilteredNews(filterContent)
    }

    return (
        <>
            <SearchBox onSearch={onSearch} />
            <ListView loading={loading} dataList={filteredNews} onClikCard={onClickContent} />
            <LoadMoreButton onClick={loadMoreNews} />
        </>
    )
}

export default News;