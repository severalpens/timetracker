
export default function Row({ record }) {

    return (
        <tr key={record.id}>
            <td className=" px-6 whitespace-nowrap  text-sm text-gray-900">{record.parentId}</td>
            <td className=" px-6 whitespace-nowrap  text-sm text-gray-900">{record.startTime}</td>
            <td className=" px-6 whitespace-nowrap  text-sm text-gray-900">{record.endTime}</td>
        </tr>
    )
}
