const Card = ({ card }) => {
    const { imgUrl, altText, figCaption, className } = card
    console.log(imgUrl, altText, figCaption, className)
    return (
        <>
            <li>
                <figure className={className}>
                    <img src={imgUrl} alt={altText} />
                    <figcaption><a href="#">{figCaption}</a></figcaption>
                </figure>
            </li>
        </>
    )

}

export default Card