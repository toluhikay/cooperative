import { Error } from "../../pages/auth/login/Logic"

export function Input({ input_style, handleChange, error, touched, value, placeholder, name }) {
    return <div class="form-group mb-6">
        <input type="text" className={input_style} id={name}
            name={name}
            onChange={handleChange}
            value={value}
            aria-describedby={name} placeholder={placeholder} />
        {error && touched && (
            <Error error={error} />
        )}
    </div>
}
  


export function Select({select_style,value, name,handleChange, label,children }) {
    return <div class="mb-3">
    <select className={select_style} aria-label={label}
      id={name}
      defaultValue={value}
      onChange={handleChange}
        > {children}</select>
    </div>
}