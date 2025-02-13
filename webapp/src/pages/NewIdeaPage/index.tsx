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
        onSubmit: (values) => {
            console.log('Submitted', values)
        },
        
    })
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




            </form>
        </Segment>
    )
}
