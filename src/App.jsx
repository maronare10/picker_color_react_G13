import { useState } from 'react'
import './App.css'



const App = () => {
  const [ backgroundColor, setBackgroundColor] = useState('')

  const handleChange = (event) => {
    setBackgroundColor(event.target.value);


    

  }


  return (
    <div className="app" style= {{ backgroundColor: backgroundColor }} >
      <span>Selecciona un color:</span>
      <input 
        type="text"
        placeholder="#FF0000"
        onChange={handleChange}
        value={backgroundColor}
        
      />
      
    </div>
  )
}

export default App




