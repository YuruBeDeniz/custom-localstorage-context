import { useState, useEffect } from "react";

type ReturnType<T> = [
    T | undefined,
    React.Dispatch<React.SetStateAction<T | undefined>>
];

export const useLocalStorage = <T,> (key: string, initialValue?: T): ReturnType<T> => {
    const [state, setState] = useState<T | undefined>(
        () => {
            if(!initialValue) return;
            try{
                const value = localStorage.getItem(key);
                return value ? JSON.parse(value) : initialValue;
            } catch (err) {
                return initialValue;
            }
        }
    );

    //useEffect will trigger when the state is updated 
    //we also want to write the value in local storage
    useEffect(() => {
        if(state) {
            try {
                localStorage.setItem(key, JSON.stringify(state));
            } catch (err) {
                console.log(err);
            }
        }
    }, [state, key]);

  return [state, setState];
};

//what this hook will do is: it will intercept the useState and make sure that 
//you write and read from the local storage
//so we can use this hook later just exactly we use useState hook
//it will make sure that it writes the value to the local storage
//and grab the value from there if it is there 

//for TS we need to type the values of key and initialValue. Instead of using any; 
//we'll use generics. It is something you can use when you dont know the value that
//will be sent to the function. With type any, you lose the information about the type
//that is sent in. with generics, TS can infer the type: <T>

//initialValue's type is the one we dont know what is going to be used for state, so:
//initialValue: T -> this one will make sure that TS infers this value (T) and assign 
//it to initialValue

//with generics, TS will keep the type inside the function all the time; we dont lose the type 

//ReturnType : T | undefined --> sometimes we dont want to specify an initial value
//so that's why it can be undefined
//React.Dispatch<React.SetStateAction<T | undefined>> --> when we hover over setState
//we see its type is dispatch

//we have a key we sent in to this hook as a parameter so we check if that key is in localstorage;
//if it is there, we get the value const
//const value = localStorage.getItem(key);

//we have to parse the value as we can only write strings in the local storage
//so if we have the value, we parse it back to its original shape and then we 
//return that value, otherwise we return the initialvalue

//and if we get an error, we return the initial value