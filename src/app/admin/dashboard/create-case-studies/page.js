"use client";
import { useEffect, useState } from 'react';
import { Button, Col, Input, Row, Upload, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import styles from './CreateCaseStudies.module.css';
import 'react-quill/dist/quill.snow.css';
import Sidebar from '../../Sidebar/Sidebar';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import api from '../../../axiosInterceptor/axiosInterceptor';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
const { TextArea } = Input;

const CreateCaseStudies = () => {
    const router = useRouter();
    const [title, setTitle] = useState('');
    const [DateButton, setDateButton] = useState('');
    const [content, setContent] = useState('');
    const [description, setDescription] = useState('');
    const [fileList, setFileList] = useState([]);
    const [tokenAvailable, setTokenAvailable] = useState(true); 

    useEffect(() => { document.body.style.backgroundColor = '#fff' }, [])
    const handleUpdate = async () => {
        try {
            console.log('Title:', title);
            console.log('Description:', description);
            console.log('Content:', content);
            console.log('DateButton', DateButton)
 
            const formData = new FormData();
            formData.append('title', title);
            formData.append('description', description);
            formData.append('content', content);
            formData.append('DateButton', DateButton);

            if (fileList.length > 0) {
                formData.append('image', fileList[0].originFileObj);
            }

            const response = await api.post('/blogs', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            console.log('Form data submitted successfully:', response.data);
            router.push('./case-studies');
            message.success('Blog Created');
        } catch (error) {
            console.error('Error creating blog:', error);
        }
    };

    useEffect(() => {
        const token = localStorage.getItem('token'); 
        if (!token) {
            setTokenAvailable(false);
        }
    }, []); 

    const handleFileChange = ({ fileList }) => {
        setFileList(fileList);
    };

    if (!tokenAvailable) {
        router.push('/admin/login');
        return null;
    }

    return (
        <div>
            <Sidebar />
            <div className={styles.Edit_Blog}>
                <Row>
                    <Col md={6} lg={6}>
                        <label className={styles.EditBlog_L1}>TITLE:</label>
                    </Col>
                    <Col md={18} lg={18}>
                        <Input
                            className={styles.EditBlog_Input1}
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col md={6} lg={6}>
                        <label className={styles.EditBlog_L1}>DATE BUTTON :</label>
                    </Col>
                    <Col md={18} lg={18}>
                        <Input
                            className={styles.EditBlog_Input1}
                            type="text"
                            value={DateButton}
                            onChange={(e) => setDateButton(e.target.value)}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col md={6} lg={6}>
                        <label className={styles.EditBlog_L1}>MAIN IMAGE:</label>
                    </Col>
                    <Col md={18} lg={18}>
                        <Upload
                            name="image"
                            listType="picture"
                            fileList={fileList}
                            beforeUpload={() => false}
                            onChange={handleFileChange}
                            maxCount={1}
                        >
                            <Button className={styles.uploadbutton} icon={<UploadOutlined />}>CHOOSE YOUR FILES</Button>
                        </Upload>
                    </Col>
                </Row>
                <Row>
                    <Col md={6} lg={6}>
                        <label className={styles.EditBlog_L1}>DESCRIPTION:</label>
                    </Col>
                    <Col md={18} lg={18}>
                        <TextArea
                            className={styles.TextArea}
                            rows={4}
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </Col>
                </Row>
                <div className={styles.ContentContainer}>
                    <label className={styles.EditBlog_L3}>CONTENT:</label>
                    <ReactQuill
                        className={styles.editor}
                        value={content}
                        onChange={(value) => setContent(value)}
                        modules={{
                            toolbar: [
                                [{ header: [1, 2, false] }],
                                ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                                [{ list: 'ordered' }, { list: 'bullet' }],
                                ['link', 'image'],
                                ['clean'],
                            ],
                        }}
                        formats={['header', 'bold', 'italic', 'underline', 'strike', 'blockquote', 'list', 'bullet', 'link', 'image']}
                    />
                </div>
                <Button className={styles.UpdateButton} onClick={handleUpdate}>
                    SUBMIT
                </Button>
            </div>
        </div>
    );
};

export default CreateCaseStudies;
