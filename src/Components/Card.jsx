/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useContext } from "react";
import Button from "react-bootstrap/esm/Button";
import { Link,useNavigate } from "react-router-dom";
import { axiosService } from "./Api";

export default function Card({data}){
  const navigate= useNavigate();
  const { id, book, author } = data;
  const { img: bookImg, title, about } = book;
  const { img: authorImg, name, pub } = author;

  const defaultBookImgUrl =
    "https://orange-publishers.com/wp-content/uploads/2024/02/a-book-3088775_640.jpg";
  const defaultAuthorImgUrl =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiZV0WxURh4QRU50JJMkKrbIC2Enn77UUqOwKbRb8R-wopOA7Tm2M1jFuVthM3TDyvsWY&usqp=CAU";

    const handleDelete = async (id) => {
        let res = await axiosService.delete(`/book/${id}`);
        if (res.status == 200) {
          navigate("/dashboard");

      }
    };
    
  return(
    <>    
     <div key={id} className="card-container col-6 col-md-4 col-lg-2 col-xl-2 m-1 w-25 mb-4 ">
     <div className="card h-100 main-card">
           <div className="card-body d-flex flex-column justify-content-between">
             <div >
               <img
                 src={bookImg || defaultBookImgUrl}
                 className="card-img-top "
                 onError={(e) => {
                   e.target.onerror = null;
                   e.target.src = defaultBookImgUrl;
                 }}
                 style={{ height: "500px", objectFit: "cover" }} 
                 alt={title || "Book Image"}
               />
               <div className="card-body">
               <h2 className="card-title  italic font-bold underline">{title || "Title Not Available"}</h2>
             </div>
             <div className="card-text ">
             <p >{about}</p>
             <div className="d-flex align-items-center">
               <div className="circular-image mr-2">
                 <img
                   src={authorImg || defaultAuthorImgUrl}
                   className="rounded-circle"
                   style={{ width: "50px", height: "50px", objectFit: "cover" }}
                   onError={(e) => {
                     e.target.onerror = null;
                     e.target.src = defaultAuthorImgUrl;
                   }}
                   alt={name || "Author Image"}
                 />
               </div>
               <div>
                 <p className="mb-0">{name || "Author Name"}</p>
                 <small className="text-muted">{pub}</small>
               </div></div></div>
               <div className="d-flex align-items-center gap-2 p-3">
               <Button><Link to={`/dashboard/${data.id}/edit`}className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 mr-4 inline-block">Edit</Link></Button>

                <Button variant="danger" onClick={()=>handleDelete(id)}>Delete</Button>
               </div>
             </div>
           </div>
       </div>
     </div>
     </>
  )
}
