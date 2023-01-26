// ** Other Views Imports
import Item from '../../components/item'

function TodoList(props) {
    const { responseData } = props

    return (
        <>
            {responseData.map((item) => (
                <Item item={item} key={item.todoIdx} />
            ))}
        </>
    )
}

export default TodoList
