import React from "react";
import styles from '../styles/Albumdetail.module.css'

export default function Albumdetail(){
    return(
        <div className={styles.container}>
            <h2 className={styles.title}>Albumdetail Page</h2>
            <div className={styles.details}>
                <li className={styles.list}>
                <label className={styles.label}>Name:</label>
                <p className={styles.value}>Lorem</p>
                </li>
                <li className={styles.list}>
                <label className={styles.label}>Email:</label>
                <p className={styles.value}>lorem@example.com</p>
                </li>
            </div>
        </div>
    )
}