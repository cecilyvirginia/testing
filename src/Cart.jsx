import React,{useEffect} from 'react'
import "./Cart.css"

export const Cart = ({cart,setCart}) => {
    const [price,setPrice]=React.useState(0);
    useEffect(()=>{
        let initialvalue=0;
        cart.map((datta)=>initialvalue=initialvalue+(datta.amount*datta.count))
        setPrice(initialvalue);
    })
    const deletefunction=(datas)=>{
        let remove=cart.filter((fil)=>fil.id !==datas.id)
   setCart(remove)
    }
    const incrementfunction=(data,value)=>{
        const position=cart.indexOf(data);
        cart[position].count=cart[position].count+value;
        setCart([...cart]);
    }
  return (





    <div className='overflow'>


      <div className='tenthmaindiv'>
    
        <div className='tenthsubdivone'><img className='paytm' src={require('./images/paytm.png')}></img> 
        <div className='tenthsubdivtwo'><h2 className='flash'>Flash Rs 200 Cashback</h2>
        <p className='on'>On a minimum spend of Rs 2000 using Paytm,<br></br>Wallet and postpaid transaction </p>
        </div>
        </div>
      </div>

      {/* <div>
        <h2 className='coup'>Coupons</h2>
       <div className='apply'><h4>Apply Coupon</h4>
       <img className="applyarrow" src={require('./images/right-arrow.png')}></img>
       <div className='applydiv'></div>
       </div>
      </div> */}

<div>
{cart.map((out)=>
  
     <div className='subdivision'>
  <div className='thirdsubdivtwocopyone'>
<h3 className='brown'>{out.title}</h3>
<p className='solid'>black solid Titanium</p>
<img className='fastrack'src={out.img}></img>
<h3 className='eight'>{out.amount} USD</h3>
<p className='frame'>FRAME SIZE:  15-45-145MM</p>
<button className='remove' onClick={()=>deletefunction(out)}>Remove</button>
            <button className='plus' onClick={()=>incrementfunction(out,1)}>+1</button>
            {out.count}
            <button className='minus' onClick={()=>incrementfunction(out,-1)}>-1</button><br></br>
            
<button type="button" class="btn btn-primary sub" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Submit
</button>


<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Saved</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary close" data-bs-dismiss="modal">Close</button>
       
      </div>
    </div>
  </div>
</div>


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
        {/* {

        cart.map((out)=>
        <div>
            {out.amount}
            {out.img}
            <button onClick={()=>deletefunction(out)}>Remove</button>
            <button onClick={()=>incrementfunction(out,1)}>+</button>
            {out.count}
            <button onClick={()=>incrementfunction(out,-1)}>-</button>
            
            </div>
        
        )
    } */}
    <div className='move'>
    <h3>PRICE DETAILS</h3>
     <h5>Discount on MRP &nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-500</h5>
    <h5>Coupon Discount&nbsp; &nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>Apply Coupon</span></h5>

    <h5 className='details'> Total Amount &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{price}</h5>
    <button className='place'>Place Order</button>
    </div>
   
    <footer>
        <div class="mainfooter2">
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
