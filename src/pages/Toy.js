/*global kakao */
import { useEffect } from "react";


function Toy(){
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


    return (
        <div>
        <div id="map" style={{width:"500px", height:"400px"}}></div>
       
        </div>
    )
  }



export default Toy;