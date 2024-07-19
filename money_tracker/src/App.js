
import { useEffect, useState } from 'react';
import './App.css';


function App() {
  const [name,setName]=useState("");
  const[datetime,setDatetime]=useState("");
  const[description,setDescription]=useState("");
  useEffect(()=>{
    const url=process.env.REACT_APP_API_URL+'/transactions';
    fetch(url)
  })
  // function addNewTransaction(ev){
  //   ev.preventDefault();
  //   const url=process.env.REACT_APP_API_URL+'/transaction';
  //   fetch(url,{
  //     method:'POST',
  //     headers:{'Content-type':'application/json'},
  //     body:JSON.stringify({name,description,datetime})
  //   }).then(response=>{
  //     response.json().then(json=>{
  //       console.log('result',json);
  //     });
  //   });
  // }
  function addNewTransaction(ev) {
    ev.preventDefault();
    const url = process.env.REACT_APP_API_URL + '/transaction';
    const price=name.split(' ')[0];
    fetch(url, {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({
        price, 
        name:name.substring(price.length+1), 
        description,
        datetime, })
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(json => {
        setName('');
        setDatetime('');
        setDescription('');
        console.log('result', json);
        // Optionally, you can perform additional actions based on the response
      })
      .catch(error => {
        console.error('Error adding new transaction:', error);
        // Handle error: Display an error message to the user or perform other actions as needed
      });
  }
  
  return (
    <main>
      <h1> Rs.400.<span>00</span> </h1>
      <form onSubmit={addNewTransaction}> 
        <div className='basics'>
        <input type='text'
        value={name}
        onChange={ev=>setName(ev.target.value)} />
        <input type='datetime-local'
        value={datetime}
        onChange={ev=>setDatetime(ev.target.value)} />
        </div>
        <div className='desc'>
        <input type='text'
        value={description}
        onChange={ev=>setDescription(ev.target.value)} 
        placeholder='description'/>
        </div>
        
        <button type='submit'>Add new transaction</button>

      </form>
      <div className='transactions'>
    <div className='transaction'>
      <div className='left'>
      <div className='name'>New Samsung TV</div>
      <div className='description'>It was time for a new tv</div>
      </div>
      <div className='right'>
        <div className='price red'>-Rs.50000</div>
        <div className='datetime'>2024-12-18 15:45</div>

      </div>
    </div>
    <div className='transaction'>
      <div className='left'>
      <div className='name'>Gig job</div>
      <div className='description'>new website</div>
      </div>
      <div className='right'>
        <div className='price green'>+Rs.30000</div>
        <div className='datetime'>2024-12-18 15:45</div>

      </div>
    </div>
    <div className='transaction'>
      <div className='left'>
      <div className='name'>Iphone</div>
      <div className='description'>new phone</div>
      </div>
      <div className='right'>
        <div className='price red'>-Rs.50000</div>
        <div className='datetime'>2024-12-18 15:45</div>

      </div>
    </div>
  </div>

    </main>
  );
}

export default App;
