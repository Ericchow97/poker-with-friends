import { HomeForm } from "../components/Home/HomeForm"

export const Home = () => {
  //TODO: Replace with logo
  return (
    <div className="flex flex-col justify-center items-center w-full h-full px-4">
      <div className="container mx-auto flex flex-col justify-center items-center gap-5 ">
        <div className="logo w-full">
          <h1 className="text-3xl font-bold underline">
            Poker With Friends!
          </h1>
        </div>
        <HomeForm />
      </div>
    </div>
  )
}