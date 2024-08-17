'use client';
import React, { useEffect, useState } from 'react';
import { Input, Button, Table, Modal, message, Spin } from 'antd';
import styles from './CaseStudies.module.css';
import Sidebar from '../../Sidebar/Sidebar';
import { DeleteOutlined, EditOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import api from '../../../axiosInterceptor/axiosInterceptor';
import { useRouter } from 'next/navigation';

const { Search } = Input;
const { confirm } = Modal;

const CaseStudies = () => {
  const router = useRouter();
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [tokenAvailable, setTokenAvailable] = useState(true);
  const [loading, setLoading] = useState(false);

  const showDeleteConfirm = (record) => {
    confirm({
      title: 'Are you sure you want to delete this blog?',
      icon: <ExclamationCircleOutlined />,
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk() {
        handleDelete(record);
        message.success('Blog Deleted');
      },
    });
  };

  const columns = [
    {
      title: 'IMAGE',
      dataIndex: 'image',
      width: 50,
      render: (image) => <img src={image} alt="blog-image" style={{ maxWidth: '100%', maxHeight: '100%' }} />,
    },
    {
      title: 'TITLE',
      dataIndex: 'title',
      width: 60,
    },
    {
      title: 'DESCRIPTION',
      dataIndex: 'description',
      width: 80,
    },
    {
      title: 'DATE BUTTON',
      dataIndex: 'DateButton',
      width: 50,
    },
    {
      title: 'CREATED AT',
      dataIndex: 'CreatedAt',
      width: 40,
    },
    {
      title: 'UPDATED AT',
      dataIndex: 'updatedAt',
      width: 40,
    },
    {
      title: 'ACTIONS',
      dataIndex: 'actions',
      width: 30,
      render: (_, record) => (
        <>
          <Button style={{ marginBottom: '15%' }} onClick={() => handleUpdate(record)}>
            <EditOutlined />
          </Button>
          <Button onClick={() => showDeleteConfirm(record)}>
            <DeleteOutlined />
          </Button>
        </>
      ),
    },
  ];

  const UpdateData = async () => {
    try {
      setLoading(true);

      const response = await api.get('/updateblog');
      const result = response.data;
      setData(result);
      setFilteredData(result);
    } catch (error) {
      console.error('Error data:', error);
      setTokenAvailable(false);
    } finally {
      setLoading(false); // Set loading to false when API call completes
    }
  };

  const handleUpdate = (record) => {
    router.push(`/admin/dashboard/${record._id}`);
  };

  const handleDelete = async (record) => {
    try {
      setLoading(true); // Set loading to true when starting API call

      await api.delete(`/blogs/${record._id}`);
      const updatedData = data.filter((item) => item._id !== record._id);
      setData(updatedData);
      setFilteredData(updatedData);
    } catch (error) {
      console.error('Error deleting blog:', error);
    } finally {
      setLoading(false); // Set loading to false when API call completes
    }
  };

  const fetchData = async () => {
    try {
      setLoading(true); // Set loading to true when starting API call
      router.push('./create-case-studies');
    } catch (error) {
      console.error('Error data:', error);
      setTokenAvailable(false);
    } finally {
      setLoading(false); // Set loading to false when API call completes
    }
  }; 
  useEffect(() => { document.body.style.backgroundColor = '#fff' }, [])
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      setTokenAvailable(false);
    } else {
      UpdateData();
    }
  }, []);

  const onSearch = (value) => {
    const filtered = data.filter((item) => item.title.toLowerCase().includes(value.toLowerCase()));
    setFilteredData(filtered);
  };
  if (!tokenAvailable) {
    router.push('/admin/login');
    return null;
}

  return (
    <div>
      <Sidebar />
      <div>
        <h1 className={styles.heading}>CASE STUDIES</h1>
        <Search
          placeholder="input search text"
          allowClear
          enterButton
          className={styles.searchbar}
          size="large"
          onSearch={onSearch}
        />
          <>
            <Table
              className={styles.Table}
              columns={columns}
              dataSource={filteredData}
              scroll={{ y: 280 }}
              loading={loading}
            />
            <Button onClick={fetchData} className={styles.button}>
              ADD CASE STUDY
            </Button>
          </>
      </div>
    </div>
  );
};

export default CaseStudies;
