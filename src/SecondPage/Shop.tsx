/** @format */

import "./Shop.css";


interface CartProps {
  message: string;
}


export default function Cart({message}: CartProps) {
  return (
             <div>
         <div className="container1">
      <div className='card'>
        <img
          src='https://www.shopcoffee.co.uk/wp-content/uploads/2020/11/Guatemala-SHB@5x-510x510.png'
          alt='Denim Jeans'
          width='100%'
        />

        <p className='price'>{message} 500g / 1000g</p>
        <p>
        Some text about the jeans. Super slim and comfy lorem ipsum lorem
          jeansum. Lorem jeamsun denim lorem {message}
        </p>
        <p>
          <button> £14 - £24{message}</button>
        </p>
      </div>

      <div className='card'>
        <img
          src='https://www.shopcoffee.co.uk/wp-content/uploads/2020/11/Artisan-Blend@5x-510x510.png'
          alt='Denim Jeans'
          width='100%'
        />

        <p className='price'> 500g / 1000g{message} </p>
        <p>
        Some text about the jeans. Super slim and comfy lorem ipsum lorem
          jeansum. Lorem jeamsun denim lorem jeansum.{message}
        </p>
        <p>
          <button>£13 - £23.80{message}</button>
        </p>
      </div>
      
      <div className='card'>
        <img
          src='https://www.shopcoffee.co.uk/wp-content/uploads/2020/11/Colombia-Excelso@5x-510x510.png'
          alt='Denim Jeans'
          width='100%'
        />

        <p className='price'> 500g / 1000g {message}</p>
        <p>
        Some text about the jeans. Super slim and comfy lorem ipsum lorem
          jeansum. Lorem jeamsun denim lorem jeansum.{message}
        </p>
        <p>
          <button>£15 - £25{message}</button>
        </p>
      </div>
      </div>
      <div className="container2">
      <div className='card'>
        <img
          src='https://www.shopcoffee.co.uk/wp-content/uploads/2020/11/Blue-Mountain-Blend@5x-510x510.png'
          alt='Denim Jean'
          width='100%'
        />

        <p className='price'> 500g / 1000g {message}</p>
        <p>
          Some text about the jeans. Super slim and comfy lorem ipsum lorem
          jeansum. Lorem jeamsun denim lorem jeansum.{message}
        </p>
        <p>
          <button>Add to Cart{message}</button>
        </p>
      </div>
      <div className='card'>
        <img
          src='https://www.shopcoffee.co.uk/wp-content/uploads/2020/11/Ethiopia-Yirgacheffe@5x-510x510.png'
          alt='Denim Jeans'
          width='100%'
        />

        <p className='price'> 500g / 1000g {message}</p>
        <p>
          Some text about the jeans. Super slim and comfy lorem ipsum lorem
          jeansum. Lorem jeamsun denim lorem jeansum.{message}
        </p>
        <p>
          <button>Add to Cart{message}</button>
        </p>
      </div>
      <div className='card'>
        <img
          src='https://www.shopcoffee.co.uk/wp-content/uploads/2020/11/Honduras-San-Lempira@5x-510x510.png'
          alt='Denim Jeans'
          width='100%'
        />

        <p className='price'> 500g / 1000g {message}</p>
        <p>
          Some text about the jeans. Super slim and comfy lorem ipsum lorem
          jeansum. Lorem jeamsun denim lorem jeansum.{message}
        </p>
        <p>
          <button>Add to Cart{message}</button>
        </p>
      </div>
      </div>
      <div className="container3">
      <div className='card'>
        <img
          src='https://www.shopcoffee.co.uk/wp-content/uploads/2020/11/Mexico-Fancy-Jaguar@5x-510x510.png'
          alt='Denim Jeans'
          width='100%'
        />

        <p className='price'> 500g / 1000g {message}</p>
        <p>
          Some text about the jeans. Super slim and comfy lorem ipsum lorem
          jeansum. Lorem jeamsun denim lorem jeansum.{message}
        </p>
        <p>
          <button>Add to Cart{message}</button>
        </p>
      </div>
      <div className='card'>
        <img
          src='https://www.shopcoffee.co.uk/wp-content/uploads/2020/11/American-Blend@5x-510x510.png'
          alt='Denim Jeans'
          width='100%'
        />

        <p className='price'> 500g / 1000g {message}</p>
        <p>
          Some text about the jeans. Super slim and comfy lorem ipsum lorem
          jeansum. Lorem jeamsun denim lorem jeansum.{message}
        </p>
        <p>
          <button>Add to Cart{message}</button>
        </p>
      </div>
      <div className='card'>
        <img
          src='https://www.shopcoffee.co.uk/wp-content/uploads/2020/11/Espresso-Blend@5x-510x510.png'
          alt='Denim Jeans'
          width='100%'
        />

        <p className='price'> 500g / 1000g {message} </p>
        <p>
          Some text about the jeans. Super slim and comfy lorem ipsum lorem
          jeansum. Lorem jeamsun denim lorem jeansum.{message}
        </p>
        <p>
          <button>Add to Cart{message}</button>
        </p>
      </div>
      </div>
      </div>
       
  );
}
