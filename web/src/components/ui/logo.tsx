import logo from '@/assets/Logo.png'
export function Logo() {
  return (
    <div className='flex gap-2 items-center'>
        <img src={logo} alt='Logo' className='size-10'></img>
        <h1 className='text-2xl font-semibold'>AgriMitra</h1>
    </div>
  )
}
