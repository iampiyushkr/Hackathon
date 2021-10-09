import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styles from "./blog.module.css"

function Blogs() {

    const [allBlogs, setAllBlogs] = useState([]);
    const [blogsIsLoading, setBlogsIsLoading] = useState(false);
    const [blogsIsError, setBlogsIsError] = useState(false);

    const getAllBlogs = () => {
        setBlogsIsLoading(true);
        return axios.get('http://localhost:2367/blogs')
            .then((res) => {
                setAllBlogs(res.data.data);
                setBlogsIsLoading(false);
            })
            .catch((err) => {
                setBlogsIsLoading(false);
                setBlogsIsError(true);
            })
            .finally(() => {
                setBlogsIsLoading(false);
            })
    };

    useEffect(() => {
        getAllBlogs();
    }, [])

    return blogsIsLoading ? <div className={ styles.blogsLoadingGif}><img src="https://c.tenor.com/28DFFVtvNqYAAAAC/loading.gif" alt="gif"/></div>
        : blogsIsError ? <div>Something went wrong</div>
            : (
                <div >
                    <h1>--BLOGS--</h1>
                    {
                        allBlogs.length > 0 ? (
                            allBlogs.map((item) => {
                                return <div  className={ styles.blogcard}>
                                    <img src={item.imageUrl} alt="blogsImage" />
                                    <div className={styles.blogcarddiv1}>
                                        <h2>{item.title}</h2>
                                        <p>{ item.body}</p>
                                    </div>
                                </div>
                            })
                        ) : (
                                <div>
                                <h1>No Blogs to show.</h1>
                            </div>
                        )
                    }
                </div>
            )
}

export default Blogs