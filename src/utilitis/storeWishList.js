const getStoredWishList = ()=>{
    const storedWishList=localStorage.getItem('wishList');
    if(storedWishList){
        return JSON.parse(storedWishList);
    }
    return [];
}


const saveWishList=(id)=>{
    const storedWishList =getStoredWishList();
    const exists = storedWishList.find(wishListId => wishListId === id);
    if(!exists){
        storedWishList.push(id);
        localStorage.setItem('wishList',JSON.stringify(storedWishList))
    }
}

export {getStoredWishList,saveWishList}