export const addItemToCart = (cartItems, cartItemToAdd) => {
    // Look inside of the existing cartItems array to see if the cartItemToAdd already exists
    // Store the first item found in the array into the existingCartItem constant if found, or store undefined if not found
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id
    )

    if (existingCartItem) {
        // If the cartItemToAdd is found inside of the cartItems array,
        // The cartItemToAdd will return as a new object with an increase in the quantity value
        return cartItems.map(cartItem => (
            cartItem.id === cartItemToAdd.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        ))
    } else {
        // If the cartItemAdded is not found inside of the cartItems array,
        // return a new array with all of the existing cartItems inside, and add the cartItemToAdd object with a property of base quantity of 1
        return [ ...cartItems, { ...cartItemToAdd, quantity: 1 } ]
    }
}