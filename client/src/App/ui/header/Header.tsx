import { useState } from "react";
import { text } from "./data";
import type { component } from "./data";

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleState = () => setIsOpen(!isOpen);
  const element: component = text[0];

  return (
    <header
      className="py-5"
      style={{ background: "linear-gradient(135deg, #007bff, #6610f2)" }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card shadow-lg rounded-4 overflow-hidden">
              <div className="card-body text-center p-5">
                <h1
                  className="card-title display-4 fw-bold mb-4 text-white"
                  style={{ textShadow: "2px 2px 6px rgba(0,0,0,0.3)" }}
                >
                  This is Weather App
                </h1>

                <button
                  className={`btn btn-lg mb-3 ${
                    isOpen ? "btn-outline-light" : "btn-light"
                  } shadow-sm`}
                  onClick={toggleState}
                  style={{ transition: "all 0.3s ease" }}
                >
                  {isOpen ? "Hide Details" : "Show More"}
                </button>

                {isOpen && (
                  <div className="card mt-4 p-4 border-0 bg-light text-dark shadow-lg rounded-4 animate__animated animate__fadeIn">
                    <h2 className="card-title fw-bold">{element.title}</h2>
                    <img
                      src={element.url}
                      alt="img"
                      className="img-fluid rounded-4 mb-3 shadow-sm"
                      style={{ maxHeight: "300px", objectFit: "cover" }}
                    />
                    <h4 className="card-subtitle mb-2 text-muted">
                      {element.headline}
                    </h4>
                    <p className="card-text">{element.text}</p>
                    <button className="btn btn-primary btn-sm mt-2 shadow-sm">
                      Learn More
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
