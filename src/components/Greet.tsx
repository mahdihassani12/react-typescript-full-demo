type GreetProps = {
    name: string
}

export const Greet = (props: GreetProps) => {
    return (
        <div>
            Welcome to {props.name} react typescript course
        </div>
    )
}