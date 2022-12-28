import { Container } from "../components/base components/Container"
import { Table, Seat } from "../components/PWFGame"

export const PWFGame = () => {
  return (
    <>
      <Container customStyles='bg-slate-400'>
        <div className='container mx-auto px-12'>
          <Table>
            <Seat customStyles="
              -left-10
            "/>
            <Seat customStyles="
              top-4 left-0
              lg:top-1/8 lg:left-1
            "/>
            <Seat customStyles="
              bottom-4 left-0
              lg:bottom-1/8 lg:left-1
            "/>
            <Seat customStyles="
              -top-14 left-1/4
            "/>
            <Seat customStyles="
              -bottom-14 left-1/4
            "/>
            <Seat customStyles="
              -bottom-14
            "/>
            <Seat customStyles="
              -top-14 right-1/4
            "/>
            <Seat customStyles="
              -bottom-14 right-1/4
            "/>
            <Seat customStyles="
              top-4 right-0
              lg:top-1/8 lg:right-1
            "/>
            <Seat customStyles="
              bottom-4 right-0
              lg:bottom-1/8 lg:right-1
            "/>
            <Seat customStyles="
              -right-10
            "/>
          </Table>
        </div>
      </Container>
    </>
  )
}