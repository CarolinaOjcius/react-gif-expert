import { GifItem } from './GifItem';

export const GifGrid = ({ category }) => {
    const [images, setImages] = useState([]);

    const getImages = async () => {
        const newImages = await getGifs(category);
        setImages(newImages);
        console.log(newImages)
    }

    useEffect(() => {
        getImages();
    }, [])




    return (
        <>
            <h3>{category}</h3>
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
