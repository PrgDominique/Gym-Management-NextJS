export default function Register() {
  return (
    <div className='h-100 my-40'>
      <div className='flex justify-center '>
        <h1 className=''>Register</h1>
        <div className='grid grid-cols-2 w-60 h-28 my-16'>
          <div>Username: </div>
          <input className='border-2 rounded-md border-slate-800 h-8 w-48' />
          <div>Password: </div>
          <input className='border-2 rounded-md border-slate-800 h-8 w-48' type='password'/>
        </div>
      </div>
    </div>
  )
}
