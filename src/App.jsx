import { Characters, Filters, SearchCharacter } from "./components";

export default function App() {
  return (
    <>
      <main>
        <SearchCharacter/>
        <Filters/>
        <Characters/>
      </main>
    </>
  )
}