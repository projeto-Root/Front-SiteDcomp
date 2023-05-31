import React, { useEffect } from "react";
import "./Forum.css";
import { AiTwotoneHome, AiFillFire, AiOutlineFieldTime } from "react-icons/ai";
import { MdNotifications, MdAccessTimeFilled } from "react-icons/md";
import { useState } from "react";
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  AccordionIcon,
} from "@chakra-ui/react";

const Forum = () => {
  const options = ["Últimas Discussões", "Fixadas", "Mais Curtidas"];
  const [widthScreen, setWidthScreen] = useState(window.innerWidth);

  return (
    <div>
      <div className="forumcontainer">
        <div className="navforum">
          <button>
            {" "}
            <AiTwotoneHome />{" "}
          </button>
          <button>
            {" "}
            <MdNotifications />{" "}
          </button>
          <button>
            {" "}
            <AiFillFire />{" "}
          </button>
          <button>
            {" "}
            <MdAccessTimeFilled />{" "}
          </button>
        </div>

        <div className="secondcontainerforum">
          <div className="postsforum">
            <h2>teste</h2>
            <input type="" />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione
              accusantium, neque vitae commodi omnis ut impedit eius eos, quam
            </p>
            <h2>teste</h2>
            <input type="" />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione
              accusantium, neque vitae commodi omnis ut impedit eius eos, quam
            </p>
            <h2>teste</h2>
            <input type="" />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione
              accusantium, neque vitae commodi omnis ut impedit eius eos, quam
            </p>
            <h2>teste</h2>
            <input type="" />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione
              accusantium, neque vitae commodi omnis ut impedit eius eos, quam
            </p>
            <h2>teste</h2>
            <input type="" />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione
              accusantium, neque vitae commodi omnis ut impedit eius eos, quam
            </p>
            <h2>teste</h2>
            <input type="" />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione
              accusantium, neque vitae commodi omnis ut impedit eius eos, quam
            </p>
            <h2>teste</h2>
            <input type="" />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione
              accusantium, neque vitae commodi omnis ut impedit eius eos, quam
            </p>
          </div>
          <div className="dropdownforum">
            <Accordion defaultIndex={[0]} allowMultiple>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      Filtro
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <ul
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "1rem",
                    }}
                  >
                    {options.map((x) => (
                      <li key={x}>
                        <AccordionButton onClick={() => console.log("teste")}>
                          <h3> {x} </h3>
                        </AccordionButton>
                      </li>
                    ))}
                  </ul>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </div>
          {widthScreen < 850 && (
            <div className="navforummobile">
              <button>
                {" "}
                <AiTwotoneHome />{" "}
              </button>
              <button>
                {" "}
                <MdNotifications />{" "}
              </button>
              <button>
                {" "}
                <AiFillFire />{" "}
              </button>
              <button>
                {" "}
                <MdAccessTimeFilled />{" "}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Forum;
