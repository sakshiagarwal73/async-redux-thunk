
import jsonplaceholder from '../apis/jsonplaceholder';
import _ from 'lodash';
//function returning a function

export const fetchPosts =  () =>
{
	return async function(dispatch,getState)
	{
		const response = await jsonplaceholder.get('/posts');

	    
	  dispatch({
		  type:'FETCH_POSTS',
		  payload : response.data
	  });
	};
};

//pass id of user we want to fetch
export const fetchUser = (id) => {
  
   return(function(dispatch,getState)
  {
  	 _fetchUser(id,dispatch);
  });

}

const _fetchUser = _.memoize(async (id,dispatch) =>  {
	const response = await jsonplaceholder.get(`/users/${id}`);

  	 dispatch({
  	 	type: 'FETCH_USER',
  	 	payload : response.data
  	 });
});

