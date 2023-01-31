import React,{useState, useEffect} from "react";

const useFetch = (url) =>{


       //State of blogs, allowing for change to put new and also delete

       const [data, setData] = useState(null)
       const [isPending, setIsPending] = useState(true);
       const [error, setError] = useState(null)
        //  Pass the function that will run every time there is a re-render 
        useEffect (()=>{

            const abortCont = new AbortController();
            fetch(url, {signal: abortCont.signal})
                .then(res => {
    
                    if(!res.ok){
                        throw Error('Could not fetch data for that resource')
                    }
                    
                    
                    return res.json()})
                .then((data)=>{
                    // console.log(data);
    
                    setData(data)
                    setIsPending(false)
                    setError(null)
                })
                .catch((err)=>{
                    if(err.name === 'AbortError'){
                        console.log('fetch aborted');
                    }
                    else{
                        setError(err.message)
                        setIsPending(false)
                    }
                   

                })

                return ()=>{abortCont.abort()}
        }, [url])

        return {data, isPending, error}
}

export default useFetch