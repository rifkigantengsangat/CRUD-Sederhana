import axios from 'axios'
import React,{useState,useEffect} from 'react'
import './AddUser.css'
import { useNavigate,useParams } from 'react-router-dom'
const EditUser = () => {
  const Navigate = useNavigate()
  const {id}= useParams()
const [nama,setNama]= useState('')
const [alamat,setAlaamat]= useState('')
const [email,setEmail]= useState('')
const [umur,setUmur]= useState('')
const [kelas,setKelas] = useState('')
useEffect(()=>{
    editDataById()
},[])
const updateDataUser =async(e)=>{
e.preventDefault()
    await axios.put(`https://6263b9f1005a66e1e3b6686b.mockapi.io/test/${id} `,{
  nama_user: nama,
  alamat_user :alamat,
  email_user : email,
  umur_user : umur,
  kelas_user :kelas
  })
  Navigate('/')
}
const editDataById =async()=>{
    const {data} = await axios.get(`https://6263b9f1005a66e1e3b6686b.mockapi.io/test/${id}`)
     setNama(data.nama_user) 
     setAlaamat(data.alamat_user)
     setEmail(data.email_user)
     setUmur(data.umur_user)
     setKelas(data.kelas_user)
}
  return (
    <div className="fom-data">
      <form className='form' onSubmit={updateDataUser} >
        <div className="form-group">
          <label className="label">nama</label>
          <input type="text" className="form-input"
          value={nama}
          onChange={(e)=>setNama(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label className="label">Alamat</label>
          <input type="text" className="form-input"
          value={alamat}
           onChange={(e)=>setAlaamat(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label className="label">Email</label>
          <input type="text" className="form-input"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label className="label">umur</label>
          <input type="text" className="form-input"
          value={umur}
               onChange={(e)=>setUmur(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label className="label">Kelas</label>
          <input type="text" className="form-input"
          value={kelas}
             onChange={(e)=>setKelas(e.target.value)}
          />
        </div>
        <button  className="btn-submit">Edit</button>
      </form>
    

    </div>
  )
}

export default EditUser