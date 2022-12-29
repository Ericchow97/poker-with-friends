import { useState, createContext } from "react"
import { Table, Seat } from "../TableComponents"

export interface PWFGameContextInterface {
  setActiveIndex: React.Dispatch<React.SetStateAction<number | null>>
}

export const PWFGameTableContext = createContext<PWFGameContextInterface>({ setActiveIndex: () => null })

export const PWFTable = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  console.log(activeIndex)

  // TODO: TEST make sure clicks only rerender the sit here component
  return (
    <PWFGameTableContext.Provider value={{ setActiveIndex }}>
      <Table>
        <Seat
          customStyles="-left-10"
          index={0}
          modalVisible={activeIndex === 0}
        />
        <Seat
          customStyles="
          top-4 left-0
          lg:top-1/8 lg:left-1"
          index={1}
          modalVisible={activeIndex === 1}
        />
        <Seat customStyles="
          bottom-4 left-0
          lg:bottom-1/8 lg:left-1"
          index={2}
          modalVisible={activeIndex === 2}
        />
        <Seat
          customStyles="-top-14 left-1/4"
          index={3}
          modalVisible={activeIndex === 3}
        />
        <Seat
          customStyles="-bottom-14 left-1/4"
          index={4}
          modalVisible={activeIndex === 4}
        />
        <Seat
          customStyles="-bottom-14"
          index={5}
          modalVisible={activeIndex === 5}
        />
        <Seat
          customStyles="-top-14 right-1/4"
          index={6}
          modalVisible={activeIndex === 6}
        />
        <Seat
          customStyles="-bottom-14 right-1/4"
          index={7}
          modalVisible={activeIndex === 7}
        />
        <Seat
          customStyles="
            top-4 right-0
            lg:top-1/8 lg:right-1"
          index={8}
          modalVisible={activeIndex === 8}
        />
        <Seat
          customStyles="
            bottom-4 right-0
            lg:bottom-1/8 lg:right-1"
          index={9}
          modalVisible={activeIndex === 9}
        />
        <Seat
          customStyles="-right-10"
          index={10}
          modalVisible={activeIndex === 10}
        />
      </Table>
    </PWFGameTableContext.Provider>
  )
}