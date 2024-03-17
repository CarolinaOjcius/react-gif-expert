import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifItem } from './GifItem';

export const GifGrid = ({ category }) => {
    const {images, isLoading}=useFetchGifs (category);
   

    return (
        <>
         
            <h3>{category}</h3>
            {isLoading&&(<h2>Cargando...</h2>)}
            <div className='card-grid'>
                {
                    images.map((image) => (
                        <GifItem
                            key={image.id}
                            {...image}

                        />
                    ))
                }

                {/*  {images.length>3&&
                <>
                <li key={images[0].id}>{images[0].title}</li>
                <li key={images[1].id}>{images[1].title}</li>
                <li key={images[2].id}>{images[2].title}</li>
                <li key={images[3].id}>{images[3].title}</li>
                </>
                } */}
            </div>
        </>
    )
}
