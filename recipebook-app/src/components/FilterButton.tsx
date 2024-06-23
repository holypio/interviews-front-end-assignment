type FilterButtonProps = {
    group: string,
    name: string,
    value: string,
    filter: QueryFilter,
    setFilter: React.Dispatch<React.SetStateAction<QueryFilter>>
}

export default function FilterButton({ group, name, value, filter, setFilter }: FilterButtonProps) {
    let key = "";
    if (group == "cuisines") {
        key = "cuisineId"
    } else if (group == "diets") {
        key = "dietId"
    } else if (group == "difficulties") {
        key = "difficultyId"
    }
    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        const newFilter = structuredClone(filter)
        if (!newFilter[key]) {
            newFilter[key] = []
        }
        if (event.target.checked) {
            newFilter[key].push(value)
            newFilter[key].sort()
        } else {
            newFilter[key].splice(newFilter[key].indexOf(value))
        }

        setFilter(newFilter)
    }

    return (
        <li className="list-inline-item">
            <input type={'checkbox'} name={group} className="btn-check" id={group + '-' + value} onChange={handleChange} checked={filter[key]?.indexOf(value) > -1} />
            <label className="tag btn btn-outline-secondary rounded px-4" htmlFor={group + '-' + value}>{name}</label>
        </li>
    )
}
