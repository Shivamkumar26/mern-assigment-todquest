import './App.css';

const App = () => {

  const handleSubmit = (e) => {
    alert('Logged In')
  }
  return (
    <div className="App">
      <div className="left"></div>
      <div className="right">
        <form onSubmit={handleSubmit}>
          <header>
            <span>ALREADY MEMBERS</span>
            <span>Need Help?</span>
          </header>
          <div className='line'></div>
          <div className='inputs'>
            <input type='email' placeholder='Email' />
            <input type='password' placeholder='Enter your Password' />
            <button type='submit'>SIGN IN</button>
          </div>
        </form>
        <div className='sform'>
          <div className='no-account'>Don't have an account yet ?</div>
          <div className='change-color'>Create an account</div>
        </div>
      </div>
    </div>
  );
}

export default App;
