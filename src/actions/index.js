
import jsonplaceholder from '../apis/jsonplaceholder';

//function returning a function

const fetchPosts =  () =>
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

export default fetchPosts;