import React , {useState , useEffect } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';

const MultiReturn = ()=>{
  const [isLoading,setIsLoading] = useState(true);
  const [isError,setIsError] = useState(false);
  const [user,setUser] = useState('Default User');
  useEffect(()=>{
    fetch(url)
      .then((response)=>{
        if (response.status >= 200 && response.status <=299) {
          return response.json();
        }else{
          setIsError(true);
          setIsLoading(false);
          throw new Error (response.statusText);
        }
      })
      .then((user)=>{
        const {login} = user;
        setUser(login);
        setIsLoading(false);

      })
      .catch((err) => console.log(err));
  },[])

  if(isLoading){
    return <h1> Loading .....</h1>
  }
  if(isError){
    return <h1>Error ......</h1>
  }

  return (
    <div>
      <h1>{user}</h1>
    </div>
  )
}

export default MultiReturn;