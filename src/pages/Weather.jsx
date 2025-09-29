export default function Weather({ weather }) {
  return (
    <div className=" h-90 w-170 m-auto rounded-3xl">
      <div className="main flex justify-start">
        <div className="sec1 flex-col mt-5 ">
          <h5 className="text-white text-5xl  font-bold ">{weather.city}</h5>
          <p className="text-white text-sm font-bold mt-2">{weather.time}</p>
        </div>
      </div>
      <div className="wrap flex justify-between">
        <div className="sec2 flex mt-5">
          <img src={weather.image} className="w-50 h-50" />
          <div className="con flex flex-col gap-5">
            <h5 className="text-white text-4xl font-bold mt-7">
              {weather.condition}
            </h5>
            <div className="text-white flex gap-1 text-5xl font-bold ">
              <span className="self-center">
                <svg
                  fill="#ffffff"
                  width="35px"
                  height="50px"
                  viewBox="0 0 32 32"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path d="M21.25 6.008c0-6.904-10.5-6.904-10.5 0v13.048c-1.238 1.298-2.001 3.061-2.001 5.001 0 4.004 3.246 7.25 7.25 7.25s7.25-3.246 7.25-7.25c0-1.94-0.762-3.702-2.003-5.003l0.003 0.003zM16 28.75c-2.623 0-4.75-2.127-4.75-4.75 0-1.405 0.61-2.667 1.58-3.537l0.004-0.004c0.009-0.008 0.013-0.020 0.022-0.029 0.059-0.063 0.112-0.133 0.157-0.208l0.003-0.006c0.043-0.053 0.084-0.113 0.119-0.175l0.003-0.006c0.020-0.055 0.037-0.122 0.049-0.19l0.001-0.007c0.027-0.081 0.047-0.175 0.056-0.272l0-0.005 0.007-0.033v-13.52c-0.001-0.031-0.002-0.068-0.002-0.105 0-1.52 1.232-2.752 2.752-2.752s2.752 1.232 2.752 2.752c0 0.037-0.001 0.074-0.002 0.11l0-0.005v13.52c0 0.012 0.007 0.023 0.007 0.035 0.009 0.098 0.028 0.188 0.056 0.274l-0.002-0.009c0.013 0.079 0.031 0.149 0.055 0.217l-0.003-0.009c0.038 0.068 0.079 0.127 0.123 0.182l-0.002-0.002c0.048 0.081 0.101 0.151 0.16 0.215l-0.001-0.001c0.009 0.009 0.012 0.021 0.022 0.029 0.974 0.874 1.584 2.136 1.584 3.541 0 2.623-2.127 4.75-4.75 4.75v0zM26.5 1.75c-2.071 0-3.75 1.679-3.75 3.75s1.679 3.75 3.75 3.75c2.071 0 3.75-1.679 3.75-3.75v0c-0.002-2.070-1.68-3.748-3.75-3.75h-0zM26.5 6.75c-0.69 0-1.25-0.56-1.25-1.25s0.56-1.25 1.25-1.25c0.69 0 1.25 0.56 1.25 1.25v0c-0.001 0.69-0.56 1.249-1.25 1.25h-0z"></path>{" "}
                  </g>
                </svg>
              </span>
              {weather.temperature}°C
            </div>
          </div>
        </div>
        <ul className="relative left-27 Current flex flex-col items-center justify-center h-64 gap-5">
          <li className="text-white self-baseline flex gap-1 text-1xl font-bold ">
            <span className="self-center">
              <svg
                width="25px"
                height="30px"
                viewBox="0 0 24 24"
                fill="#ffffff"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M15.7639 7C16.3132 6.38625 17.1115 6 18 6C19.6569 6 21 7.34315 21 9C21 10.6569 19.6569 12 18 12H3M8.50926 4.66667C8.87548 4.2575 9.40767 4 10 4C11.1046 4 12 4.89543 12 6C12 7.10457 11.1046 8 10 8H3M11.5093 19.3333C11.8755 19.7425 12.4077 20 13 20C14.1046 20 15 19.1046 15 18C15 16.8954 14.1046 16 13 16H3"
                    stroke="#ffffff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{" "}
                </g>
              </svg>
            </span>
            Wind : {weather.wind} km/h
          </li>
          <li className="text-white flex gap-1 text-1xl font-bold self-baseline">
            <span className="self-center">
              <svg
                width="25px"
                height="30px"
                viewBox="0 0 24 24"
                fill="#ffffff"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M12 9C11.4477 9 11 9.44771 11 10V15.2676C10.4022 15.6134 10 16.2597 10 17C10 18.1046 10.8954 19 12 19C13.1046 19 14 18.1046 14 17C14 16.2597 13.5978 15.6134 13 15.2676V10C13 9.44771 12.5523 9 12 9Z"
                    fill="##ffffff"
                  ></path>{" "}
                  <path
                    d="M11 6C11 5.44772 11.4477 5 12 5C12.5523 5 13 5.44772 13 6C13 6.55228 12.5523 7 12 7C11.4477 7 11 6.55228 11 6Z"
                    fill="##ffffff"
                  ></path>{" "}
                  <path
                    d="M16 7C15.4477 7 15 7.44772 15 8C15 8.55229 15.4477 9 16 9C16.5523 9 17 8.55229 17 8C17 7.44772 16.5523 7 16 7Z"
                    fill="#ffffff"
                  ></path>{" "}
                  <path
                    d="M6 13C5.44772 13 5 12.5523 5 12C5 11.4477 5.44772 11 6 11C6.55228 11 7 11.4477 7 12C7 12.5523 6.55228 13 6 13Z"
                    fill="#ffffff"
                  ></path>{" "}
                  <path
                    d="M7 8C7 8.55229 7.44772 9 8 9C8.55228 9 9 8.55228 9 8C9 7.44772 8.55228 7 8 7C7.44772 7 7 7.44772 7 8Z"
                    fill="#ffffff"
                  ></path>{" "}
                  <path
                    d="M18 13C17.4477 13 17 12.5523 17 12C17 11.4477 17.4477 11 18 11C18.5523 11 19 11.4477 19 12C19 12.5523 18.5523 13 18 13Z"
                    fill="#ffffff"
                  ></path>{" "}
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM12 20.9932C7.03321 20.9932 3.00683 16.9668 3.00683 12C3.00683 7.03321 7.03321 3.00683 12 3.00683C16.9668 3.00683 20.9932 7.03321 20.9932 12C20.9932 16.9668 16.9668 20.9932 12 20.9932Z"
                    fill="#ffffff"
                  ></path>{" "}
                </g>
              </svg>
            </span>
            Pressure : {weather.pressure} hPa
          </li>
          <li className="text-white flex gap-1 text-1xl font-bold self-baseline">
            <span className="self-center">
              <svg
                width="25px"
                height="30px"
                viewBox="0 0 16 16"
                fill="#ffffff"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M8 0C10.2091 0 12 1.79086 12 4V5C14.2091 5 16 6.79086 16 9H0V8C0 5.79086 1.79086 4 4 4C4 1.79086 5.79086 0 8 0Z"
                    fill="##ffffff"
                  ></path>{" "}
                  <path d="M4 16L5 11H3L2 16H4Z" fill="#ffffff"></path>{" "}
                  <path d="M8 16L9 11H7L6 16H8Z" fill="#ffffff"></path>{" "}
                  <path d="M13 11L12 16H10L11 11H13Z" fill="#ffffff"></path>{" "}
                </g>
              </svg>
            </span>
            Precipitation: {weather.precipitation} mm
          </li>
          <li className="text-white flex gap-1 text-1xl font-bold self-baseline">
            <span className="self-center">
              <svg
                width="25px"
                height="30px"
                viewBox="0 0 24 24"
                fill="#ffffff"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M12 21.5C16.1012 21.5 19.5 18.4372 19.5 14.5714C19.5 12.1555 18.2672 9.71249 16.8732 7.70906C15.4698 5.69214 13.8515 4.04821 12.9778 3.21778C12.4263 2.69364 11.5737 2.69364 11.0222 3.21779C10.1485 4.04821 8.53016 5.69214 7.1268 7.70906C5.73282 9.71249 4.5 12.1555 4.5 14.5714C4.5 18.4372 7.8988 21.5 12 21.5Z"
                    stroke="#222222"
                  ></path>{" "}
                  <path
                    d="M12 18C11.4747 18 10.9546 17.8965 10.4693 17.6955C9.98396 17.4945 9.54301 17.1999 9.17157 16.8284C8.80014 16.457 8.5055 16.016 8.30448 15.5307C8.10346 15.0454 8 14.5253 8 14"
                    stroke="#222222"
                    strokeLinecap="round"
                  ></path>{" "}
                </g>
              </svg>
            </span>
            Humidity : {weather.humidity}%
          </li>
        </ul>
      </div>
    </div>
  );
}
