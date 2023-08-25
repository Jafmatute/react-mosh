import useGames from "../hooks/useGames.ts";

const GameGrid = () => {
   const {games, error} =useGames();

    return (
        <>
        {error && <p className="text-danger">{error}</p>}
        <ul className="list-group">
            {games.map(g=> <li key={g.id}>{g.name}</li>)}
        </ul>
        </>
    )
}
export default GameGrid;
