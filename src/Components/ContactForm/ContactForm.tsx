import React, { useState } from 'react';
import "./ContactForm.scss";
import { useForm, SubmitHandler } from 'react-hook-form';
import { ToastContainer, toast, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import emailjs, { init } from '@emailjs/browser';

interface IFormInput {
  firstName: String;
  lastName: String;
  email: String;
  numberPhone: String;
  message: String;
}


const ContactForm:React.FC = () => {

	// Initialize emailJs 
	init("user_Ch8zKqPzcFNo8oW0WqNgg");

	// Initialize React Hook Form
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors }
	} = useForm<IFormInput>();

	// State to enable or disable the form
	const [disabled, setDisabled] = useState<boolean>(false);

	// console.log(disabled)

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
			// className: 'submit-feedback success',
			toastId: 'notifyToast'
		});
	};

	

	// Function to take datas and send on an email
	const onSubmit: SubmitHandler<IFormInput> = async (data) => {

		const { firstName, lastName, email, message, numberPhone } = data;

		// console.log(data)

		console.log('First name: ', firstName);
		console.log('Last name: ', lastName);
		console.log('Email: ', email);
		console.log('Message: ', message);
		console.log('Téléphone: ', numberPhone);

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

			// Reset contact form fields after submission
			reset();
			// Display success toast
			toastifySuccess();
			// Re-enable form submission
			setDisabled(false);

		} catch (e) {
			console.log(e);
		}
	};

	const firstName = register('firstName', 
							{ required: { value: true, message: 'Veuillez indiquer votre prénom' },
							  maxLength: { value: 30,
								  		   message: 'Please enter less than 30 characters.'}});

	const onInputChange = (event: any) => {
		console.log(event.target);
		let light = event.target.nextElementSibling;
		if(event.target.name === "firstName" || event.target.name === "lastName") {
			if(event.target.value.length > 3){
				light.style.backgroundColor= "#0f0";
				light.style.boxShadow = "0 0 5px #0f0, 0 0 10px #0f0, 0 0 20px #0f0,0 0 40px #0f0"
			} else {
				light.style.backgroundColor= "#f00";
				light.style.boxShadow = "0 0 5px #f00, 0 0 10px #f00, 0 0 20px #f00,0 0 40px #f00"
			}
		}else if(event.target.name === "email"){
			if(event.target.value.length > 3){
				const emailPattern = /^[a-zA-Z-.]+@[a-zA-Z-]+\.[a-zA-Z]{2,6}$/;
				if(emailPattern.test(event.target.value)){
					light.style.backgroundColor= "#0f0";
					light.style.boxShadow = "0 0 5px #0f0, 0 0 10px #0f0, 0 0 20px #0f0,0 0 40px #0f0"
				} else {
					light.style.backgroundColor= "#f00";
					light.style.boxShadow = "0 0 5px #f00, 0 0 10px #f00, 0 0 20px #f00,0 0 40px #f00"
				}
			}
		} else if(event.target.name === "numberPhone") {
			if(event.target.value.length > 3){
				const phonePattern = /^[0-9+]{8,14}$/;
				if(phonePattern.test(event.target.value)){
					light.style.backgroundColor= "#0f0";
					light.style.boxShadow = "0 0 5px #0f0, 0 0 10px #0f0, 0 0 20px #0f0,0 0 40px #0f0"
				} else {
					light.style.backgroundColor= "#f00";
					light.style.boxShadow = "0 0 5px #f00, 0 0 10px #f00, 0 0 20px #f00,0 0 40px #f00"
				}
			}
		} else if (event.target.name === "message") {
			if(event.target.value.length > 4){
				light.style.backgroundColor= "#0f0";
				light.style.boxShadow = "0 0 5px #0f0, 0 0 10px #0f0, 0 0 20px #0f0,0 0 40px #0f0"
			} 
		}
	}


	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)} className="form">

				<div className="inputBox" >

					<input type="text"
						id="firstName"
						// name='firstName'
						placeholder='First Name'
						required
						{...firstName}
						onInput={(e) => onInputChange(e)}
						
						/>
					<div className="inputBox__light"></div>
					<label htmlFor="firstName">First Name</label>
				</div>
				{errors.firstName && <span className='form__errorMsg'>{errors.firstName}</span>}
				
				
				
				<div className="inputBox" >


					<input type="text"
						id="lastName"
						// name='lastName'
						placeholder='Last Name'
						required
						onInput={(e) => onInputChange(e)}
						

						{...register('lastName', {
							required: { value: true, message: 'Veuillez indiquer votre nom' },
							maxLength: {
								value: 30,
								message: 'Please enter less than 30 characters.'
							}
						})} />
						<div className="inputBox__light"></div>
					<label htmlFor="lastName">Last Name</label>
				</div>
				{errors.lastName && <span className='form__errorMsg'>{errors.lastName}</span>}
				<div className="inputBox" >

					<input type="email"
						// name='email'
						placeholder='E-mail'
						required

						onInput={(e) => onInputChange(e)}

						{...register('email', {
							required: true,
							pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
						})} />
						<div className="inputBox__light"></div>
					<label htmlFor="email" id="email">E-mail</label>
				</div>
				{errors.email && (<span className='form__errorMsg'>Veuillez indiquer une adresse email valide</span>)}

				<div className="inputBox" >

					<input type="text"
						id="numberPhone"
						// name='numberPhone'
						placeholder='Number Phone'
						required

						onInput={(e) => onInputChange(e)}

						{...register('numberPhone', {
							required: { value: true, message: 'Saisissez votre numéro de téléphone' },
							maxLength: {
								value: 20,
								message: 'Please enter a valid phone number.'
							},
						})} />
						<div className="inputBox__light"></div>
					<label htmlFor="numberPhone">Number Phone</label>
				</div>
				{errors.numberPhone && <span className='form__errorMsg'>{errors.numberPhone}</span>}


				<div className="inputBox" >

					<textarea 
						id="message"
						rows={5}
						placeholder='Message'
						// name='message'
						required

						onInput={(e) => onInputChange(e)}

						{...register('message', {
							required: true
						})}
					/>
					<div className="inputBox__light"></div>
					<label htmlFor="message">Message</label>

				</div>
				{errors.message && <span className='form__errorMsg'>Please leave a message before sending the form.</span>}

				<button type='submit' >Send</button>

			</form>
			<ToastContainer />
		</>
	)
};

export default ContactForm;