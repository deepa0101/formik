/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
// import Card from "./Card";
 import Card from "./Card";
import { useEffect,useState } from "react";
import { axiosService } from "./Api";

export default function Books (){
const [loading, setLoading] = useState(true);
  const [user, setUser] = useState([]);

  const getData = async () => {
    try {
      const res = await axiosService.get("/book");
      if (res.status === 200) {
        setUser(res.data);
        setLoading(false);
        console.log(user);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);
    
    return(
    <>
    <div className="cards">
     {user.map(data=>{
        return(
            <Card key={data.id} data={data} getData={getData}/>
        )
    })}
    </div>
    </>
)
}