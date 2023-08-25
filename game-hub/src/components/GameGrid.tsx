import {useEffect, useState} from "react";
import apiClient from "../services/api-client.ts";

interface Game {
    id:number;
    name:string;
}
interface FetchGamesResponse {
    count:number;
    results:Game[]
}

const GameGrid = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState('');

    useEffect(()=> {
        apiClient.get<FetchGamesResponse>('/games')
            .then(rsp=> setGames(rsp.data.results))
            .catch(err=> setError(err.message))
    },[]);

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
