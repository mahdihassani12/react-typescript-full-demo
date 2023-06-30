type buttonProps = {
    handleClick: () => void
}

export const Button = (props: buttonProps) => {
    return (
        <div>
            <button onClick={props.handleClick} >Click</button>
        </div>
    )
}