import React from 'react';
import { useForm } from 'react-hook-form';
import { useUpdateQCUserMutation } from '../../../redux/features/task/taskApi';

const ABC = () => {
const [updateQCUser] = useUpdateQCUserMutation();


    const {register, handleSubmit} = useForm();
const abc = 5;
    const onSubmit = (data) => {
        console.log(data);
        updateQCUser({status:data, abc})
        console.log({status:data, abc})
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" {...register("is_checked")} />
            <button type='submit'>Submit</button>
            
        </form >
    );
};

export default ABC;