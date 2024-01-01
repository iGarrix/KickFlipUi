import { faSearch, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ISearchInputProps } from './searchinput.types';

export const SearchInput: React.FC<ISearchInputProps> = ({ ...props }) => {
	return (
		<div className="border-2 border-dark/80 py-[.6rem] px-[1rem] flex items-center gap-[1rem] w-full font-spacemono">
			<input
				placeholder={props.placeholder ? props.placeholder : 'Пошук'}
				defaultValue={props.defValue ? props.defValue : ''}
				className={`outline-0 w-full grow bg-transparent ${props.className}`}
				onChange={props.onChange}
			/>
			<button type="submit">
				<FontAwesomeIcon
					icon={props.isPending ? faSpinner : faSearch}
					className={`text-dark/80 cursor-pointer ${
						props.isPending && 'animate-spin'
					}`}
				/>
			</button>
		</div>
	);
};
