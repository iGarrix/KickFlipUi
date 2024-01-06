'use client';

import { useAuth } from '@/components/Providers/AuthProvider/AuthProvider';
import { Btn } from '@/components/custom/Btn/btn';
import FormikField from '@/components/custom/fields/FormikField';
import { IBaseErrorState } from '@/lib/api_requests/common.fetches';
import { Login } from '@/lib/apis/auth/auth.controller';
import { ILoginDto, LoginScheme } from '@/lib/apis/auth/auth.types';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import { Form, Formik } from 'formik';
import { toast } from 'sonner';

export default function SignIn() {
	const { onSignIn, onSignToken } = useAuth();

	const loginState: ILoginDto = {
		username: '',
		password: '',
	};
	const onSubmitForm = async (values: ILoginDto) => {
		try {
			const login = await Login(values);
			if (!login) {
				toast('Authentication error', {
					description: 'Bad response',
					action: {
						label: 'Try again',
						onClick: () => {},
					},
				});
				return;
			}
			toast('Authentication', {
				description: 'Successfully logged out of your account',
				action: {
					label: 'Ok',
					onClick: () => {},
				},
			});
			onSignIn(login.user);
			onSignToken(login.accessToken);
			//sessionStorage.setItem(AuthVariables.access_token, login.accessToken);
		} catch (error) {
			const _error = error as IBaseErrorState;
			toast('Authentication error', {
				description: _error.message.join(', '),
				action: {
					label: 'Try again',
					onClick: () => {},
				},
			});
		}
	};

	return (
		<div className="bg-light h-full flex items-center justify-center py-[10vh]">
			<div className="border-2 border-dark/80 font-spacemono text-center px-[2rem] py-[1rem]">
				<h1 className="font-black text-2xl">Sign in</h1>
				<br />
				<p>
					Authorizate to buy something new <br /> or save positions which you
					liked
				</p>
				<br />
				<Formik
					initialValues={loginState}
					onSubmit={onSubmitForm}
					validationSchema={LoginScheme}>
					<Form className="flex flex-col gap-[1.5vh]" autoComplete="">
						<FormikField
							name="username"
							placeholder="Enter username"
							type="text"
							icon={faUser}
						/>
						<FormikField
							name="password"
							placeholder="Enter password"
							type="password"
							icon={faLock}
						/>
						<br />
						<Btn type="submit">Sign in</Btn>
					</Form>
				</Formik>
			</div>
		</div>
	);
}
