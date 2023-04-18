import {React, useState} from "react";

function NewPlantForm({setNewPlant}) {

  const [name, setName] = useState('')
  const [image, setImage] = useState('')
  const [price, setPrice] = useState(0)

  
  // console.log(name)
  
  let Plant = {
    name: {name},
    image: {image},
    price: {price}
  }

    const logPlant = (e) => {
      e.preventDefault()
      setNewPlant(Plant)
    }
  
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit = {(e) => logPlant(e)}>
        <input onChange = {(e) => setName(e.target.value)} type="text" name="name" placeholder="Plant name" />
        <input onChange = {(e) => setImage(e.target.value)} type="text" name="image" placeholder="Image URL" />
        <input onChange = {(e) => setPrice(e.target.value)} type="number" name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
