import { useState, useEffect } from "react";

export default function useLocalStorage(key, initialValue) {
    const [state, setState] = useState();

    //useEffect will trigger when the state is updated 
    //we also want to write the value in local storage
    useEffect(() => {

    }, [state]);

  return (
    [state, setState]
  )
}

//what this hook will do is: it will intercept the useState and make sure that 
//you write and read from the local storage
//so we can use this hook later just exactly we use useState
