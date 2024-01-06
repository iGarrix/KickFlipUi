'use client';

import { useField } from 'formik';
import { useState } from 'react';
import Image from 'next/image';
import placeholder from '../../../../assets/imgplaceholder.avif';
export interface IFormikImageField {
	name: string;
	defSrc?: string;
	isServerImage?: boolean;
}

export const FormikImageField: React.FC<IFormikImageField> = ({
	isServerImage = true,
	...props
}) => {
	const [field, meta, form] = useField(props);

	const [file, setFile] = useState<any>(null);

	const onLoadingImage = (e: any) => {
		if (e) {
			var selectedFile = e.target.files[0];
			var reader = new FileReader();
			reader.readAsDataURL(selectedFile);
			reader.onload = (e) => (e?.target ? setFile(e.target?.result) : '');
		}
	};

	return (
		<div className="w-full flex justify-center">
			<input
				type="file"
				accept="image/*"
				id="hidden_image_cat"
				onBlur={field.onBlur}
				name={field.name}
				onChange={(event) => {
					form.setValue(event.currentTarget.files?.[0]);
					onLoadingImage(event);
				}}
				hidden
			/>
			<label
				htmlFor="hidden_image_cat"
				className={`w-[156px] h-[156px] rounded-md border p-[1rem] overflow-hidden cursor-pointer transition-all hover:border-grapefruit bg-light-200 flex items-center justify-center ${
					meta.error && 'border-grapefruit'
				}`}>
				<Image
					src={file ? file : isServerImage ? `${props.defSrc}` : placeholder}
					width={156}
					height={156}
					alt="defbg"
					className="w-full h-[156px] object-contain"
				/>
			</label>
		</div>
	);
};
