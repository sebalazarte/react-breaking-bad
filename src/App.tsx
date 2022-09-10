import { AppRouter } from "./components/AppRouter"
import { CharacterProvider } from "./context/CharacterProvider"

export const App = () => {
  return (
    <div className="container">
      <h1>Breaking bad</h1>
      <CharacterProvider>
        <AppRouter />
      </CharacterProvider>
    </div>
  )
}

