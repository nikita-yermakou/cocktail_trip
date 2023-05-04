import { forwardRef } from "react";
import { FormError, SendBtn } from "./form.styles";
import { FormContainer, FormField, FormFieldContainer, FormLink, FormRedirect, FormTitle } from "./form.styles";
import { motion } from "framer-motion";
import { useErrorType, useInput } from "components/common/validationHooks";
import { useAppSelector } from "components/common/hooks";

const Form = forwardRef(({title, handleClick, linkText, linkName, link}: any, ref: any) => {

    const emailInput = useInput('', {isEmpty: true, isEmail: true});
    const passInput = useInput('', {isEmpty: true, isPass: true, minLength: 8});
    const {error} = useAppSelector(state => state.error);
    const textError = useErrorType(error);

    return(
        <FormContainer ref={ref}>
            <FormTitle>{title}</FormTitle>
            <FormFieldContainer>
                Email
                <FormField type='email' name='email' value={emailInput.value} onChange={(e) => emailInput.onChange(e)} onBlur={(e) => emailInput.onBlur(e)} onFocus={(e) => emailInput.onFocus()} placeholder="Email" required/>
            </FormFieldContainer>
            <FormError>{
            emailInput.isDirty && emailInput.textError
            }
            </FormError>
            <FormFieldContainer>
                Password
                <FormField type='password' name='password' value={passInput.value} onChange={(e) => passInput.onChange(e)} onBlur={(e) => passInput.onBlur(e)} onFocus={(e) => passInput.onFocus()} placeholder="Password" required/>
            </FormFieldContainer>
            <FormError>{passInput.isDirty && passInput.textError}</FormError>
            <SendBtn disabled={!emailInput.isValid || !passInput.isValid} onClick={() => handleClick(emailInput.value, passInput.value)}>{title}</SendBtn>
            <FormRedirect>
                {linkText}
                <FormLink to={link}>{linkName}</FormLink>
            </FormRedirect>
            <FormError>{error && textError}</FormError>
        </FormContainer>
    );
})

export const MForm = motion(Form);
export default Form;