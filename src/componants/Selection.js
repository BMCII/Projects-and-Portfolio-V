import React from 'react'


    componentDidMount() {
        

        // url variables
    let amount = 10;
    let category = 15;
    let difficulty = 'easy';
    let type = 'multiple';
    
    //url
    const url = `https://cors-anywhere.herokuapp.com/https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=${type}`;
    
        
        fetch(url)
        .then(res => res.json())
        .then((data) => {
          this.setState({ selected: true })
        })
        .catch(console.log)
      }


const Selection = () => {
  return (
    <div>
<h1>selection form here</h1>
{/* <button onClick={this.selected}>Load Test</button> */}
    </div>
  )
};

export default Selection