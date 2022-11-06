import { Navigate } from 'react-router-dom';

const Admin = () => {
    if(localStorage.getItem("token")){
        return (
            <div className='container'>Admin</div>
        )
    }else{
        <Navigate to={-1} />
        // return <h1 className='container'>You r not a Admin</h1>
        
    }
}

export default Admin