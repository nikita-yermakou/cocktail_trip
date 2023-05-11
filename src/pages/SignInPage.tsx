import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getUser } from "redux/slices/userSlice";
import { MForm } from '../components/authorization/form';
import { motion } from 'framer-motion';
import { elementAnimation } from "components/common/animation/animation";
import { useAppDispatch, useAppSelector } from "components/common/hooks";
import { getError } from "redux/slices/authErrorSlice";

const SignInPage: React.FC = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const {error} = useAppSelector(state => state.error);

    const handleLogin = (email: any, pass: any) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, pass)
        .then(({user}: any) => {
            dispatch(
                getUser({
                    email: user.email,
                    token: user.accessToken,
                    id: user.uid,
                    check: auth.currentUser
                })
            );
            navigate('/');
        })
        .catch(error => {
            console.log(error.code);
            dispatch(
                getError({
                    error: error.code
                })
            );
        })
    }

    return(
        <>
            <motion.div
                initial='hidden'
                whileInView='visible'
                viewport={{ amount: 0.3, once: true}}
            >
                <MForm custom={1} variants={elementAnimation} title='Sign In' handleClick={handleLogin} linkText="If you don't have an account " linkName='Sign Up' link='/signup'/>
            </motion.div>
        </>
    )
}

export default SignInPage;