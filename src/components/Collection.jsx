import Card from './Card'
import data from '../data'

const Collection = () => {
    const cards = data.map((card) => {
        return (
            <Card key={card.id} card={card} />
        )
    })
    return (
        <>
            <h2>Collections</h2>
            <ul>
                {cards}
            </ul>
        </>
    )
}

export default Collection