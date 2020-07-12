import React, { useState, useEffect } from 'react';
import { route } from '../../route'
import { formatDate } from '../../utils/data'
import { isNameValid, isEmailValid, isPhoneValid, checkInputsValidation } from '../../utils/data'

import edit from '../../asset/images/edit.png'
import deleteImg from '../../asset/images/delete.png'
import axios from '../../axios'
import './EditUser.css'
interface EditProps {
    name: string
    email: string
    phone: string
    date: string
    id: number
    deleteTaskFromArr: (id: number) => void
    key: number
}

const EditUser: React.FC<EditProps> = props => {

    const [ifEdit, setIfEdit] = useState(false);
   
    let [name, setName] = useState<string>('');
    let [email, setEmail] = useState<string>('');
    let [phone, setPhone] = useState<string>('');
    let [date, setdate] = useState<string>('');

    useEffect(() => {
        setName(props.name)
        setEmail(props.email)
        setPhone(props.phone)
        setdate(props.date)
    }, []);

    const updateTable = async () => {

        let validation = checkInputsValidation(name, email, phone);
        if (validation) {
            let date = formatDate();
            let id = props.id;
            const a = await fetch(route('/users'), {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, email, phone, date, id })
            }).then(res => res.json())
                .then(res => {
                    if (res.auth) {
                        setIfEdit(!ifEdit)
                        alert('Edit succsfully In SQL')
                    } else {
                        alert('Server isuues')
                    }
                })
                .catch(error => console.error('Error:', error));
        }

    }

    const deleteTask = async (id: number) => {
        axios.delete('/users', {
            headers: {
                Authorization: 'authorizationToken'
            },
            data: { id }
        }).then((res: any) => {
            props.deleteTaskFromArr(id)
        });
    }

    return (
        <tr>
            <th>
                {ifEdit ? <input className={`input-edit ${isNameValid(name)}`} onChange={(e) => setName(e.target.value)}
                    value={name} type="text" /> : <label >{name}</label>}
            </th>
            <th>
                {ifEdit ? <input className={`input-edit  ${isEmailValid(email)}`} onChange={(e) => setEmail(e.target.value)}
                    value={email} type="text" /> : <label >{email}</label>}
            </th>
            <th>
                {ifEdit ? <input className={`input-edit  ${isPhoneValid(phone)}`} onChange={(e) => setPhone(e.target.value)}
                    value={phone} type="text" /> : <label >{phone}</label>}
            </th>
            <th>
                <label >{date}</label>
            </th>
            <th>
                <div className='opartion-btns'>
                    {!ifEdit ? <img onClick={() => setIfEdit(true)} style={{ width: '35px' }} src={edit} alt="" />
                        :
                        <button onClick={() => updateTable()} className='send-btn'>Send</button>}
                    {!ifEdit ? '' : <button onClick={() => setIfEdit(!ifEdit)} className='send-btn'>Cancel</button>}
                    <img onClick={() => deleteTask(props.id)} src={deleteImg} alt="Smiley" />
                </div>
            </th>
        </tr>
    )
}
export default EditUser;