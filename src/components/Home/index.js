// Write your JS code here
import './index.css'
import Header from '../Header'

const Home = () => (
  <div className="home_container">
    <Header />
    <div className="card_container">
      <div className="card">
        <h1>Clothes That Get YOU Noticed</h1>
        <img
          className="clothes_img_sm"
          alt="clothes that get you noticed"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
        />
        <p className="para">
          Fashion Is part of the daily air and it does not quite help that it
          changes all the Clothes have always been a marker of the era and we
          are in a revolution. Your fashion makes you seen and heard that way
          you are So celebrate thee seasons new and exciting fashion in your own
          way
        </p>
        <div className="startBtn">
          <button className="start" type="button">
            Shop Now
          </button>
        </div>
      </div>
      <img
        className="clothes_img_lg"
        alt="clothes that get you noticed"
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
      />
    </div>
  </div>
)

export default Home
