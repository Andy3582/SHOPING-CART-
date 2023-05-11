import "./background.css"
import "@fontsource/dancing-script";

interface MainProps {
    message: string;
  }
  
  export default function Main({ message }: MainProps) {
    return (
      <div>
        
        <article className='container'>
          <h1 className='coffeeshop'>{message} COFFE SHOP & </h1>
          <h1 className='strawberry'>{message} Strawberry Gardens</h1>
          <h1 className='bakerry'>{message} ROASTER</h1>
          
          <img
            className='background'src='https://perfectdailygrind.com/wp-content/uploads/2019/02/coffee-bar.jpg'></img>
            {message}
         
        </article>
      </div>
    );
  }
  