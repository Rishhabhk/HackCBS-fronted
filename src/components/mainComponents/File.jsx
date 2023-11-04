import React from 'react';
import './Community.css';

const  File=()=>{
    return(
        <>
         <form>
          <h4 className='media'>Media</h4>
          <div className='files'>          
          <input className='file' type="file" accept="image/*"/>
           </div>
          <button className='upload' type="submit">Upload</button>
        </form>
        </>
    )
}
export default File;