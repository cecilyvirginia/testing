import React from 'react'
import Productdetails from './Productdetails.js'
import Productdetailsone from './Productdetailsone.js'
import "./Product.css"
export const Product = ({cart,setCart}) => {
  return (
    <div className='overflow'>
              {/* <h4 className='harm'>PROTECT YOUR EYES FROM HARMFUL BLUE RAYS</h4> */}
              {/* <div className='eighthmaindiv'>
        <p className='type'>FRAME TYPE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;FRAME SHAPE &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; COLOUR&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;FRAME MATERIAL &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;FRAME SIZE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CREATED DESIGNING</p>
      </div> */}
      <div className='seventhmaindiv'>
     <div className='seventhsubdivonesun'>
        <h1 className='pow'>P&nbsp;O&nbsp;W&nbsp;E&nbsp;R</h1><br></br><h1><img  className='sung' src={require('./images/sun.png')}></img></h1>
        <p className='true'>CLEAR SIGHT,TRUE COMFORT<br></br></p><p className='in'>IN SINGLE-VISION & PROGRESSSIVE</p>
     </div>
      <div className='seventhsubdivtwo' ><img className='laptoplady'src={require('./images/Screenshot 2023-07-19 114706.png')}></img></div>
      </div>
      
      <h3 className='computer'>COMPUTER GLASSES</h3>
        {console.log(Productdetails)}
        <div className='ninthmaindiv'>
{Productdetails.map((data)=>
  
     <div className='subdivision'>
  <div className='thirdsubdivtwocopy'>
<h4 className='brown'>{data.title}</h4>
<p className='solid'>black solid Titanium</p>
<img className='fastrack'src={data.img}></img>
<h3 className='eight'>{data.amount} USD</h3>
<p className='frame'>FRAME SIZE:  15-45-145MM</p>
<button className='check' onClick={()=>setCart([...cart,data])} >Add to cart</button>
        </div>
    {/* <div className='nineone'>  <img  className='ninthsubdivone'src={data.img}></img></div> */}
    {/* <div className='ninetwo'>   <img  className='ninthsubdivone'src={data.img2}></img></div>
    <div className='ninethree'>  <img  className='ninthsubdivone'src={data.img3}></img></div> */}
    {/* <h1>{data.amount}</h1>
    <h1>{data.title}</h1>
<button onClick={()=>setCart([...cart,data])} >Add to cart</button> */}
    </div>
    
        

)
}

</div>
<h3 className='sunglass'>SUN GLASSES</h3>
<div className='ninthmaindiv'>
{Productdetailsone.map((data)=>
    <div className='subdivision'>
        <div className='thirdsubdivtwocopy'>
    
<h4 className='brown'>{data.title}</h4>
<p className='solid'>Polarised glasses</p>
<img className='fastrack'src={data.img}></img>
<h3 className='eight'>{data.amount} USD</h3>
<p className='frame'>FRAME SIZE:  15-45-145MM</p>
<button className='check' onClick={()=>setCart([...cart,data])} >Add to cart</button>
        </div>
        {/* {console.log(data)}
        <h1>{data.amount}</h1>
        <img src ={data.img}></img>
<button onClick={()=>setCart([...cart,data])} >Add to cart</button> */}
</div>
)
}</div>

<footer>
        <div class="mainfooter1">
            <div class="subfooterone">
                <h3 class="joinour">Join our newsletter to follow our news</h3>
            </div>
            <div class="subfootertwo">
                <input type="text" placeholder="Email" class="email"></input>
                <button class="subscripe">Subscribe</button>
            </div>
        </div>
        <div class="mainfootertwo">
            <div class="copysubfooterone">
                <h2 class="cou">Optical Eyewear</h2>
                <p class="amet">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                <img src="Frame 14.png" alt=""></img>
            </div>
            <div class="copysubfootertwo">
                <h5 class="headigs">Our Company</h5>
                <ul>
                    <li class="list">Home</li>
                    <li class="list">About</li>
                    <li class="list">Service</li>
                    <li class="list">News</li>
                    <li class="list">Contact</li>
                </ul>
            </div>
            <div class="copysubfooterthree">
                <h5 class="headigs">Services</h5>
                <ul>
                    <li class="list">Market Research</li>
                    <li class="list">Market Analysis</li>
                    <li class="list">SEO Consultancy</li>
                    <li class="list">Page Ranking</li>
                    <li class="list">SMM</li>
                </ul>
            </div>
            <div class="copysubfooterfour">
                <h5 class="headigs">Features</h5>
                <ul>
                    <li class="list">Brand  Strategy</li>
                    <li class="list">Audience Analytics</li>
                    <li class="list">Copywriting</li>
                    <li class="list">Team Training</li>
                    <li class="list">Email Marketing</li>
                </ul>

            </div>
        </div>
        {/* <div class="copyright">
            <h1 class="allright">All Copyrights are reserved my Mamdou Ghaneemy</h1>
        </div> */}
    </footer>
    </div>
  )
}
