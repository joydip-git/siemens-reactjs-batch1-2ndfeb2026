type PersonPropType = {
    personName: string,
    updateNameHandler: (name: string) => void
}

const Person = ({ personName, updateNameHandler }: Readonly<PersonPropType>) => {
    return (
        <div>
            <label htmlFor="txtName">Name: &nbsp;</label>
            <input id="txtName" type="text" value={personName} onChange={
                (e) => updateNameHandler(e.target.value)
            } />
        </div>
    )
}

export default Person