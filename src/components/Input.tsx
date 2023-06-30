import React from "react"

type inputProps = {
    value: string,
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input = (props: inputProps) => {
    return (
        <div>
            <input type="text" value={props.value} onChange={props.handleChange} />
        </div>
    )
}