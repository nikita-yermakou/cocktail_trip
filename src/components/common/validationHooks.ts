import { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './hooks';
import { removeError } from 'redux/slices/authErrorSlice';

export const useInput = (initialValue: string, validations: any) => {
    const [value, setValue] = useState(initialValue);
    const [isDirty, setDirty] = useState(false);
    const dispatch = useAppDispatch();

    const onChange = (e: any) => {
        setValue(e.target.value);
    }

    const onBlur = (e: any) => {
        setDirty(true);
    }

    const onFocus = () => {
        dispatch(removeError());
    }

    const valid = useValidation(value, validations);

    return {value, isDirty, onChange, onBlur, onFocus, ...valid}
}

const useValidation = (value: any, validations: any) => {
    const [isEmpty, setEmpty] = useState<boolean>(true);
    const [lengthPassError, setLengthPassError] = useState<any>(false);
    const [emailError, setEmailError] = useState(false);
    const [passError, setPassError] = useState(false);
    const [textError, setTextError] = useState<string | null>(null);
    const [isValid, setValid] = useState(false);

    useEffect(() => {
        for (const validation in validations) {
            switch(validation) {
                case 'isEmpty': {
                    if (value) {
                        setEmpty(false);
                    } else {
                        setEmpty(true);
                    }
                    break;
                }
                case 'minLength': {
                    if (value.length < validations[validation] && value.length > 0) {
                        setLengthPassError(true);
                        setTextError('Password length must be more than 8 symbols');
                    } else {
                        setLengthPassError(false);
                    }
                    break;
                }
                case 'isPass': {
                    const regexPass = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;

                    if(regexPass.test(String(value).toLowerCase()) && value.length >= validations[validation]) {
                        setPassError(false);
                    } else {
                        setPassError(true);
                        value ? setTextError('Password must contain a number, a small and a large letters, a special character') : setTextError('Field is empty');;
                    }
                    break;
                }
                case 'isEmail': {
                    const regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

                    if(regexEmail.test(String(value).toLowerCase())) {
                        setEmailError(false);
                    } else {
                        setEmailError(true);
                        value ? setTextError('Email is invalid'): setTextError('Field is empty');
                    }
                    break;
                }
            }
        }
    }, [value]);

    useEffect(() => {
        if (isEmpty || lengthPassError || emailError || passError) {
            setValid(false);
        } else {
            setValid(true);
            setTextError(null);
        }
    }, [isEmpty, lengthPassError, emailError, passError]);

    return {textError, isValid}
}

export const useErrorType = (error: string) => {
    const [textError, setTextError] = useState('');

    useEffect(() => {
        switch(error) {
            case 'auth/wrong-password': 
                setTextError('You entered wrong password');
                break;
            case 'auth/email-already-in-use': 
                setTextError('This user already exists');
                break;
            case 'auth/user-not-found': 
                setTextError('This user not found');
                break;
            case 'auth/too-many-requests': 
                setTextError('You have made too many requests');
                break;
        }
    }, [error]);

    return textError;
}