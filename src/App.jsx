import { useGSAP } from "@gsap/react";
import gsap from "gsap"
import { Draggable } from "gsap/Draggable"
import InertiaPlugin from "gsap/InertiaPlugin";

gsap.registerPlugin(Draggable, InertiaPlugin);

function App() {

  useGSAP(() => {
    const draggable = {
      element: document.querySelector('.draggable'),
      container: document.querySelector('.draggable_container'),
      items: document.querySelectorAll('.draggable_item'),
    };

    const isBounded = true;

    const init = () => {
      draggable.items.forEach((item, index) => {
        const itemRect = item.getBoundingClientRect(),
          itemWidth = itemRect.width,
          itemHeight = itemRect.height;

        const positions = {
          left: {
            x: gsap.utils.random(-itemWidth - 500, -itemWidth - 100),
            y: gsap.utils.random(0, window.innerHeight - itemHeight),
          },
          right: {
            x: gsap.utils.random(window.innerWidth + 100, window.innerWidth + 500),
            y: gsap.utils.random(0, window.innerHeight - itemHeight),
          },
          top: {
            x: gsap.utils.random(0, window.innerWidth - itemWidth),
            y: gsap.utils.random(-itemHeight - 500, -itemHeight - 100),
          },
          bottom: {
            x: gsap.utils.random(0, window.innerWidth - itemWidth),
            y: gsap.utils.random(window.innerHeight + 100, window.innerHeight + 500),
          },
        };

        const fromSide = gsap.utils.random(['left', 'right', 'top', 'bottom']);
        const { x, y } = positions[fromSide];

        gsap.set(item, {
          x: x,
          y: y,
          zIndex: Math.floor(Math.random() * draggable.items.length) + 1,
        });

        gsap.to(item, {
          duration: 2.4,
          x: gsap.utils.random(window.innerWidth * 0.5, window.innerWidth * 0.5 - itemWidth),
          y: gsap.utils.random(window.innerHeight * 0.5, window.innerHeight * 0.5 - itemHeight),
          delay: index * 0.2,
          ease: 'elastic.inOut',

          onComplete: () => {
            Draggable.create(item, {
              bounds: isBounded ? draggable.element : null,
              inertia: true,
            });
          },
        });
      });
    };

    init();
  }, [])


  return (
    <>
      <main className="app">
        <section className="draggable">
          <div className="draggable_title">
            <h1>Adraggable</h1>
          </div>
          <div className="draggable_container">
            <div className="draggable_item">
              <img
                src="https://cdn.cosmos.so/e60c80a0-36ff-4eba-8409-8cbd8b4f0d84?format=jpeg"
                alt=""
              />
            </div>
            <div className="draggable_item">
              <img
                src="https://cdn.cosmos.so/a81fb1d4-6a6b-4613-8cad-a3f2b24762b3?format=jpeg"
                alt=""
              />
            </div>
            <div className="draggable_item">
              <img
                src="https://cdn.cosmos.so/9b443ac5-6067-42dc-96d3-a774f6fc3246?format=jpeg"
                alt=""
              />
            </div>
            <div className="draggable_item">
              <img
                src="https://cdn.cosmos.so/1226e77b-8691-4b78-a0cc-b23a8f79b8a2?format=jpeg"
                alt=""
              />
            </div>
            <div className="draggable_item --text">
              <img
                src="https://cdn.cosmos.so/628cb33a-7a95-4116-9c29-9d0152804ebc?format=jpeg"
                alt=""
              />
              {/* <h2>We Are Digital Makers</h2>
              <p>
              A community-driven brand focused on empowering developers and designers
              to create modern and efficient websites.
              </p> */}
            </div>
            <div className="draggable_item --text">
              <img
                src="https://cdn.cosmos.so/60cc84ec-a3bc-4422-9f40-cbe71ebccfc5?format=jpeg"
                alt=""
              />
              {/* <h2>Note #1</h2>
              <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              saepe deserunt natus rerum. A doloribus at delectus veritatis
              accusantium magni culpa, dolorem quod laudantium, repellendus in ut
              obcaecati minus iure.
              </p> */}
            </div>
            <div className="draggable_item --text">
              <h2>How do you use the internet mindfully?</h2>
              <img
                src="https://cdn.cosmos.so/03c3c2be-9f18-4718-8a01-9c952941298b?format=jpeg"
                alt=""
              />
              {/* <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae
                saepe deserunt natus rerum. A doloribus at delectus veritatis
                accusantium magni culpa, dolorem quod laudantium, repellendus in ut
                obcaecati minus iure.
                </p> */}
            </div>
            <div className="draggable_item --circle">
              <h2 className="absolute mix-blend-difference">Hello</h2>
              <img
                src="https://cdn.cosmos.so/03a93cc6-bfc4-436f-8a3f-fb3439b39142?format=jpeg"
                alt=""
              />
              {/* <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae
                saepe deserunt natus rerum.
              </p> */}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
