/*global kakao */

import { useEffect } from "react";
import './css/Map.css';

function Map(){
  useEffect(()=>{
    var container = document.getElementById('map');
    var options = {
      center: new kakao.maps.LatLng(37.56360434168433, 126.94200365131408),
      level: 3
    };

    var map = new kakao.maps.Map(container, options);
    var markerPosition  = new kakao.maps.LatLng(37.56360434168433, 126.94200365131408); 
    var marker = new kakao.maps.Marker({
      position: markerPosition
    });
    marker.setMap(map);
    }, [])

    return(
      <article>
        <h3>오시는 길</h3>
        <div id="map"></div>
        <section className="location">
          <h4><span></span>주소 안내</h4>
          <ul>
          <li>03722 서울특별시 서대문구 무궁화로 50-1 무궁화종합병원</li>
          <li>Mugunghwa Hospital 50-1 Mugunghwa-ro, Seodaemun-gu, Seoul 03722, Republic of Korea</li>
          </ul>
        </section>
      </article>
    )
  }

  export default Map;