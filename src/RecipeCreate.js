import React, { useState } from "react";


function RecipeCreate(props) {

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
   const initialForm = {
     name:"",
     cuisine:"",
     photo: "",
     ingredients: "",
     preparation: "",
   };
  
  const [formData, setFormData] = useState({...initialForm});
  
  const handleChange = (event) => {
    setFormData({...formData, [event.target.name]: event.target.value
    })
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    props.uploadRecipe(formData)
    setFormData(initialForm)
  }

  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td htmlFor="name">
              <input 
              id="name"
                name="name" 
                placeholder="name"
                type="text"
                onChange={handleChange}
                value={formData.name}
                />
            </td>
            <td>
              <input 
                id="cuisine"
                name="cuisine"
                placeholder="cuisine"
                type="text"
                onChange={handleChange}
                value={formData.cuisine}
                />
            </td>
            <td>
              <input 
                id="photo"
                name="photo"
                placeholder="URL"
                type="URL"
                onChange={handleChange}
                value={formData.photo}
                />
            </td>
            <td>
              <textarea 
                id="ingredients"
                name="ingredients"
                placeholder="ingredients"
                type="text"
                onChange={handleChange}
                value={formData.ingredients}
                />
            </td>
            <td>
              <textarea 
                id="preparation"
                name="preparation"
                placeholder="preparation"
                type="text"
                onChange={handleChange}
                value={formData.preparation}
                />
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
