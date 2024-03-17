import { useState } from "react";

//aca arriba con la desestructuración estoy recibiendo las props de setcategories
//export const AddCategory = ({setcategories})
export const AddCategory = ({onNewCategory}) => {
    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({ target }) => {

        setInputValue(target.value);

    }

    const onSubmit = (event) => {
        event.preventDefault();
        if(inputValue.trim().length<=1)return;
        onNewCategory(inputValue.trim());
        //setcategories(categories=>[ inputValue,...categories])
        setInputValue('');
    }

    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Buscar gif"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )
}
