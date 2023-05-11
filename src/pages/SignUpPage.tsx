import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword  } from "firebase/auth";
import { getUser } from "redux/slices/userSlice";
import { MForm } from '../components/authorization/form';
import { motion } from 'framer-motion';
import { elementAnimation } from "components/common/animation/animation";
import { getError } from "redux/slices/authErrorSlice";

const SignUpPage: React.FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleRegister = (email: any, pass: any) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, pass)
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
        <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ amount: 0.3, once: true }}
        >
            <MForm custom={1} variants={elementAnimation} title='Sign Up' handleClick={handleRegister} linkText="If you already have an account " linkName='Sign In' link='/signin'/>
        </motion.div>
    )
}

export default SignUpPage;