import './app.css'
import { Characters, Filters, Pagination, SearchCharacter } from "./components";

export default function App() {
  return (
    <>
      <main className="bg-[#1a1a1a] w-screen flex pt-8 items-center flex-col gap-3">
        <SearchCharacter/>
        <Filters/>
        <Characters/>
        <Pagination/>
      </main>
    </>
  )
}