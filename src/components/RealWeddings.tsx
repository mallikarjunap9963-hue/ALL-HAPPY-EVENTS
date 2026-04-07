const weddings = [
  {
    title: "Aaradhya Weds Karthik",
    location: "Hyderabad, Telangana",
    date: "March 12, 2023",
    images: [
      "src/images/realwedding/wedding_1_1.jpg",
      "src/images/realwedding/wedding_1_2.jpg",
      "src/images/realwedding/wedding_1_3.jpg",
      "src/images/realwedding/wedding_1_4.jpg",
    ],
  },
  {
    title: "Meera Weds Raghav",
    location: "Bengaluru, Karnataka",
    date: "November 02, 2022",
    images: [
      "src/images/realwedding/wedding_2_1.jpg",
      "src/images/realwedding/wedding_2_2.jpg",
      "src/images/realwedding/wedding_2_3.jpg",
      "src/images/realwedding/wedding_2_4.jpg",
    ],
  },
  {
    title: "Ishita Weds Arjun",
    location: "Chennai, Tamil Nadu",
    date: "January 18, 2024",
    images: [
      "src/images/realwedding/wedding_3_1.jpg",
      "src/images/realwedding/wedding_3_2.jpg",
      "src/images/realwedding/wedding_3_3.jpg",
      "src/images/realwedding/wedding_3_4.jpg",
    ],
  },
];

export default function RealWeddings() {
  return (
    <section className="wide-tb-120">
      <div className="container">
        <div className="section-title text-center">
          <h1>Real Weddings</h1>
          <p>Beautiful love stories from couples across India</p>
        </div>

        <div className="row">
          {weddings.map((wedding, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div className="real-wedding-wrap top-heading">
                <div className="real-wedding">
                  <div className="head">
                    <h3>
                      <a href="/">{wedding.title}</a>
                    </h3>
                    <p>
                      <i className="fa fa-map-marker"></i> {wedding.location}
                    </p>
                  </div>

                  <div className="img">
                    <div className="overlay">
                      <i className="weddingdir_heart_double_alt"></i>
                      Our Story
                    </div>
                    <a href="/">
                      <img src={wedding.images[0]} alt={wedding.title} />
                    </a>
                    <div className="date">{wedding.date}</div>
                  </div>

                  <ul className="list-unstyled gallery">
                    <li>
                      <a href="/">
                        <img src={wedding.images[1]} alt="" />
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <img src={wedding.images[2]} alt="" />
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <div className="load-more">
                          Load <br /> More
                        </div>
                        <img src={wedding.images[3]} alt="" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a href="/" className="btn btn-default btn-rounded btn-lg">
            View More Real Weddings
          </a>
        </div>
      </div>
    </section>
  );
}