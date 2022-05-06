import axios from 'axios'
import React,{useState,useEffect} from 'react'
import './AddUser.css'
import { useNavigate } from 'react-router-dom'
const AddUser = () => {
  const Navigate = useNavigate()
const [formData,setFormData]= useState({
    nama:'',
    alamat:'',
    email:'',
    umur:'',
    kelas:''
})
const addDataUser =async(e)=>{
e.preventDefault()
    await axios.post("https://6263b9f1005a66e1e3b6686b.mockapi.io/test ",{
  nama_user: formData.nama,
  alamat_user : formData.alamat,
  email_user : formData.email,
  umur_user : formData.umur,
  kelas_user : formData.kelas
  })
  Navigate('/')
}

  return (
    <div className="fom-data">
      <form className='form' onSubmit={addDataUser} >
        <div className="form-group">
          <label className="label">nama</label>
          <input type="text" className="form-input"
          onChange={(e)=>setFormData({...formData,nama :e.target.value})}
          />
        </div>
        <div className="form-group">
          <label className="label">Alamat</label>
          <input type="text" className="form-input"
          onChange={(e)=>setFormData({...formData,alamat :e.target.value})}
          />
        </div>
        <div className="form-group">
          <label className="label">Email</label>
          <input type="text" className="form-input"
          onChange={(e)=>setFormData({...formData,email :e.target.value})}
          />
        </div>
        <div className="form-group">
          <label className="label">umur</label>
          <input type="text" className="form-input"
          onChange={(e)=>setFormData({...formData,umur :e.target.value})}
          />
        </div>
        <div className="form-group">
          <label className="label">Kelas</label>
          <input type="text" className="form-input"
          onChange={(e)=>setFormData({...formData,kelas :e.target.value})}
          />
        </div>
        <button className="btn-submit">Add</button>
      </form>
    

    </div>
  )
}

export default AddUser