export const initialState ={
    cart : []
}
export const getCartTotal = (basket) =>{
    return(
        basket.reduce((item,amount)=>{
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
        default:
            return state;
    }
}
export default reducer;