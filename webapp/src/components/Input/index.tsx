import { FormikProps } from "formik"

export const Input = ({
    name,
    label,
    formik,
}: {
    name: string
    label: string
    formik: FormikProps<any>
}) => {
  const value = formik.values[name]
  const error = formik.errors[name] as string | undefined
  return (

    <div style={{ marginBottom: 10 }}>
      <label htmlFor={name}>{label}</label>
      <br />
      <input
        type="text"
        name={name}
        id={name}
        onChange={(e) => {
          formik.setFieldValue(name, e.target.value)
        }}
        value={value}
      />

      {error && <div style={{color:"red"}}>{error}</div>}
    </div>
  )
}
