'use client';

import { Btn } from '@/components/custom/Btn/btn';
import { FormikDragFiles } from '@/components/custom/fields/FormikDragFiles/formikdragfiles';
import {
	CreatePositionSheme,
	ICreatePositonForm,
} from '@/lib/apis/positions/positions.types';
import { Form, Formik } from 'formik';

export default function CreateItem() {
	const state: ICreatePositonForm = {
		images: [],
	};
	const onSubmitForm = async (values: ICreatePositonForm) => {
		try {
			console.log(values);
		} catch (error) {}
	};

	return (
		<div className="w-[calc(70%-2rem)] h-full border-2 border-dark/80 p-[1rem] flex flex-col gap-[1rem] font-spacemono">
			<h1 className="font-semibold text-2xl text-center">
				Create a new position
			</h1>
			<br />
			<Formik
				initialValues={state}
				onSubmit={onSubmitForm}
				validationSchema={CreatePositionSheme}>
				<Form className="flex flex-col gap-[1.5vh]" autoComplete="">
					<FormikDragFiles
						name="images"
						label={'Choose image'}
						placeholder="Drag & Drop images here, or click to select images, new drags reset images"
					/>
					<br />
					<Btn type="submit">Create new</Btn>
				</Form>
			</Formik>
		</div>
	);
}
