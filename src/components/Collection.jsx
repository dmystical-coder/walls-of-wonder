const Collection = () => {
    return (
        <>
            <h2>Collections</h2>
            <ul>
                <li>
                    <figure className="color7">
                        <img src="./assets/images/pop-art.jpg" alt="Pop Art: This must be the place" />
                        <figcaption><a href="#">Pop Art</a></figcaption>
                    </figure>
                </li>
                <li>
                    <figure className="color2">
                        <img src="./assets/images/abstract.jpg" alt="Abstract: grey and green squares." />
                        <figcaption><a href="#">Abstract</a></figcaption>
                    </figure>
                </li>
                <li>
                    <figure className="color6">
                        <img src="./assets/images/vivid.jpg" alt="Tree on island in lake with purple sunrise." />
                        <figcaption><a href="#">Vivid</a></figcaption>
                    </figure>
                </li>
                <li>
                    <figure className="color8">
                        <img src="./assets/images/music.jpg" alt="Music: guitar leaning against wall." />
                        <figcaption><a href="#">Music</a></figcaption>
                    </figure>
                </li>
                <li>
                    <figure className="color4">
                        <img src="./assets/images/vehicles.jpg" alt="Vehicles: 1930's car on street." />
                        <figcaption><a href="#">Vehicles</a></figcaption>
                    </figure>
                </li>
                <li>
                    <figure className="color3">
                        <img src="./assets/images/landscape.jpg"
                            alt="Landscape: moonrise over tree-covered mountains." />
                        <figcaption><a href="#">Landscape</a></figcaption>
                    </figure>
                </li>
            </ul>
        </>
    )
}

export default Collection