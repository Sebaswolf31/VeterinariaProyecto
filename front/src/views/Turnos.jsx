
import Swal from 'sweetalert2';
import * as Yup from 'yup';

import { createAppointment } from '../services/apiCalls';
import { useAppointmentStates } from "../Context/Context"
import { Formik, Form, Field, ErrorMessage } from 'formik';
import {  BannerButton } from "../styles/BannerStyles";
import { Link } from 'react-router-dom'
import { routes } from '../utils/routes';


import {
    FormContainer,
    FormTitle,
    StyledForm,
    StyledLabel,
    StyledField,
    ErrorText,
    SubmitButton
  } from '../styles/FormStyles';



  const validateTime = (value) => {
    if (!value) return "El campo Hora es requerido";

    const [hours, minutes] = value.split(":").map(Number);
    if (hours < 8 || hours >= 17) {
        return "El horario debe estar entre 08:00 AM y 05:00 PM";
    }

    return undefined;
};


const validateDate = (value) => {
    if (!value) return "El campo fecha es requerido";

    const selectedDate = new Date(value);
    if (selectedDate.getDay() === 0) {
        return "No se pueden agendar turnos los domingos";
    }

    const today = new Date();
    if (selectedDate < today) {
        return "No se pueden agendar turnos para días anteriores a la fecha actual";
    }

    return undefined;
};




  const SignupSchema = Yup.object().shape({
    date: Yup.string()
    .required('El campo fecha es requerido')
    .test("no-domingo", "No se pueden agendar turnos los domingos", (value) => {
        if (!value) return false;
        const selectedDate = new Date(value + "T00:00:00"); 
        return selectedDate.getDay() !== 0; 
    })
    .test("no-pasado", "No se pueden agendar turnos para días anteriores a la fecha actual", (value) => {
        if (!value) return false;
        const today = new Date().setHours(0, 0, 0, 0);
        const selectedDate = new Date(value).setHours(0, 0, 0, 0);
        return selectedDate >= today;
    }),

    time: Yup.string()
        .required('El campo Hora es requerido')
        .test("horario-valido", "El horario debe estar entre 08:00 AM y 05:00 PM", (value) => {
            if (!value) return false;
            const [hours] = value.split(":").map(Number);
            return hours >= 8 && hours < 17;
        }),


    description: Yup.string()
        .required('El campo Descripción es requerido'),
});

const CreateAppointment = () => {
    const { user } = useAppointmentStates();

    const initialValues = { 
        date: '',
        time: '',
        description: '',
    };

    const handleSubmit = async (values, { resetForm, setErrors }) => {
        if (!user.login || !user.user?.id) {
            setErrors({ general: "Usuario no autenticado" });
            return;
        }

        try {
            const newAppointment = { ...values, userId: user.user.id };
            await createAppointment(newAppointment);
            
            Swal.fire({
                title: "Turno Agendado",
                text: "Tu turno se ha registrado con éxito.",
                icon: "success",
                confirmButtonText: "OK",
                timer: 3000,
                timerProgressBar: true
            });

            resetForm();
        } catch (error) {
            console.error("Error creando el turno:", error);
            
            Swal.fire({
                title: "Error",
                text: "Hubo un problema al agendar el turno. Intenta de nuevo.",
                icon: "error",
                confirmButtonText: "Entendido"
            });

            setErrors({ general: "Error al agendar el turno. Intenta de nuevo." });
        }
    };



    return (
        <FormContainer>
            <FormTitle>Registro de Turnos</FormTitle>
            <Formik
                initialValues={initialValues}
                validationSchema={SignupSchema}
                onSubmit={handleSubmit}
            >
                {({ isSubmitting, errors }) => (
                    <StyledForm as={Form}>
                        {errors.general && <ErrorText>{errors.general}</ErrorText>}

                        <StyledLabel>Fecha:</StyledLabel>
                        <StyledField as={Field} type="date" name="date" />
                        <ErrorMessage name="date" component={ErrorText} />

                        <StyledLabel>Hora:</StyledLabel>
                        <StyledField as={Field} type="time" name="time" />
                        <ErrorMessage name="time" component={ErrorText} />

                        <StyledLabel>Descripción:</StyledLabel>
                        <StyledField as={Field} type="text" name="description" />
                        <ErrorMessage name="description" component={ErrorText} />

                        <SubmitButton type="submit" disabled={isSubmitting}>
                            Pedir Turno
                        </SubmitButton>
                    </StyledForm>
                )}
            </Formik>


          
             
               <Link to={routes.misTurnos}><BannerButton cancel href="#"  > Ver Turnos </BannerButton></Link>
            

        </FormContainer>

        


    );


    
};

export default CreateAppointment;