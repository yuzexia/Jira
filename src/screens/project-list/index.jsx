import {useState, useEffect} from 'react';
import { List } from "./list"
import { SearchPanel } from "./search-panel"

export const ProjectListScreen = () => {
    const [param, setParam] = useState({
        name: '',
        personId: ''
    })
    const [list, setList]   = useState([])
    useEffect(() => {
        fetch('').then(async response => {
            if(response.ok) {
                setList(await response.json());
            }
        })
    }, [param])
    return (
        <div>
            <SearchPanel param={param} setParam={setParam} />
            <List />
        </div>
    )
}