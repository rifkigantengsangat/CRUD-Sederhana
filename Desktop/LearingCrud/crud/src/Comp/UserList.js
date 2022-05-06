import React ,{useState,useEffect} from 'react'
import  Axios  from 'axios'
import './UserList.css'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
const UserList = () => {
    const [user,setUser] = useState([])
    useEffect(() =>{ 
fetchData()
    },[])

    const  fetchData = async() =>{
   const {data} = await Axios.get('https://6263b9f1005a66e1e3b6686b.mockapi.io/test ')  
   setUser(data)
}
const deleteData = async(id)=>{
    await Axios.delete(`https://6263b9f1005a66e1e3b6686b.mockapi.io/test/${id}`)
    fetchData()
}  
  return (
  <div className="container">
      <table className="table">
          <thead className="table-header">
              <tr>
                  <th>Nama</th>
                  <th>Alamat</th>
                  <th>email</th>
                  <th>umur</th>
                  <th>Kelas</th>
                  <th>Update</th>
                  <th>Delete</th>
              </tr>
          </thead>
          {user&&user.map((user)=>{
              return(
     <tbody key={user.id}>
           <tr>
               <td>{user.nama_user}</td>
               <td>{user.alamat_user} </td>
               <td>{user.email_user}</td>
               <td>{user.umur_user}</td>
               <td>{user.kelas_user}</td>
               <td><Link to={`/edit/${user.id}`} className="btn"> Update </Link></td>
               <td><button className="btn-delete" onClick={()=>{deleteData(user.id)}}>Delete</button></td>
         </tr>
 
     </tbody>
          )})}
         
      </table>
      <div className='li'>
      <Link className="Link" to='/Add'>Tambah</Link>
      </div>
  </div>
  )
}

export default UserList

