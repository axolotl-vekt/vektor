import React, { useState } from 'react';

function FoodLog() {
  const [foodImage, setFoodImage] = useState(null);
  const [caption, setCaption] = useState('');

  const handleImage = (event) => {
    setFoodImage(event.target.files[0]);
  }

  const handleCaption = (event) => {
    setCaption(event.target.value)
  }

  return (
    <div className='flex flex-col'>
      <select className='w-1/6 my-2 rounded-lg'>
        <option value="breakfast">Breakfast</option>
        <option value="lunch ">Lunch</option>
        <option value="dinner ">Dinner</option>
        <option value="snack ">Snack</option>
      </select>
      <input className='my-2' type="file" onChange={handleImage}/>
      <input className='my-2 w-2/4 rounded-lg text-center' type="text" placeholder='Meal Description' value={caption} onChange={handleCaption}/>
    </div>
  )
}

export default FoodLog
