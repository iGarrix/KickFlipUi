import React, { useCallback } from 'react';
import { useField, FieldAttributes } from 'formik';
import {
	HoverCard,
	HoverCardContent,
	HoverCardTrigger,
} from '@/components/ui/hover-card';

export interface FormikDragFilesProps extends FieldAttributes<any> {
	label: string;
	placeholder: string;
	name: string;
}

export const FormikDragFiles: React.FC<FormikDragFilesProps> = ({
	label,
	placeholder,
	...props
}) => {
	const [field, meta, helpers] = useField(props);

	const handleDrop = useCallback(
		(event: React.DragEvent<HTMLDivElement>) => {
			event.preventDefault();
			const files = Array.from(event.dataTransfer.files).filter((f) =>
				f.type.startsWith('image/')
			) as File[];
			if (files.length === 0) {
				helpers.setError('Files must be images');
				return;
			}
			helpers.setValue(files);
		},
		[helpers]
	);

	const handleDragOver = useCallback(
		(event: React.DragEvent<HTMLDivElement>) => {
			event.preventDefault();
		},
		[]
	);

	const handleChange = useCallback(
		(event: React.ChangeEvent<HTMLInputElement>) => {
			const _files = event.currentTarget.files;
			if (_files) {
				const files = Array.from(_files).filter((f) =>
					f.type.startsWith('image/')
				) as File[];
				if (files.length === 0) {
					helpers.setError('Files must be images');
					return;
				}
				helpers.setValue(files);
			}
		},
		[helpers]
	);

	const onDelete = useCallback(
		(file: File) => {
			const newArray = Array.from(field.value as Array<File>).filter(
				(f) => f.name !== file.name
			);
			helpers.setValue(newArray);
		},
		[field, helpers]
	);

	return (
		<div>
			<label htmlFor={field.name} className="cursor-pointer">
				<div
					style={{
						border: '2px dashed #ccc',
						borderRadius: '4px',
						padding: '16px',
						textAlign: 'center',
						cursor: 'pointer',
					}}
					onDrop={handleDrop}
					onDragOver={handleDragOver}>
					<div className="w-[80%] mx-auto">
						{meta.touched && meta.error ? (
							<div style={{ color: 'red' }}>{meta.error}</div>
						) : (
							placeholder
						)}
					</div>
					<input
						type="file"
						id={field.name}
						name={field.name}
						onChange={handleChange}
						onBlur={field.onBlur}
						multiple
						accept="image/*"
						style={{ display: 'none' }}
					/>
				</div>
			</label>
			{field.value &&
				Array.isArray(field.value) &&
				field.value.length !== 0 && (
					<ul className="flex flex-wrap mt-[0.5rem]">
						<li>
							<strong className="whitespace-nowrap">Selected Images:</strong>
						</li>
						{field.value.map((file: File, index) => (
							<HoverCard key={index}>
								<HoverCardTrigger>
									<li
										className="transition-all w-auto rounded cursor-pointer grow hover:bg-neutral-300 line-clamp-1 px-[5px] active:bg-rose-500 active:text-white"
										onClick={() => {
											onDelete(file);
										}}>
										{file.name}
									</li>
								</HoverCardTrigger>
								<HoverCardContent className="text-sm bg-gradient-to-br border border-neutral-300 shadow-xl from-light via-light to-dark">
									<p>#{index + 1}</p>
									<p className="line-clamp-2">{file.name}</p>
									<p>size: {Number(file.size / (1024 * 1024)).toFixed(1)}MB</p>
								</HoverCardContent>
							</HoverCard>
						))}
					</ul>
				)}
		</div>
	);
};
