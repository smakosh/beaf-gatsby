import React from 'react'
import addToMailchimp from 'gatsby-plugin-mailchimp'
import { compose } from 'recompose'
import { withFormik, Form, Field } from 'formik'
import * as Yup from 'yup'
import { Container, Button } from 'Common'
import {
	StyledForm,
	Subtitle,
	Title,
	Message,
	Error,
	Fields,
	Input,
	StyledWrapper
} from './styles'

const Wrapper = ({
	errors,
	isSubmitting,
	touched,
	values,
	handleBlur,
	handleChange
}) => (
	<StyledWrapper as={Container}>
		<StyledForm>
			<Form>
				<Title>Get early access to BEAF</Title>
				<Subtitle>Subscribe to get notified when we secure funding 420.</Subtitle>
				{(touched.email && errors.email) && (
					<Error>{errors.email}</Error>
				)}
				<Fields>
					<Field
						component={Input}
						aria-label="please insert your email"
						placeholder="youremail@example.com"
						onBlur={handleBlur('email')}
						onChange={handleChange('email')}
						type="email"
						name="email"
						error={!!errors.email}
					/>
					<Button type="submit" subscribe disabled={isSubmitting}>Subscribe</Button>
				</Fields>
				{values.status === 'success' && (
					<Message>
								Thank you! You will receive your first email shortly
						<span role="img" aria-label="successfully subscribed to news letter">🎉</span>
					</Message>
				)}
				{values.status === 'error' && (<Error server dangerouslySetInnerHTML={{ __html: values.msg }} />)}
			</Form>
		</StyledForm>
	</StyledWrapper>
)

const enhance = compose(
	withFormik({
		mapPropsToValues() {
			return {
				email: ''
			}
		},
		validationSchema: () => Yup.object().shape({
			email: Yup.string().email('Please enter a valid email!').required('Email is required!')
		}),
		handleSubmit(values, { setErrors, setSubmitting, setValues }) {
			const {
				email
			} = values
			addToMailchimp(email, {
				pathname: document.location.pathname
			}).then(res => {
				if (res.result === 'success') {
					setValues({ status: 'success', msg: res.msg, email  })
					setSubmitting(false)
				} else {
					setValues({ status: 'error', msg: res.msg, email  })
					setSubmitting(false)
				}
			}).catch(err => {
				setErrors({ message: err, status: 'error' })
				setSubmitting(false)
			})
		}
	})
)

export const Subscribe = enhance(Wrapper)
