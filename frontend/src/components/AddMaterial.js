import React,{useState, useEffect} from 'react';
import dragon from './dragon.png'
import './style.css';
import './Vernav.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams
} from "react-router-dom";
import axios from "axios";

export default function AddMaterial() {
  const [mats, setmats] = useState([]);
  const [addIdx, setAddIdx] = useState(-1);
  const params = useParams();
  const [linker,setlinker]=useState(
    {
      name:"",
      link:''
    }
  )

  useEffect(() => {
    const loadMaterials = async () => {
      const auth = {
        username: localStorage.getItem("username"),
        password: localStorage.getItem("password"),
      }
      const lecmats = await axios.get(`/topics/${params.topicid}/subtopics/${params.subtopicid}/materials`, {auth});
      if (lecmats.status == 200) {
        console.log("ok");
        setmats(lecmats.data);
      } else {
        console.log(lecmats)
        console.log(lecmats.status);
      }
    }
    loadMaterials();
  }, []);

  const createMaterial = async (idx) => {
    if (idx == -1) {
      alert("choose an option");
      return;
    }
    const auth = {
      username: localStorage.getItem("username"),
      password: localStorage.getItem("password"),
    }
    const created = await axios.post(`/topics/${params.topicid}/subtopics/${params.subtopicid}/lectures/${idx}/materials`, linker, {auth});
    if (created.status == 201) {
      console.log("Material created");
    } else {
      console.log(created)
    }
  }

  const getLink = (link) => {
    const pref = link.split('.')[0];
    console.log(pref);
    if (pref.includes('//')) {
      return link;
    } else {
      return "http://" + link;
    }
  }

  const newmat=()=>
  {
    return(<>
      <div class="modal fade" id="staticBackdrop39" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="staticBackdropLabel">Add a Faculty</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
        <div class="input-group mb-3 ">
    <span class="input-group-text w-25" id="basic-addon3"><h5 className='my-2'>Details</h5></span>
    <input type="text" aria-label="First name" className="form-control" placeholder='Name of the Material' value={linker.name} onChange={(e)=>{setlinker({...linker,name:e.target.value})}}/>
  <input type="text" aria-label="Last name" className="form-control" placeholder='Link' value={linker.link} onChange={(e)=>{setlinker({...linker,link:e.target.value})}}/>    </div>
  
  
  
        </div>
        <div class="modal-body">

        <div class="input-group mb-1 ">
          
  <span class="input-group-text w-25" id="basic-addon3"><h5 className='my-2'>Lecture Number </h5></span>
  <select onChange={async (e)=>{setAddIdx(e.target.value)}} class="form-select" aria-label="Default select example">
  <option selected value={-1}>Open this select menu</option>
  {mats.map((lec, idx) => {
    return <option value={idx}>Lecture {idx + 1}</option>
  })}
 
</select></div>
</div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-danger" data-bs-dismiss="modal">Cancel</button>
          <button type="button" class="btn btn-outline-success" data-bs-dismiss="modal" onClick={() => createMaterial(addIdx)} >Add</button>
        </div>
      </div>
    </div>
  </div>
      </>);
  }
  const uploader=()=>
  {

  }
  return (
    <>
    <div className="perv container">
<div className="namers row row-cols-1 row-cols-md-2 g-4">
    <div className="col w-50 p-3">  
    {mats.map((lec, idx) => {
      return   <div className="card wideg border-primary arrow hover-shadow p-3 mb-5 bg-body rounded">

      <div className="card-body">
      <h1 className="card-title">Lecture {idx + 1}</h1>
        <hr ></hr>
        <div className="list-group list-group-flush">
          {lec.materials.map(mat => {
            return <a href={getLink(mat.link)} className="list-group-item " target="_blank"><p className="card-text">{mat.name}</p></a>
          })}
        </div>
      </div>
      </div>

    })}

    <button type="button" className="btn btn-outline-primary" onClick={uploader} data-bs-toggle="modal" data-bs-target="#staticBackdrop39">Upload</button>

  </div>

    </div>
    </div>
    {newmat()}
    </>
  )
}
