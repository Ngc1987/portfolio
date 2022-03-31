import React, { useRef, useState } from 'react';
import "./ContactForm.scss";
import { useForm, SubmitHandler } from 'react-hook-form';
import { ToastContainer, toast, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import emailjs, { init } from '@emailjs/browser';

type IFormInput = {
  firstName: String;
  lastName: String;
  email: String;
  numberPhone: String;
  message: String;
}
type Errors = {
  firstName: string | null;
  lastName: string | null;
  email: string | null;
  numberPhone: string | null;
  message: string | null;
}


const ContactForm:React.FC = () => {

	// Initialize emailJs 
	init("user_Ch8zKqPzcFNo8oW0WqNgg");


	const firstNameLight= useRef() as React.MutableRefObject<HTMLDivElement>;
	const lastNameLight= useRef() as React.MutableRefObject<HTMLDivElement>;
	const emailLight= useRef() as React.MutableRefObject<HTMLDivElement>;
	const numberPhoneLight= useRef() as React.MutableRefObject<HTMLDivElement>;
	const messageLight= useRef() as React.MutableRefObject<HTMLDivElement>;

	// Initialize React Hook Form
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors }
	} = useForm<IFormInput>();

	// State to enable or disable the form
	const [disabled, setDisabled] = useState<boolean>(false);

	// State for the errormessages for each form input
	const [errorMessages, setErrorMessages] = useState<Errors>({
		firstName: null,
		lastName: null,
		email: null,
		numberPhone: null,
		message: null
	})

	// State to show or no the error messages
	const [showErrorMessages, setShowErrorMessages] = useState<boolean>(false);

	// console.log(firstNameLight)

	// Function that displays a success toast on bottom right of the page when form submission is successful
	const toastifySuccess = ():void => {
		toast.success('Your message has been successfully sent ! 👽', {
			position: 'top-center',
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: false,
			transition: Flip,
			toastId: 'notifyToast'
		});
	};
	

	// Function to take datas and send on an email
	const onSubmit: SubmitHandler<IFormInput> = async (data) => {

		
		if(errorMessages.firstName || errorMessages.lastName || errorMessages.email || errorMessages.numberPhone || errorMessages.message){
			setShowErrorMessages(true);
			return;
		}else {
			const { firstName, lastName, email, message, numberPhone } = data;
	
			try {
				// Disable form while processing submission
				setDisabled(true);
				
				// Define template params
				const templateParams = {
					firstName,
					lastName,
					email,
					numberPhone,
					message
				};
	
				// await emailjs.send(
				// 	"service_2if4nkm",
				// 	"template_3z23f6p",
				// 	templateParams,
				// 	"user_Ch8zKqPzcFNo8oW0WqNgg"
				// 	// process.env.REACT_APP_USER_ID
				// ).then(function (response) {
				// 	console.log('SUCCESS!', response.status, response.text);
				// }, function (error) {
				// 	console.log('FAILED...', error);
				// });
	
				setShowErrorMessages(false);
				// Reset contact form fields after submission
				reset();
				// Display success toast
				toastifySuccess();
				// Re-enable form submission
				setDisabled(false);
				firstNameLight.current.style.backgroundColor = "rgb(129, 148, 129)";
				firstNameLight.current.style.boxShadow = "none";
				lastNameLight.current.style.backgroundColor = "rgb(129, 148, 129)";
				lastNameLight.current.style.boxShadow = "none";
				emailLight.current.style.backgroundColor = "rgb(129, 148, 129)";
				emailLight.current.style.boxShadow = "none";
				numberPhoneLight.current.style.backgroundColor = "rgb(129, 148, 129)";
				numberPhoneLight.current.style.boxShadow = "none";
				messageLight.current.style.backgroundColor = "rgb(129, 148, 129)";
				messageLight.current.style.boxShadow = "none";
	
			} catch (e) {
				console.log(e);
			}
			
		}

	};


	const onInputChange = (event: any):void => {

		let light = event.target.nextElementSibling;

		if(event.target.name === "firstName" && event.target.value.length > 1) {
			light.style.backgroundColor= "#0f0";
			light.style.boxShadow = "0 0 5px #0f0, 0 0 10px #0f0, 0 0 20px #0f0,0 0 40px #0f0";
			setErrorMessages({
				...errorMessages,
				firstName: null
			})
		} else if(event.target.name === "firstName" && event.target.value.length < 2) {
			light.style.backgroundColor= "#f00";
			light.style.boxShadow = "0 0 5px #f00, 0 0 10px #f00, 0 0 20px #f00,0 0 40px #f00";
			setErrorMessages({
				...errorMessages,
				firstName: "Your first name must contains at least 2 characters"
			})
		}

		if(event.target.name === "lastName" && event.target.value.length > 1) {
			light.style.backgroundColor= "#0f0";
			light.style.boxShadow = "0 0 5px #0f0, 0 0 10px #0f0, 0 0 20px #0f0,0 0 40px #0f0";
			setErrorMessages({
				...errorMessages,
				lastName: null
			})
		} else if(event.target.name === "lastName" && event.target.value.length < 2){
			light.style.backgroundColor= "#f00";
			light.style.boxShadow = "0 0 5px #f00, 0 0 10px #f00, 0 0 20px #f00,0 0 40px #f00";
			setErrorMessages({
				...errorMessages,
				lastName: "Your first name must contains at least 2 characters"
			})
		}

		if(event.target.name === "email" && event.target.value.length > 3){
			
			const emailPattern = /^[a-zA-Z-_.]+@[a-zA-Z-]+\.[a-zA-Z]{2,6}$/;

			if(emailPattern.test(event.target.value)){
				light.style.backgroundColor= "#0f0";
				light.style.boxShadow = "0 0 5px #0f0, 0 0 10px #0f0, 0 0 20px #0f0,0 0 40px #0f0";
				setErrorMessages({
				...errorMessages,
				email: null
			})
				
			} else if(!emailPattern.test(event.target.value)) {
				light.style.backgroundColor= "#f00";
				light.style.boxShadow = "0 0 5px #f00, 0 0 10px #f00, 0 0 20px #f00,0 0 40px #f00";
				setErrorMessages({
				...errorMessages,
				email: "Please leave a valid mail address"
			})
			}
		}

		if(event.target.name === "email") {
			if(event.target.value !== "") {
				event.target.classList.add("isValid")
			}
			if(event.target.value === "") {
				event.target.classList.remove("isValid")
			}
		}
		
		if(event.target.name === "numberPhone" && event.target.value.length > 3){
			
			const phonePattern = /^[0-9+]{8,14}$/;
			if(phonePattern.test(event.target.value)){
				light.style.backgroundColor= "#0f0";
				light.style.boxShadow = "0 0 5px #0f0, 0 0 10px #0f0, 0 0 20px #0f0,0 0 40px #0f0";
				setErrorMessages({
					...errorMessages,
					numberPhone: null
					})
			} else if(!phonePattern.test(event.target.value)){
				light.style.backgroundColor= "#f00";
				light.style.boxShadow = "0 0 5px #f00, 0 0 10px #f00, 0 0 20px #f00,0 0 40px #f00";
				setErrorMessages({
					...errorMessages,
					numberPhone: "Your number phone must contain 8 to 14 digits"
				})
			}
		}
		
		if (event.target.name === "message" && event.target.value.length > 4) {
			light.style.backgroundColor= "#0f0";
			light.style.boxShadow = "0 0 5px #0f0, 0 0 10px #0f0, 0 0 20px #0f0,0 0 40px #0f0";
			setErrorMessages({
				...errorMessages,
				message: null
			})
		} else if(event.target.name === "message" && event.target.value.length < 5) {
			light.style.backgroundColor= "rgb(129, 148, 129)";
			light.style.boxShadow = "none";
			setErrorMessages({
				...errorMessages,
				message: "Please leave a message with at least 5 characters"
			})
		}
	}

	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)} className="form" data-testid="form">

				<div className="inputBox" >
					<input type="text"
						id="firstName"
						placeholder='First Name'
						required
						onInput={(e) => onInputChange(e)}
						{...register('firstName', {})}
					/>
					<div ref={firstNameLight} className="inputBox__light"></div>
					<label htmlFor="firstName">First Name</label>
				</div>
				{showErrorMessages && <span className='form__errorMsg'>{errorMessages.firstName}</span>}
				
				<div className="inputBox" >
					<input type="text"
						id="lastName"
						placeholder='Last Name'
						required
						maxLength={30}
						onInput={(e) => onInputChange(e)}
						{...register('lastName', {})} 
					/>
					<div ref={lastNameLight} className="inputBox__light"></div>
					<label htmlFor="lastName">Last Name</label>
				</div>
				{showErrorMessages && <span className='form__errorMsg'>{errorMessages.lastName}</span>}

				<div className="inputBox" >
					<input type="email"
						placeholder='E-mail'
						required
						onInput={(e) => onInputChange(e)}
						{...register('email', {})} 
					/>
					<div ref={emailLight} className="inputBox__light"></div>
					<label htmlFor="email" id="email">E-mail</label>
				</div>
				{showErrorMessages && <span className='form__errorMsg'>{errorMessages.email}</span>}

				<div className="inputBox" >
					<input type="text"
						id="numberPhone"
						placeholder='Number Phone'
						required
						onInput={(e) => onInputChange(e)}
						{...register('numberPhone', {})} 
					/>
					<div ref={numberPhoneLight} className="inputBox__light"></div>
					<label htmlFor="numberPhone">Number Phone</label>
				</div>
				{showErrorMessages && <span className='form__errorMsg'>{errorMessages.numberPhone}</span>}


				<div className="inputBox" >
					<textarea 
						id="message"
						rows={5}
						placeholder='Message'
						required
						onInput={(e) => onInputChange(e)}
						{...register('message', {})}
					/>
					<div ref={messageLight} className="inputBox__light"></div>
					<label htmlFor="message">Message</label>
				</div>
				{showErrorMessages && <span className='form__errorMsg'>{errorMessages.message}</span>}

				<button type='submit' >Send</button>

			</form>
			<ToastContainer />
		</>
	)
};

export default ContactForm;