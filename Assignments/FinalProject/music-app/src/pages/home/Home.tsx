import { Link } from "react-router-dom";

function Home() {
  const pagePadding = "5rem";
  return (
    <>
      <body
        className="d-flex h-100 text-center text-white bg-dark vsc-initialized"
        data-new-gr-c-s-check-loaded="14.1168.0"
        data-gr-ext-installed=""
        data-new-gr-c-s-loaded="14.1168.0"
      >
        <div className="container-xxl d-flex w-100 h-100 p-auto mx-auto flex-column">
          <main
            className="w-2 py-4"
            style={{ padding: `0 ${pagePadding}`, minHeight: "100vh" }}
          >
            <div
              className="container-lg pt-4"
              style={{ width: "300px", height: "100px", paddingTop: "500px" }}
            >
              <h1>Welcome to Our Music App</h1>
              <p className="lead">
                Discover, listen, and enjoy your favorite music with our app.
                Explore a vast collection of tracks, create playlists, and
                immerse yourself in the world of music.
              </p>
              <p className="lead">
                <Link
                  to="/login"
                  className="btn btn-lg  fw-bold border-white bg-white"
                >
                  Login
                </Link>
              </p>
            </div>
          </main>

          <footer className="mt-auto text-white-50">
            <p>
              Cover template for{" "}
              <a href="https://getbootstrap.com/" className="text-white">
                Bootstrap
              </a>
              , by{" "}
              <a href="https://twitter.com/mdo" className="text-white">
                @mdo
              </a>
              .
            </p>
          </footer>
          <div id="coupon-birds-embed-div"></div>
        </div>
      </body>
    </>
  );
}

export default Home;
