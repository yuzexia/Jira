import { useEffect, useState } from "react"

export const SearchPanel = (param, setParam) => {
    
    const [users, setUsers] = useState([]);

    return (
        <form>
            {/* setParam(Object.assign({}, param, {name: evt.target.value})) */}
            <input type='text' value={param.name} onChange={evt => setParam({
                ...param,
                value: evt.target.value
            })} />
            <select value={param.personId} onChange={evt => setParam({
                ...param,
                value: evt.target.value
            })}>
                <option value={''}>负责人</option>
                {
                    users.map(user => <option value={user.id}>{user.name}</option>)
                }
            </select>
        </form>
    )
}