function Login({setUser}) {

  return (
    <>
      <div>
        <button onClick={()=>setUser('admin')}>ADMIN</button>
        <button onClick={()=>setUser('user')}>USER</button>
      </div>

    </>
  )
}

export default Login;