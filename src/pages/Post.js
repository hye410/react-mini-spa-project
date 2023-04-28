import ReservationInfo from '../components/ReservationInfo';
import Search from '../components/Search';
import './css/Post.css';
import { FilterData } from '../api/api';
import { useEffect, useState } from 'react';

function Post(){
  const Data = FilterData();
  
  const[data,setData] = useState(Data);

  const deletedId = JSON.parse(sessionStorage.getItem('id')) || [];

//   const newData = 
//   Data.filter(info => {
//   for(let i of deletedId){
//     if(info.id === i){
//       return false;
//     }
//     return true;
//   }
// });
  return(
    <article id="post">
      <h3>예약확인</h3>
      <div>
        {/* <Search Data={Data} data={data} /> */}
        <table>
          <thead>
            <tr>              
              <th>번호</th>
              <th>이름</th>
              <th>연락처</th>
            </tr>
          </thead>
          <tbody>
            {/* {data.map(info => <ReservationInfo key={info.id} info={info}/>)}           */}
            <ReservationInfo data={data} setData={setData}/>
          </tbody>
        </table>
      </div>
    </article>
  )
}

export default Post;