import "./Cart.css";



import { PureComponent } from "react";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import {
  Cart,
  Product,
  CheckoutButton,
  cartLocalization,
  cartReducer,
  setCartCurrency
} from "react-shopping-cart";

import "bootstrap/dist/css/bootstrap.css";
import "animate.css/animate.min.css";
import "font-awesome/css/font-awesome.min.css";

const { getDefaultLocalization } = cartLocalization;

// You may take localization object from wherever you want, that's just an example
// For more information, see localization section


const iPadPropertiesWithAdditionalCostLocalization = {
  yellow: "Yellow (+{cost}{localizedCurrency})"
};

const store = createStore(
  combineReducers({
    cart: cartReducer
    // Your own reducers, sir
  })
);

store.dispatch(setCartCurrency("GBP"));

class App1 extends PureComponent {
  state = {
    product: {
    
      id: "ipad-case",
      path: "/shop/ipad-case/",
      properties: {
        Type : [
          "Coffee x",
          "y Coffee",
          "z Coffee",
          "k Coffee",
          {
            additionalCost: {
              GBP: 10,
              
            },
            value: "coffee oo",
            
          },
          
          {
            additionalCost: {
              GBP: 15,
              
            },
            value: "coffee ko",
            
          },
          {
            additionalCost: {
              GBP: 25,
              
            },
            value: "coffee lo",
            
          },
        
          
        
        
        ]
      },
      propertiesToShowInCart: ["type"],
      prices: { GBP: 70},
      currency: "GBP",
      
      
    },
    getProductLocalization: getDefaultLocalization("product", "en", {
      
      ...iPadPropertiesWithAdditionalCostLocalization
    }),
    getCheckoutButtonLocalization: getDefaultLocalization(
      "checkoutButton",
      "en",
      
    ),
    getCartLocalization: getDefaultLocalization(
      "cart",
      "en",
      
    )
  };

  render() {
    const {
      product,
      getCheckoutButtonLocalization,
      getProductLocalization,
      getCartLocalization
    } = this.state;

    const checkoutButtonElement = (
      <CheckoutButton
        getLocalization={getCheckoutButtonLocalization}
        checkoutURL="/to/my/checkout"
      />
    );
    return (
      <Provider store={store}>
        <div className="checkout">
          <Product
            {...product}
            checkoutButton={checkoutButtonElement}
            getLocalization={getProductLocalization}
          />
          <Cart
            checkoutButton={checkoutButtonElement}
            getLocalization={getCartLocalization}
          />
        </div>
      </Provider>
    );
  }
}

export default App1;


