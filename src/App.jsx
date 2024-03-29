import { Characters, Filters, SearchCharacter } from "./components";

export default function App() {
  return (
    <>
      <main className="bg-[#1a1a1a] w-screen h-screen flex pt-8 items-center flex-col gap-4">
        <SearchCharacter/>
        <Filters/>
        <Characters/>
      </main>
    </>
  )
}