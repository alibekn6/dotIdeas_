import { Input } from '../../components/Input'
import { Segment } from '../../components/Segment'
import { TextArea } from '../../components/TextArea'
import {useFormik} from 'formik'

export const NewIdeaPage = () => {

    const formik = useFormik({
        initialValues: {
            name: '',
            nick: '',
            description: '',
            text: ''
        },
        validate: (values) => {
            const errors: Partial<typeof values> = {}
            if (!values.name) {
                errors.name = "Name is required"
            }

            if (!values.nick) {
                errors.nick = "Nick is required"
            } else if (!values.nick.match(/^[a-z0-9-]+$/)) {
                errors.nick = "Nick may contain only lowercase letters, numbers, dashes "
            }

            if (!values.description) {
                errors.description = "Description is required"
            }

            if (!values.text) {
                errors.text = "Text is required"
            } else if (values.text.length < 100) {
                errors.text = "Text should be at least 100 characters long"
            }
            return errors

        },
        onSubmit: (values) => {
            console.log('Submitted', values)
        },
        
    })


    console.log(formik);
    
    // const [state, setState] = useState({
    //     name: '',
    //     nick: '',
    //     description: '',
    //     text: ''
    // })

    return (
        <Segment title="New idea">
            <form onSubmit={(e) => {
                e.preventDefault()
                formik.handleSubmit()
            }}>

            <Input name='name' label='Name' formik={formik} />
            <Input name='nick' label='Nick' formik={formik} />
            <Input name='description' label='Description' formik={formik} />



            <TextArea name='text' label='text' formik={formik}/>

            <button type="submit">create idea</button>

            {!formik.isValid && <div style={{color:"red"}}>Some fields are invalid</div> }




            </form>
        </Segment>
    )
}
