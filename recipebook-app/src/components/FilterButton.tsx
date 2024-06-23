export default function FilterButton({ group, name, value }: { group: string, name: string, value: string }) {

    return (
        <li className="list-inline-item">
            <input type={group === 'cuisines' ? 'checkbox' : 'radio'} name={group} className="btn-check" id={group + '-' + value} />
            <label className="tag btn btn-outline-secondary rounded px-4" htmlFor={group + '-' + value}>{name}</label>
        </li>
    )
}
