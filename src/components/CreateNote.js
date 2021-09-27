import React, {useState} from 'react'

export const CreateNote = () => {
    const [input, setInput] = useState({
        title: '',
        content: ''
    })

    function handleChange(event){
        const {name, value} = event.target;

        setInput(prevInput => {
            return {
                ...prevInput,
                [name]: value
            }
        })
    }

    function handleClick(event) {
        event.preventDefault();
        console.log(input);
    }



    return (
        <div className="container">

                <h1>CreateNote</h1>

                 <form>
                      <div className='form-group'>
                      <input onChange={handleChange} name="title" 
                      value={input.title}
                      autoComplete="off" className='form-control'
                      placeholder="note file"></input>
                      </div>

                      <div className='form-group'>
                        <textarea onChange={handleChange} name="content" 
                        value={input.content}
                        autoComplete="off" 
                        className='form-control' placeholder="note content"></textarea>
                      </div>
                        
                        <button onClick={handleClick} className="btn btn-lg btn-info ">ADD NOTE</button>
                      
                </form>
        </div>
    )
}
