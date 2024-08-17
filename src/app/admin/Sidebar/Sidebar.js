import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from '../Sidebar/Sidebar.module.css';
import { useRouter } from 'next/navigation';


function Sidebar() {
    const router = useRouter();

  const pathname = usePathname();
// utils/auth.js
  // Remove token from session/local storage

  const handleLogout = () => {
    localStorage.removeItem('token');
    router.push('/admin/login');
  };

  return (
    <>
      <nav className={styles.navbar}>
        <h1 className={styles.logo}>Sarfo</h1>
        <ul className={styles.list}>
          <li className={pathname === 'admin/dashboard/queries' ? styles.active : ''}>
            <Link href='./queries'>Contact Us</Link>
          </li>
          <li className={pathname === 'admin/dashboard/case-studies' ? styles.active : ''}>
            <Link href='./case-studies'>Case Studies</Link>
          </li>
          <li>
            <button className={styles.logoutbtn} onClick={handleLogout}>Logout</button>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Sidebar;
