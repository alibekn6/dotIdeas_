import { Segment } from '../../components/Segment'

import { useState } from 'react'

export const NewIdeaPage = () => {

    const [state, setState] = useState({
        name: '',
        nick: '',
        description: '',
        text: ''
    })

    return (
        <Segment title="New idea">
            <form onSubmit={(e) => {
                e.preventDefault()
                console.log('submitted', state);
                
            }}>

            <div style={{marginBottom: 10}}>
                <label htmlFor="name">Name</label>
                <br />  
                <input type="text" name="name" id="name" onChange={(e) => {
                    setState({...state, name: e.target.value})
                }} value={state.name}  />
            </div>


            <div style={{marginBottom: 10}}>
                <label htmlFor="nick">Nick</label>
                <br />
                <input type="text" name="nick" id="nick" onChange={(e) => {
                    setState({...state, nick: e.target.value})
                }} value={state.nick}  />
            </div>


            <div style={{marginBottom: 10}}>
                <label htmlFor="description">Description</label>
                <br />
                <input type="text" name="description" id="description" onChange={(e) => {
                    setState({...state, description: e.target.value})
                }} value={state.description}  />
            </div>


            <div style={{marginBottom: 10}}>
                <label htmlFor="name">Text</label>
                <br />
                <textarea onChange={(e) => {
                    setState({...state, text: e.target.value})
                }} name="text" id="text" value={state.text}  />

            </div>

            <button type="submit">create idea</button>




            </form>
        </Segment>
    )
}
