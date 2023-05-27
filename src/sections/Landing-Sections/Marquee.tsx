import React from "react";
import Marquee from "react-fast-marquee";

const InfiniteMarquee: React.FC = () => {
  const array = [1, 2, 3, 4, 5, 6];
  return (
    <div className="relative flex h-[50vh] w-[200vw] -translate-x-32 items-center justify-around max-lg:h-[40vh]">
      <div className="z-10 -rotate-3">
        <Marquee
          className="bg-logo"
          speed={40} // Adjust the speed as needed
          gradient={false} // Disable gradient if not required
        >
          {array.map((el) => {
            return (
              <div
                key={el}
                className="flex h-[16vh] items-center justify-center gap-x-20 bg-logo px-10 max-lg:h-[8vh] "
              >
                <div className="flex h-[100%] w-full items-center justify-around bg-logo text-4xl max-lg:text-2xl">
                  FOR YOURS TO BUILD
                </div>
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 16 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="bg-logo max-lg:w-5 max-lg:h-5"
                >
                  <path
                    d="M8.05577 0.576162L8.15555 0.652576L9.97836 2.23639L12.5571 2.05607C13.0687 2.02029 13.5172 2.37591 13.6095 2.86801L13.6244 2.98388L13.8047 5.56258L15.6268 7.14723C16.0115 7.48169 16.0788 8.0456 15.8019 8.45822L15.7254 8.558L14.1416 10.3798L14.3219 12.9595C14.3577 13.4711 14.0021 13.9197 13.51 14.012L13.3941 14.0268L10.8144 14.2072L9.23079 16.0292C8.89633 16.414 8.33241 16.4812 7.9198 16.2043L7.82002 16.1279L5.9972 14.5441L3.4185 14.7244C2.90691 14.7602 2.45834 14.4046 2.36603 13.9125L2.35118 13.7966L2.17086 11.2179L0.348776 9.63324C-0.0359764 9.29878 -0.103206 8.73486 0.173711 8.32225L0.250125 8.22247L1.83387 6.39866L1.65362 3.82095C1.61784 3.30937 1.97346 2.8608 2.46556 2.76848L2.58142 2.75363L5.15913 2.57338L6.74478 0.751227C7.07924 0.366475 7.64315 0.299245 8.05577 0.576162Z"
                    fill="#D0D5FF"
                  />
                </svg>
              </div>
            );
          })}
        </Marquee>
      </div>
      <div className="absolute top-[16vh] h-[16vh] w-[200vw] rotate-3 bg-blue-500 max-lg:h-[8vh]"></div>
    </div>
  );
};

export default InfiniteMarquee;
