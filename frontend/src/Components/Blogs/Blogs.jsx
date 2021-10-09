import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styles from "./blog.module.css"
import { FaBriefcaseMedical } from "react-icons/fa";
import { FcEngineering } from "react-icons/fc";
import { MdArchitecture } from "react-icons/md";
import { GrTechnology } from "react-icons/gr";

function Blogs() {

    const [allBlogs, setAllBlogs] = useState([]);
    const [blogsIsLoading, setBlogsIsLoading] = useState(false);
    const [blogsIsError, setBlogsIsError] = useState(false);

    const getAllBlogs = () => {
        setBlogsIsLoading(true);
        return axios.get('http://localhost:2367/blogs')
            .then((res) => {
                const datas = res.data.data.filter((item) => {
                    return item.category === "Enginnering"
                })
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
    const getMedical = () => {
        setBlogsIsLoading(true);
        return axios.get('http://localhost:2367/blogs')
            .then((res) => {
                const datas = res.data.data.filter((item) => {
                    return item.category === "Medical"
                })
                setAllBlogs(datas);
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
    const getArchitecture = () => {
        setBlogsIsLoading(true);
        return axios.get('http://localhost:2367/blogs')
            .then((res) => {
                const datas = res.data.data.filter((item) => {
                    return item.category === "Architecture"
                })
                setAllBlogs(datas);
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
    const getDefence = () => {
        setBlogsIsLoading(true);
        return axios.get('http://localhost:2367/blogs')
            .then((res) => {
                const datas = res.data.data.filter((item) => {
                    return item.category === "Defence"
                })
                setAllBlogs(datas);
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
    const getIT = () => {
        setBlogsIsLoading(true);
        return axios.get('http://localhost:2367/blogs')
            .then((res) => {
                const datas = res.data.data.filter((item) => {
                    return item.category === "IT"
                })
                setAllBlogs(datas);
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


    const getenginnering = () => {
        setBlogsIsLoading(true);
        return axios.get('http://localhost:2367/blogs')
            .then((res) => {
                const datas = res.data.data.filter((item) => {
                    return item.category === "Enginnering"
                })
                setAllBlogs(datas);
                setBlogsIsLoading(false);
            })
            .catch((err) => {
                setBlogsIsLoading(false);
                setBlogsIsError(true);
            })
            .finally(() => {
                setBlogsIsLoading(false);
            })
    }


    return blogsIsLoading ? <div className={ styles.blogsLoadingGif}><img src="https://c.tenor.com/28DFFVtvNqYAAAAC/loading.gif" alt="gif"/></div>
        : blogsIsError ? <div>Something went wrong</div>
            : (<div className={styles.blogcardMaindiv}>
                <div className={styles.blogcardmaindiv}>
                    <div className={ styles.maindivinnerdiv1}>
                        <button className={styles.maindivinnerdiv1button} onClick={getenginnering}><FcEngineering style={{marginTop:"8px", marginLeft:"10px"}}/><p>Engineering</p></button>
                        <button className={ styles.maindivinnerdiv1button} onClick={getMedical}><FaBriefcaseMedical style={{marginTop:"8px", marginLeft:"10px"}}/><p>Medical</p></button>
                        <button className={ styles.maindivinnerdiv1button} onClick={getArchitecture}><MdArchitecture style={{marginTop:"8px", marginLeft:"10px"}}/><p>Architecture</p></button>
                        <button className={ styles.maindivinnerdiv1button} onClick={getIT}><GrTechnology style={{marginTop:"8px", marginLeft:"10px"}}/><p>IT</p></button>
                    </div>
                    <div>
                        {
                            allBlogs.length > 0 ? (
                                allBlogs.map((item) => {
                                    return  <div className={styles.blogcard}>
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
                </div>
                </div>
            )
}

export default Blogs