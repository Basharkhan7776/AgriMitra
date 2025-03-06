import logo from '@/assets/Logo.png'
import { useNavigate } from 'react-router-dom'
export function Logo() {
  const navigate=useNavigate();
  return (
    <div className='flex gap-2 items-center cursor-pointer' onClick={()=>navigate('/')}>
        <img src={logo} alt='Logo' className='size-10 rounded-full'></img>
        <h1 className='text-2xl font-semibold'>AgriMitra</h1>
    </div>
  )
}
