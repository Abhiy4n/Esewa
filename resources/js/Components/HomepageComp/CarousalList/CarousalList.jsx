import "./Carousal.css"

export default function CarousalList({ data, MainTitle }) {
  const items = data?.[0] ?? {}

  return (
    <section>
      <div className="service-container">

        {/* Section header */}
        <div className="service-header">
          <p className="section-title">{MainTitle}</p>
          <a href="#" className="view-more-btn">View more</a>
        </div>

        {/* Cards */}
        <div className="card-container">
          {
            Object.keys(items).map((key) => {
              const { overlay, image, title } = items[key];
              return (
                <div className="card" key={key}>
                  {/* Image section — overlay badge sits inside here */}
                  <div className="image">
                    <div className="overlay"><p>{overlay}</p></div>
                    <img src={image} alt={title} />
                  </div>
                  {/* White bottom panel */}
                  <div className="bottom-overlay">
                    <div className="title"><p>{title}</p></div>
                    <div className="bottom"><a href="#">View Details</a></div>
                  </div>
                </div>
              )
            })
          }

          {/* Carousel arrow */}
          <button className="carousel-arrow" aria-label="Next">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

      </div>
    </section>
  )
}
