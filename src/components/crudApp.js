import React, { useState } from 'react';
import CrudForm from './crudForm';
import CrudTable from './crudTable';

const initialDb = [
    {
        id: 1,
        name: 'Seiya',
        constellation: 'Pegaso'
    },

    {
        id: 2,
        name: 'Shiryu',
        constellation: 'Dragon'
    },

    {
        id: 3,
        name: 'Hyoga',
        constellation: 'Cisne'
    },

    {
        id: 4,
        name: 'Shun',
        constellation: 'Andromeda'
    },

    {
        id: 5,
        name: 'Ikki',
        constellation: 'Phoenix'
    }
];

function CrudApp(){
    const [db, setDb] = useState(initialDb);
    const [dataToEdit, setDataToEdit] = useState(null);

    const CreateData = (data) => {
        data.id = Date.now();
        setDb([...db, data]);
    }

    const UpdateData = (data) => {
        let newData = db.map((el) => el.id === data.id ? data : el);
        setDb(newData);
    }

    const DeleteData = (id) => {
        let isDelete = window.confirm(`Are you sure yu wanna delete ${id}`);

        if(isDelete){
            let newData = db.filter(el => el.id !== id);
            setDb(newData);
        } else {
            return;
        }
    }

    return(
        <>
            <h2>CRUD App</h2>
            <CrudForm 
            CreateData={CreateData} 
            UpdateData={UpdateData}
            dataToEdit={dataToEdit}
            setDataToEdit={setDataToEdit}
            />
            <CrudTable 
            data={db} 
            DeleteData={DeleteData} 
            setDataToEdit={setDataToEdit} />
        </>
    );
}

export default CrudApp;

