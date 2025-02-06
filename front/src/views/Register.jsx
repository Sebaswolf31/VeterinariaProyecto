
import * as Yup from 'yup';

import { createUser } from '../services/apiCalls';

import { Formik, Form, Field, ErrorMessage } from 'formik';



import {
    FormContainer,
    FormTitle,
    StyledForm,
    StyledLabel,
    StyledField,
    ErrorText,
    SubmitButton
  } from '../styles/FormStyles';

// const validate = (values) => {

//         const errors = {};
//         if (!values.email) {
//           errors.email = 'Required';
//         } else if (
//  //         !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
//         ) {
//           errors.email = 'Invalid email address';
//         }
//         return errors;
//       }

const SignupSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Nombre demasiado corto!')
      .max(50, 'Nombre demasiado largo!')
      .required('El campo nombre es requerido'),

    email: Yup.string().email('E.mail invalido').required('El campo Correo Electronico es requerido'),
      
    birthdate: Yup.date()
      .max('2007-01-01' , "Debes ser mayor de edad")
      .required('El campo Fecha de Nacimiento es requerido'),
      

      nDni: Yup.string()
      .min(5, 'N° DNI demasiado corto!')
      .max(10, 'N° DNI  demasiado largo!')
      .required('El campo N° DNI es requerido'),

      username: Yup.string()
      .min(5, 'usuario demasiado corto!')
      .max(50, 'usuario demasiado largo!')
      .required('El campo Usuario es requerido'),

      password: Yup.string()
      .min(8,'password demasiado corto!' )
      .required('El campo Contraseña es requerido'),

    });

const Register = () => {
    
    const initialValues = { 
        name: '',
        email: '',
        birthdate: '' ,
        nDni: '' ,
        username: '',
        password: '',
    };
        
    
    const handleSubmit = async (values, { setSubmitting, resetForm, setErrors }) => {
        try {
            const response = await createUser(values);
            alert(response.message || 'Usuario creado con éxito');
            resetForm();  
        } catch (error) {
            const errorMessage = error.response?.data?.message || 'Ocurrió un error al registrar el usuario';
            setErrors({ general: errorMessage });
        } finally {
            setSubmitting(false);
        }
    };

      
  return ( 
    <FormContainer>
    <FormTitle>Registro de Usuario</FormTitle>
    <Formik
      initialValues={initialValues}
      validationSchema={SignupSchema} 
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, errors }) => (
        <StyledForm as={Form}>
        {errors.general && <ErrorText>{errors.general}</ErrorText>}
          <StyledLabel>Nombre:</StyledLabel>
          <StyledField as={Field} type="text" name="name" />
          <ErrorMessage name="name" component={ErrorText} />

          <StyledLabel>Correo Electrónico:</StyledLabel>
          <StyledField as={Field} type="email" name="email" />
          <ErrorMessage name="email" component={ErrorText} />

          <StyledLabel>Fecha de Nacimiento:</StyledLabel>
          <StyledField as={Field} type="date" name="birthdate" />
          <ErrorMessage name="birthdate" component={ErrorText} />

          <StyledLabel>N° DNI:</StyledLabel>
          <StyledField as={Field} type="number" name="nDni" />
          <ErrorMessage name="nDni" component={ErrorText} />

          <StyledLabel>Nombre de Usuario:</StyledLabel>
          <StyledField as={Field} type="text" name="username" />
          <ErrorMessage name="username" component={ErrorText} />

          <StyledLabel>Contraseña:</StyledLabel>
          <StyledField as={Field} type="password" name="password" />
          <ErrorMessage name="password" component={ErrorText} />

          <SubmitButton type="submit" disabled={isSubmitting}>
            Registrarse
          </SubmitButton>
        </StyledForm>
      )}
    </Formik>
  </FormContainer>
) };

export default Register;