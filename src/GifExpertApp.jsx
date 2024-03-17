import { useState } from "react";
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
  const [categories, setcategories] = useState(['One Punch'])

  const onAddCategory = (newCategory) => {

    if (categories.includes(newCategory)) return;

    setcategories([...categories, newCategory])
    //  setcategories(cat=>[...cat, 'Valorant'])
  }

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory
        onNewCategory={(value) => onAddCategory(value)}
      //setcategories={setcategories}
      />
      {/* <button onClick={onAddCategory}>Agregar</button> */}

      {categories.map(category => (
        <GifGrid key={category} category={category} />
      ))
      }

    </>
  )
}