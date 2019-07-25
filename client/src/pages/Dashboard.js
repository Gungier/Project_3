import React from "react";
import "./style.css";
import axios from "axios";
import CurrencyChart from "./CurrencyChart/currencyChart"
class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currency_name: "Bitcoin",
      user_id: this.props.user.user_id,
      currency_names: [],
      // new_names:""
      new_names: []
      // new_names["currency"] = "";
    };
    this.getCurrencies = this.getCurrencies.bind(this);
}
  // state = {
    
  // };
  componentDidMount() {
    this.getCurrencies();
  }
  handleX() { }
  handleClick = (e) => {
    axios
      .post("/currencies/currency",
        {
          currency_name: this.state.currency_name,
          user_id: this.props.user.user_id,
        })
      .then((res) => {
        console.log(this.state.currency_name);
        console.log(res);
        console.log("The state of currency_name is")
        console.log(this.state.currency_name);
        console.log("The state of currency_names is")
        console.log(this.state.currency_names);
        let temp = [];
        temp.push(this.state.currency_name);
        this.setState({ new_names: temp });
        this.getCurrencies();
      })
      .catch((err) => {
        console.log(err);
      })
  }
  getCurrencies = () => {
    let promises = [];
    axios
      .get(`/currencies/currency/${this.state.user_id}`)
      .then((res) => {
        let currency_names = res.data;
        currency_names.forEach(function (singleElement) {
          let myUrl = `https://api.coincap.io/v2/assets/${singleElement.currency_name}/markets`;
          promises.push(axios.get(myUrl))
        });
        axios.all(promises).then((results) => {
          results.forEach( (response,  i)  => {
            const currencyInfo = response.data.data[0].priceUsd;
            currency_names[i].priceUsd=currencyInfo; 
            this.setState({ currency_names });
          })
        });
        console.log(currency_names);
        // console.log(currency_names);
        // currency_names = currency_names.filter(element => element.currency_name != "");
        // console.log(currency_names.length);
        // for (let i  = 0; i < currency_names.length; i++ ) {
        //     console.log(currency_names.length);
        //     if (currency_names[i].currency_name ){
        // axios.get(`https://api.coincap.io/v2/assets/${currency_names[i].currency_name}/markets`)
        //     .then((res) => {
        //         console.log(res);
        //         const currencyInfo = res.data.data[0].priceUsd;
        //        currency_names[i].priceUsd=currencyInfo; 
        //        this.setState({ currency_names });
        //         console.log(currencyInfo);
        //     }).bind(this);
        //     console.log(currency_names[i]);
        //     }
        // }   
        console.log(this.state.currency_names);
      })
      .catch((err) => console.log(err))
  }
  updateInput = (event) => {
    console.log(event)
    this.setState({ currency_name: event.target.value }, function () {
      console.log(this.state)
    });
    // this.setState({new_names:this.state.currency_name}, function () {
    //     console.log("new_name is")
    //     console.log(this.state)
    // }
    // )
  }

  handleX = () => {
    axios
    .delete("/currencies/currency/delete",
        {
            user_id: this.props.user.user_id,
            currency_name: this.props.currency_name,
        
        })

        console.log(this.handleX);  
}
  
  render() {
    let currencies = this.state.currency_names.map((currency, i) => {
      return (
        <CurrencyChart
          key={i}
          currency={currency.currency_name}
          priceUsd={currency.priceUsd} />
      )
    })
    return (
      <div className="container" >
        <body>
          <div className="row">
            <div className="col-md-12">
              <h1>CryptoTracker</h1>
              <h2 className="welcomeMess"> Hi, {this.props.user.user_name}. <br /> Welcome to your Dashboard.</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6" id="dashboardDropdown">
              <br></br>
              To select the crypto-currencies you wish to track, please select items from the below dropdown by clicking on any of them. Your tracked crypto-currencies will appear at right.
                    <br></br>
              <br></br>
              <div className='react-select-container'>
                <select onChange={(e) => {
                  this.updateInput(e)
                  // this.handleClick(e)
                  // this.getCurrencies(e)
                  console.log("On Change fired")
                }
                }>
                  <option value="Bitcoin">Bitcoin</option>
                  <option value="Litecoin">Litecoin</option>
                  <option value="Ethereum">Ethereum</option>
                  <option value="Zcash">Zcash</option>
                  <option value="Dash">Dash</option>
                  <option value="Ripple">Ripple</option>
                  <option value="Monero">Monero</option>
                  <option value="Bitcoin Cash">Bitcoin Cash</option>
                  <option value="NEO">NEO</option>
                  <option value="Cardano">Cardano</option>
                  <option value="EOS">EOS</option>
                </select>
                <button className="btn" onClick={(e) => (this.handleClick(e))}>  Select Currencies </button>
              </div>
            </div>
            <div className="col-md-6" id="dashboardList">
              <br></br>
              To remove a crypto-currency from tracking, simply click the "X" beside the item.
                        <br></br>
              <br></br>
              <ul>
                {this.state.currency_names.map((currency, i) => {
                  return (<li key={i}>{currency.currency_name} <button onClick={this.handleX} type="button" className="btn btn-link btn-sm" id="deleteButton">X</button></li>)
                })}
              </ul>
              {/* <li>{this.state.new_names}</li> */}
              <ul>
                {/* {this.state.new_names.map((currency) => {
                                            return <li>{currency} <button type="button" class="btn btn-link btn-sm" id="deleteButton">X</button></li>
                                        })} */}
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12" id="dashboardTracker">
              {currencies}
              <div className="col-md-12" id="dashboardTracker">
                <br></br>
              </div>
            </div>
          </div>
        </body>
      </div>
    );
  }
}
export default Dashboard;