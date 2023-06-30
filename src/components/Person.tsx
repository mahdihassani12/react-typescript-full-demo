type personTypes = {
    name: {
        first: string,
        last: string
    }
}

export const Person = (props: personTypes) => {
    return (
        <div>
           Welcome { props.name.first } { props.name.last }
        </div>
    )
}