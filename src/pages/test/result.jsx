import { GlobalContext } from '../_app'
import { useContext } from 'react'


function result() {
 const { values, setValues }  = useContext(GlobalContext)
 

  return (
    <div>
      결과 값: {values}
    </div>
  );
}

export default result;