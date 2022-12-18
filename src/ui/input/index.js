import { Error } from "../../pages/auth/login/Logic"

export function Input({
	input_style,
	handleChange,
	error,
	touched,
	value,
	placeholder,
	name,
	id,
}) {
	return (
		<div class="form-group mb-6 flex flex-col justify-start">
			<label className="text-left mb-1.5">{id}</label>
			<input
				type="text"
				className={input_style}
				id={name}
				name={name}
				onChange={handleChange}
				value={value}
				aria-describedby={name}
				placeholder={placeholder}
			/>
			{error && touched && <Error error={error} />}
		</div>
	);
}

export function Select({
	select_style,
	value,
	name,
	handleChange,
	label,
	children,
}) {
	return (
		<div class="mb-3 flex flex-col justify-start">
			<label className="text-left mb-1">{label}</label>

			<select
				className={select_style}
				aria-label={label}
				id={name}
				defaultValue={value}
				onChange={handleChange}>
				{" "}
				{children}
			</select>
		</div>
	);
}