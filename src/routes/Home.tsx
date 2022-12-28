import { HomeForm } from "../components/Home/HomeForm"
import { Container } from "../components/base components/Container"

export const Home = () => {
  //TODO: Replace with logo
  return (
    <Container customStyles='px-4'>
      <div className="container mx-auto flex flex-col justify-center items-center gap-5 ">
        <div className="logo w-full">
          <h1 className="text-3xl font-bold underline">
            Poker With Friends!
          </h1>
        </div>
        <HomeForm />
      </div>
    </Container>

  )
}