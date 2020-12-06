import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initializeForm } from '../../modules/auth';
import AuthForm from '../../components/auth/AuthForm';


const RegisterForm = () => {
    const dispatch = useDispatch();
    const { form } = useSelector(({ auth }) => ({
        form: auth.register
    })); //상태가 변경되지 않으면 리렌덩링 x 

    //인풋 변경 이벤트 핸들러
    const onChange = e => {
        const { value, name } = e.target;
        dispatch(
            changeField({
                form: 'register',
                key: name,
                value
            })
        );
    };

    const onSubmit = e => {
        e.preventDefault();
        //구현 예정
    };

    // 컴포넌트가 처음 렌더링될 때 form을 초기화 
    useEffect(() => {
        dispatch(initializeForm('register'));
    }, [dispatch]);

    return (
        <AuthForm
            type="register"
            form={form}
            onChange={onChange}
            onSubmit={onSubmit}
        />
    );
};

export default RegisterForm;
