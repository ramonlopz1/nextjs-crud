import styles from '../styles/Crud.module.css'
import { useEffect, useState } from "react";
import { post, put, get, del } from "../services/UserServices";

export default function UserList() {

    const [name, setName] = useState([])
    const [age, setAge] = useState([])
    const [id, setId] = useState([])
    const [list, setList] = useState([])

    useEffect(() => {
        get().then(users => setList(users))
    }, [list])

    const renderUsers = () => {
        return list.map((l, idx) => {
            return (
                <div key={idx} className={styles.line}>
                    <div className={styles.linecontent}>
                        <span>name:</span>
                        <span>{l.name}</span>
                    </div>
                    <div className={styles.linecontent}>
                        <span>age:</span>
                        <span>{l.age}</span>
                    </div>
                </div>
            )
        })
    }

    return (
        <div className={styles.containers}>
            <div className={styles.box1}>
                <input className={styles.input} type="text" name="id" id="" onChange={e => setId(e.target.value)} placeholder="Id" />
                <input className={styles.input} type="text" name="name" id="" onChange={e => setName(e.target.value)} placeholder="Name" />
                <input className={styles.input} type="number" name="age" id="" onChange={e => setAge(e.target.value)} placeholder="Age" />

                <div className={styles.buttons}>
                    <button onClick={() => post({ name, age })} >Send</button>
                    <button onClick={() => put(id, { name, age })} >Put</button>
                    <button onClick={() => del(id)} >Del</button>

                </div>

            </div>
            <div className={styles.box2}>
                <h2>Lista</h2>
                {renderUsers()}
            </div>
        </div>
    )
}