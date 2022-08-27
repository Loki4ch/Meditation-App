import React from "react";

const MeditationsTable = ({columnsFromProps}) => {
    const columns = [{
        name: 'Meditation name', dataKey: 'meditationName'
    }]

    const data = [
        {lessonName: ''}
    ]

    return (
        <table>
            <th>
                {columns.map(column => {
                    return <td>
                        {column.name}
                    </td>
                })}
            </th>
            <tbody>
            {data.map(entry => (
                <tr>
                    {columns.map(column => {
                        return <td>
                            {entry.column.dataKey}
                        </td>
                    })}
                </tr>
            ))}
            </tbody>
        </table>
    )
}