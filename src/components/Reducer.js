export const initialState ={
    cart : []
}
export const getCartTotal = (cart) =>{
    return(
        cart.reduce((item,amount)=>{
            if(isNaN(amount[0])){
                return(
                    item+(+amount.price.toString().slice(1))
                )
            }
        return (
            item + amount
        )
    }, 0)
    )
}
const reducer = (state,action)=>{
    switch(action.type){
        case 'ADD_TO_CART':
            return{
                ...state,
                cart:[...state.cart, action.item]
            }
        case 'REMOVE_FROM_CART':
            const index = state.cart.findIndex(
                (cartItem) => cartItem.id === action.id
            );
            let newCart = [...state.cart]
            if(index >= 0){
                newCart.splice(index,1)
            }else{
                console.warn(`Can't remove item with id ${action.id}`)
            }
            return{
                ...state,
                cart:newCart
            }
        default:
            return state;
    }
}
export default reducer;