import { useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [email, setEmail] = useState('')
  const [other, setOther] = useState('')


  const handleSubmit = (e) => {
    e.preventDefault()
    if (name !== '' & age !== '' & email !== ''){
      alert(`${name}さんからのお問合せです。年齢は${age}歳、Emailは${email}、その他${other}`)
    }else{
      alert('必須項目が未入力です')
    }
  }

  return (
    <>
      <h2> お問合せフォーム </h2>
      <form onSubmit={handleSubmit}>
        <div style={{
            marginBottom: '16px'
          }}>
        <label style={{ display: 'block' }} htmlFor="name">
          お名前 ※必須
        </label>
        <input
          style={{ width: '10em', border: '1px solid #333' }}
          type="text"
          id="name"
          name="customer_name"
          onChange={(e) => setName(e.target.value)}
        />
        <label style={{ display: 'block' }} htmlFor="age">
          年齢 ※必須
        </label>
        <input
          style={{ width: '10em', border: '1px solid #333' }}
          type="number"
          id="age"
          name="customer_age"
          onChange={(e) => setAge(e.target.value)}
        />
        <label style={{ display: 'block' }} htmlFor="email">
          メールアドレス ※必須
        </label>
        <input
          style={{ width: '10em', border: '1px solid #333' }}
          type="email"
          id="email"
          name="customer_email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label style={{ display: 'block' }} htmlFor='other'>
          その他
        </label>
        <input
        style={{ width: '10em', border: '1px solid #333' }}
          type="text"
          id="other"
          name="customer_other"
          onChange={(e) => setOther(e.target.value)}
        />
        </div>
          <button  style={{ width: '100px' }} type="submit">
            送信
          </button>
      </form>
    </>
  )
}

export default App
