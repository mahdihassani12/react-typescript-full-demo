type PersonListsType = {
    name: {
        first: string,
        last: string
    }[]
};

export const PersonList = (props: PersonListsType) => {
    return (
        <div>
            {
                props.name.map((name) => {
                    return (
                        <li key={name.first} >{name.first} {name.last}</li>
                    )
                })
            }
        </div>
    )
}