import React, { useState, useEffect } from 'react';
import './Main.css'
import EditUser from '../../Components/EditUser/EditUser'
import Search from '../../Components/Search/Search'
import axios from '../../axios';
import { Item } from '../../interface/interface'
import AddTask from '../../Components/AddTask/AddTask'

const NEW_MANGMENT = 'משימה חדשה';
const OPARTION = ' פעולות  ';
const DATE = ' תאריך  ';
const PHONE = ' טלפון  ';
const MAIL = ' מייל  ';
const USER_NAME = ' שם משתמש  ';


const List: React.FC = props => {

    const [ifNewTask, setIfNewTask] = useState<boolean>(false);
    const [arrData, setArr] = useState<Item[]>([]);
    const [search, setSearch] = useState<string>('');


    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        axios.get('/users')
            .then((res: any) => {
                setArr(res.data.results)
            })
            .catch((e: any) => {
                console.log(e)
            })
    }

    const deleteTaskFromArr = (id: number) => {
        const updatedArr = arrData.filter(x => x.id !== id);
        setArr(updatedArr)
    }

    const newTask = () => {
        setIfNewTask(!ifNewTask)
    }

    return (
        <div>
            <Search setSearch={setSearch} />
            <div className='add-section'>
                <button onClick={() => newTask()} className='add-task-btn'><span> {NEW_MANGMENT}</span></button>
                {ifNewTask ?
                    <AddTask fetchData={fetchData} />
                    : ''}
            </div>

            <a className='number-tasks'>{`Number of Tasks ${arrData.length}`}</a>
            <div className='main-table'>
                <table >
                    <thead>
                        <tr className='table-tr'>
                            <th>{USER_NAME}</th>
                            <th>{MAIL}</th> 
                            <th>{PHONE}</th>
                            <th>{DATE} </th>
                            <th>{OPARTION}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                          arrData.filter(val => {
                                return val.name.includes(search)
                            })
                                .map((val: Item) => {
                                    return (
                                        <EditUser key={val.id}
                                            deleteTaskFromArr={deleteTaskFromArr}
                                            id={val.id}
                                            name={val.name}
                                            email={val.email}
                                            phone={val.phone}
                                            date={val.date}
                                        />
                                    )
                                })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default List;