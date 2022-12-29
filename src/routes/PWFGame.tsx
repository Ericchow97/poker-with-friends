import { Container } from "../components/baseComponents"
import { PWFTable } from "../components/PWFGame/components"

//TODO: on access create connection
export const PWFGame = () => {

  return (
    <>
      <Container customStyles='bg-slate-400'>
        <div className='container mx-auto px-12'>
          <PWFTable />
        </div>
      </Container>
    </>
  )
}