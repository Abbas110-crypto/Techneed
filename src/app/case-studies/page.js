'use client';
import React,{useState,useEffect} from 'react'
import styles from '../components/Case Studies/CaseStudies.module.css';
import {Row,Button,Col} from 'antd';
import { initAOS } from '../AOS/Interceptor';
import api from '../axiosInterceptor/axiosInterceptor';
import { useRouter } from 'next/navigation';

function CaseStudies() { 
  useEffect(() => {
    initAOS();
  }, []);
    const router = useRouter();
    const [blogs, setBlogs] = useState([]);
  
    const fetchTopBlogs = async () => {
      try {
        const response = await api.get('/updateblog');
        setBlogs(response.data);
      } catch (error) {
        console.error('Error fetching top blogs:', error);
      }
    };
  
    useEffect(() => {
      fetchTopBlogs();
    }, []);
  
    const handleBlogClick = (_id) => {
      console.log(_id);
      router.push(`/blog/${_id}`);
    };
  
    if (blogs.length === 0) {
      return null;
    }
  
  return (
    <div className={styles.main}>
        <Row>
            <h3 className={styles.heading}>Case Studies</h3>
        </Row>
        <div className={styles.divider} data-aos="zoom-in-up">
        <Row justify={'space-around'}>
        {blogs.map((blog) => (
          <Col key={blog._id} xs={24} sm={24} md={24} lg={7} xl={7}>
            <div className={styles.blog_content} onClick={() => handleBlogClick(blog._id)}>
              <img
                src={blog.image}
                alt="Blog"
                width={390}
                height={250}
                className={styles.image}
              />
              <Button className={styles.Button}>{blog.title}</Button>
              <p className={styles.desc}>{blog.description}</p>
              <Button className={styles.Button1}>{blog.DateButton}</Button>
            </div>
          </Col>
        ))}
      </Row>
        </div> 
    </div>
  )
}


export default CaseStudies;




