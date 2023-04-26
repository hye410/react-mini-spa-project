import ReservationInfo from '../components/ReservationInfo';
import Search from '../components/Search';
import './css/Post.css';
import Data from '../reservationInfo.json';
import { useState } from 'react';

function Post(){
  const[data,setData] = useState(Data);

  return(
    <article id="post">
      <h3>예약확인</h3>
      <div>
        <Search Data={Data} data={data} setData={setData}/>
        <table>
          <thead>
            <tr>              
              <th>번호</th>
              <th>이름</th>
              <th>연락처</th>
            </tr>
          </thead>
          <tbody>
            {data.map(info => <ReservationInfo key={info.id} info={info}/>)}          
            {/* <ReservationInfo data={data}/> */}
          </tbody>
        </table>
      </div>
    </article>
  )
}

export default Post;