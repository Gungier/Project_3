import React from "react";
import axios from "axios";

class CurrencyChart extends React.Component{ 
    state ={
        currencyInfo: null
    }
    
    componentDidMount(){
        console.log(this.props.info);
        // axios.get(`https://api.coincap.io/v2/assets/${this.props.currency}/markets`)
        // .then((res) => {
        //     const currencyInfo = res.data.data[0];
        //     this.setState({ currencyInfo })
        //     console.log(currencyInfo);
        // })

    }
render() {
    return(
        <div className="eachCoin">
            <h4 className="coinName">{this.props.currency}</h4>
            <h5 className="coinData">
            {(() => {
        switch (this.props.currency) {
          case "bitcoin":   return "btc";
          case "litecoin": return "ltc";
          case "ethereum":  return "etc";
          case "zcash":   return "zec";
          case "dash": return "dash";
          case "ripple":  return "xrp";
          case "monero":   return "xmr";
          case "bitcoin-cash": return "bch";
          case "neo":  return "neo";
          default:  return "";
        }
            })()}
            </h5>
            <h5 className="coinValue">{"$" + this.props.priceUsd}</h5>
            <br></br>
        </div>
    )

}
}

export default CurrencyChart;