import React, { useState } from 'react';

function Login({ handleLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Kullanıcı bilgilerini kontrol et
    if (password === '1234' && username === 'mustafa') {
      // Şifre ve kullanıcı adı doğru ise giriş yap
      handleLogin();
    } else {
      // Şifre veya kullanıcı adı yanlış ise hata mesajı göster
      console.log('Hatalı şifre veya kullanıcı adı');
    }
  };

  return (
    <div className='d-flex align-items-center justify-content-center' style={{ height: '100vh' }}>
      <div className='jumbotron' style={{ width: '500px' }}>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="exampleInputUsername">Username</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputUsername"
              aria-describedby=""
              onChange={(e) => setUsername(e.target.value)}
              value={username}
            />
          </div>
          <br />
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <br />

          <button type="submit" className="btn btn-primary">
            Giriş Yap
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
