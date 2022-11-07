import { Navigate } from 'react-router-dom';

const Admin = () => {
    if(localStorage.getItem("token")){
        return (
            <Navigate to={-1} />
           
        )
    }else{
        <div className='container'>Admin</div>
        // return <h1 className='container'>You r not a Admin</h1>
        
    }
}

export default Admin