interface IProps {
  children: JSX.Element | JSX.Element[]
}

export const Table = ({ children }: IProps) => {
  return (
    <div className=' w-full aspect-poker relative flex justify-center items-center max-w-screen-xl mx-auto'>
      <div className='bg-black rounded-full w-11/12 aspect-poker flex justify-center items-center'>
        <div className='bg-red-700 rounded-full w-11/12 aspect-poker'>
        </div>
      </div>

      {children}
    </div>
  )
}