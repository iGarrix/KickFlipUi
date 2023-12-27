export interface ISearchInputProps {
	defValue?: string;
	placeholder?: string;
	className?: string;
	onChange?: (e: React.FormEvent<HTMLInputElement>) => void;
}
