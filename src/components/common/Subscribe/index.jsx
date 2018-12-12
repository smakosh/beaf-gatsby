import React from 'react'
import addToMailchimp from 'gatsby-plugin-mailchimp'
import { compose } from 'recompose'
import { withFormik, Form, Field } from 'formik'
import * as Yup from 'yup'
import { Button } from 'Common'
import { Message, Error, Fields, Input, Label } from './styles'

const Wrapper = ({
	errors,
	isSubmitting,
	touched,
	values,
	handleBlur,
	handleChange
}) => (
	<Form>
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
			<Button type="submit" subscribe disabled={isSubmitting}>Get started!</Button>
		</Fields>
		{(touched.email && errors.email) && (
			<Error>{errors.email}</Error>
		)}
		<Label>
			<p>Already have an account?{' '}
				<a href="https://app.beafapp.com/login">
					Login
				</a>
			</p>
		</Label>
		{values.status === 'success' && (
			<Message>
						Thank you! You will receive your first email shortly
				<span role="img" aria-label="successfully subscribed to news letter">🎉</span>
			</Message>
		)}
		{values.status === 'error' && (<Error server dangerouslySetInnerHTML={{ __html: values.msg }} />)}
	</Form>
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
		handleSubmit: async ({ email }, { setErrors, setSubmitting, setValues }) => {
			try {
				const res = await addToMailchimp(email, {
					pathname: document.location.pathname
				})
				if (res.result === 'success') {
					await setValues({ status: 'success', msg: res.msg, email  })
					await setSubmitting(false)
					window.location.href = `https://app.beafapp.com/register/?email=${email}`
				} else {
					setValues({ status: 'error', msg: res.msg, email  })
					setSubmitting(false)
				}
			} catch (err) {
				setErrors({ message: err, status: 'error' })
				setSubmitting(false)
			}
		}
	})
)

export const Subscribe = enhance(Wrapper)
