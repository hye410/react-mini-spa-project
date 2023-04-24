import './css/common.css';
import './css/Home.css';

function Home(){
  return(
    <article id="home">
      <h3 className='hide'>Home</h3>
      <figure>
        <img src="/images/hospital-main.jpg" alt="main"/>
        <figcaption>
          무궁화 종합병원은 최고의 의료진과 최선을 다합니다.
        </figcaption>
      </figure>
    </article>
  )
}

export default Home;