
import * as Yup from 'yup';
import { login } from "../services/apiCalls"
import Swal from 'sweetalert2'


import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useAppointmentStates } from "../Context/Context"
import { useNavigate } from 'react-router-dom';



import {
    FormContainer,
    FormTitle,
    StyledForm,
    StyledLabel,
    StyledField,
    ErrorText,
    SubmitButton
  } from '../styles/FormStyles';



  const SignupSchema = Yup.object().shape({
   
        username: Yup.string()
        .min(5, 'usuario demasiado corto!')
        .max(50, 'usuario demasiado largo!')
        .required('El campo Nombre Usuario es requerido'),
  
        password: Yup.string()
        .min(7,'password demasiado corto!' )
        .required('El campo Contraseña es requerido'),
  
      });
  


const Login = () => { 

    const initialValues = { 
        
        username: '',
        password: '',
    }
    
    const { setUser } = useAppointmentStates();

    const navigate = useNavigate();

    
     const handleSubmit = async (values, { setSubmitting, resetForm }) => {
        try {
            
            const authData = await login(values);
            console.log(authData)
            setUser({
                login: true, 
                user: authData.user, 
            });
    
            Swal.fire({
                title: `¡Bienvenido ${authData.user.name}!`,  
                text: "Ingreso con éxito",
                icon: "success",
                showCancelButton: true,
                confirmButtonText: 'Ingresar',
                cancelButtonText: 'Seguir en el login',
                draggable: true,
            }).then((result) => {
                if (result.isConfirmed) {
                    setTimeout(() => {
                        navigate("/mis-turnos");
                    }, 500);  
                }
            });
    
            resetForm();
        } catch (error) {
            console.error("Error en el login:", error.message);
        } finally {
            setSubmitting(false);
        }
    };
    
    return ( 
    <FormContainer>
    <FormTitle>Ingreso De Usuario</FormTitle>
    <Formik
        initialValues={initialValues}
        validationSchema={SignupSchema} 
        onSubmit={handleSubmit}
    >
        {({ isSubmitting }) => (
        <StyledForm as={Form}>
            
            <StyledLabel>Nombre de Usuario:</StyledLabel>
            <StyledField as={Field} type="text" name="username" />
            <ErrorMessage name="username" component={ErrorText} />

            <StyledLabel>Contraseña:</StyledLabel>
            <StyledField as={Field} type="password" name="password" />
            <ErrorMessage name="password" component={ErrorText} />

            <SubmitButton type="submit" disabled={isSubmitting}>
            Ingresar
            </SubmitButton>
        </StyledForm>
        )}
    </Formik>
    </FormContainer>
) };


    
    export default Login;

