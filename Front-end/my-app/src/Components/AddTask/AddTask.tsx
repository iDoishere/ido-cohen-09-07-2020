import React, { useState } from 'react';
import { formatDate } from '../../utils/data'
import axios from '../../axios'
import { IaddTask } from '../../interface/interface'
import { isNameValid, isEmailValid, isPhoneValid,checkInputsValidation } from '../../utils/data'
import './AddTask.css'
const SEND_MANGMENT = 'שלח';



const AddTask: React.FC<IaddTask> = props => {

    const [name, setName] = useState<string>("");
    const [phone, setPhone] = useState<string>("");
    const [email, setEmail] = useState<string>("");

  

    const InsertIntoSql = async (name: string, email: string, phone: string) => {

        let validation = checkInputsValidation(name,email,phone);
        if (validation) {
            let date = formatDate();
            axios.post(`/users`, { name, email, phone, date })
                .then((res: any) => {
                    if (res.data.auth) {
                        props.fetchData();
                    } else {
                        alert('Server isuee , cant add user to SQL');
                    }
                })
                .catch((e: any) => {
                    console.log(e)
                })}
    }

    return (
        <div className='input'>
            <input className={`add-input ${isNameValid(name)}`} type="text" placeholder='name'
                onChange={e => setName(e.target.value)} />

            <input className={`add-input ${isEmailValid(email)}`} type="text" placeholder='email'
                onChange={e => setEmail(e.target.value)} />

            <input className={`add-input ${isPhoneValid(phone)}`} type="text" placeholder='phone'
                onChange={e => setPhone(e.target.value)} />
            <button onClick={() => InsertIntoSql(name, email, phone)} className='send-task-btn'>
                <span> {SEND_MANGMENT}</span> </button>
        </div>
    )
}
export default AddTask;

