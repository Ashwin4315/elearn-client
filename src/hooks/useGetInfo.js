import { useEffect, useState } from "react";



function useGetInfo(url) {
    const [course, setcourse] = useState([]);
    const [loading, setloading] = useState(false);
    const [error, seterror] = useState(null);
    


    useEffect(() => {
            const fetchanime = async() => {
                try {
                setloading(true)
                const options = {
                    method: 'GET'
                    
                }
    
                    const response = await fetch(url, options)
                    const data = await response.json();
                    setcourse(data)
                }
                catch (error) {
                    console.log(error)
                    seterror(error)
                }
                setloading(false)
                
             
            }
        

            fetchanime()
      
        
    }, [url])

    return [course,loading,error]
}

export default useGetInfo;