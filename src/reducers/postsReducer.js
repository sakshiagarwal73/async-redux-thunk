
//here we are maintaining a list of posts.

export default (state = [],action) => {
   
   switch(action.type)
   {
   	 case 'FETCH_POSTS':
   	    return action.payload;
   	 default:
   	    return state;   
   }
    
   
};