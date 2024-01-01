export interface ISearchInputProps {
	defValue?: string | null;
	placeholder?: string;
	className?: string;
	isPending?: boolean;
	onChange?: (e: React.FormEvent<HTMLInputElement>) => void;
}
