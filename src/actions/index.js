import React from 'react';
import jsonplaceholder from '../apis/jsonplaceholder';

const fetchPosts =  () =>
{
	return async function(dispatch,getState)
	{
		const response = await jsonplaceholder.get('/posts');

	    
	  dispatch({
		  type:'FETCH_POSTS',
		  payload : response
	  });
	};
};

export default fetchPosts;