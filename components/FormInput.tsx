import React from 'react'

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  value: string | number
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  labelProps?: React.LabelHTMLAttributes<HTMLLabelElement>
}

const FormInput: React.FC<FormInputProps> = ({
  label,
  value,
  handleChange,
  labelProps,
  ...inputProps
}) => {
  return (
    <label
      className="mt-6 flex flex-col gap-2 text-[#696969] text-[15px]"
      {...labelProps}
    >
      <p className="font-rubik">{label}</p>
      <input
        id={labelProps?.htmlFor}
        type="text"
        className="!outline-none font-roboto_bold tracking-wide text-lg rounded-md border-white border !bg-transparent p-2 max-w-[350px]"
        onChange={handleChange}
        value={value}
        {...inputProps}
      />
    </label>
  )
}

export default FormInput
