import { FormikProps } from "formik"

export const TextArea = ({
    name,
    label,
    formik
}: {
    name: string
    label: string
    formik: FormikProps<any>
}) => {
  const value = formik.values[name]
  return (
    <div style={{ marginBottom: 10 }}>
      <label htmlFor={name}>{label}</label>
      <br />
      <textarea
        name={name}
        id={name}
        onChange={(e) => {
          formik.setFieldValue(name, e.target.value)
        }}
        value={value}
      />
    </div>
  )
}
