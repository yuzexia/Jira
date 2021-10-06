/*
 * @Author: yuze.xia 
 * @Date: 2021-10-06 13:08:25 
 * @Last Modified by: yuze.xia
 * @Last Modified time: 2021-10-06 14:01:43
 */
import React, {useEffect} from 'react'

export const List = ({users, list}) => {

    return(
        <table>
            <thead>
                <tr>
                    <th>名称</th>
                    <th>负责人</th>
                </tr>
            </thead>
            <tbody>
                {
                    list.map(project => <tr key={project.id}>
                        <td>{project.name}</td>
                        <td>{users.find(user => user.id === project.personId)?.name || '未知'}</td>
                    </tr>)
                }
            </tbody>
        </table>
    )
}