import {  Link } from 'react-router-dom';


function AccountPage() {
  return (
    <div>
      <div class="header">
      <div class="container">
        <div class="header__content flex">
          <div class="left__content flex">
            <div class="currency underline">
              {/* <img src=""  style={{width: "40px",height:"40px"}} class="logo__currency"></img> */}
              <div class="name__currency">Tether</div>
            </div>
            <div class="currency ">
              {/* <img  src="./te2646tdcf-tether-gold-logo-tether-gold-xaut-review-price-market-cap-and-more-.png"  style={{width: "40px",height:"40px"}} class="logo__currency"></img> */}
              <div class="name__currency gold" >Tether Gold</div>
            </div>
          </div>
          <div class="rigth__content">
            <Link to='/' class="user flex">
              <div class="user__name">User01</div> 
              <img src="./account (2).png" alt=""  style={{width: "20px",height:"20px"}} class="icon"/>
            </Link>
          </div>
        </div>
        <div class="value__block flex">
          <div class="money">416.66$
            <div class="current">USD</div>
          </div>
          <div class="changer flex">
            <div class="change flex underline">
              <img src="./recovery (1).png" alt=""  style={{width: "23px",height:"23px"}} class="icon"/>
              <div class="change__name">Provide</div>
            </div>
            <div class="change flex">
              <img src="./download.png" style={{width: "20px",height:"20px"}} alt="" class="icon"/>
              <div class="change__name">Withdraw</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="trade__block">
      <div class="container">
        <div class="trade__content flex">
          <div class="course">
            <div class="curr blg">
              <div class="curr__name">USD</div>
              <div class="curr__value">0.00</div>
            </div>
            <div class="curr">
              <div class="curr__name">EUR</div>
              <div class="curr__value">0.00</div>
            </div>
          </div>
          <div class="main_block_trade">
            <div class="valid__block hidden yellow">
              <div class="address">DSFS980SF8D0F796DSFSDG4GGH8S7SFG8980SF8D0F79</div>
              <div class="valid__text">Your validity address</div>
            </div>
            <div class="valid__block">
              <div class="line__valid">
                <div  class="valid__input"  style={{borderStyle:"dashed"}}>DSFS980SF8D0F796DSFSDG4GGH8S7SFG8980SF8D0F79
               <div  class="lable__input">Your validity address</div>
                </div>
              </div>
              <div class="line__valid">
                <input type="number" style={{fontSize: "25px"}} class="valid__input" id="amount">
               <label for="amount" class="lable__input">Amount</label>
               </input>
              </div>
               <button class="button__valid flex">
                <img src="./download.png" style={{width: "20px",height:"20px"}} alt="" class="icon"/>
                <div class="change__name">Withdraw</div></button>
            </div>
           
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default AccountPage;
