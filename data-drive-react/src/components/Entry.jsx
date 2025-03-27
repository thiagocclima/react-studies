export default function Entry() {
    return (
        <article className="journal-entry">
            <div className="main-image-container">
                <img className="main-image" src="https://scrimba.com/links/travel-journal-japan-image-url" alt="Mount Fuji" />
            </div>
            <div id="1" class="info-container">
                <img src="../public/marker.png" alt="marker"/>
                <span className="country">Japan</span>
                <h2>Mount Fuji</h2>
                <a href="https://maps.app.goo.gl/6RLYZDuuuqJ7kNGZ9">View on Google Maps</a>
                <p>12 Jan, 2021 - 24 Jan, 2021</p>
                <p>Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
            </div>
        </article>
    )
}