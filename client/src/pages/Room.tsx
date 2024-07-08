import React, { useEffect, useState } from "react";
import { themes } from "../themes/themes";
import { useParams } from "react-router-dom";
import { Theme } from "../types/create-room-types";
import { CiSettings } from "react-icons/ci";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { FaRegStopCircle } from "react-icons/fa";
import { FaPlayCircle } from "react-icons/fa";
import { SlOptions } from "react-icons/sl";
import { Task } from "../types/room-types";

function Room() {
  const { themeID } = useParams();
  const [theme, setTheme] = useState<Theme | null>(null);
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, text: "Read chapter 1", completed: false },
    { id: 2, text: "Prepare for Midterm", completed: false },
    { id: 3, text: "Write essay outline", completed: false },
  ]);

  useEffect(() => {
    const setRoomTheme = () => {
      const themeIdNumber = Number(themeID);
      const selectedTheme = themes.find((theme) => theme.id === themeIdNumber);
      if (selectedTheme) {
        setTheme(selectedTheme);
      } else {
        console.error(`Theme with ID ${themeID} not found.`);
      }
    };
    setRoomTheme();
  }, [themeID]);

  if (!theme) {
    return <div>Loading...</div>;
  } else {
    console.log(theme);
  }

  return (
    <div className="flex items-start" style={{ color: theme.colors.texts }}>
      <video
        src={theme.bg_video}
        autoPlay
        loop
        muted
        poster={theme.thumbnail}
        className="object-cover fixed h-screen w-screen"
      ></video>
      <div className="flex items-start justify-between py-4 px-4 h-screen w-screen z-0">
        {/* all users */}
        <div
          className="flex flex-col items-center justify-center py-4 px-4 h-full w-1/12 rounded-xl backdrop-blur-3xl"
          style={{ backgroundColor: theme.colors.sidebar_bg, opacity: 0.95 }}
        >
          <div>users here</div>
          <button>add friends</button>
        </div>

        <div className="flex flex-grow items-center justify-center h-full">
          mid section
        </div>

        <div
          className="flex flex-col items-start gap-4 justify-between h-full min-w-60 rounded-xl py-4 px-4 backdrop-blur-3xl"
          style={{ backgroundColor: theme.colors.sidebar_bg, opacity: 0.95 }}
        >
          {/* timer div */}
          <div
            className="flex flex-col  w-full rounded-xl"
            style={{ backgroundColor: theme.colors.section_bg }}
          >
            <div
              className="flex justify-between items-center py-2 px-2 text-md rounded-t-xl"
              style={{ backgroundColor: theme.colors.headers_bg }}
            >
              <h3 className="flex items-center">
                Timer
                <span>
                  <MdOutlineArrowDropDown />
                </span>
              </h3>
              <button className="text-2xl">
                <CiSettings />
              </button>
            </div>
            <div className="flex items-center justify-between px-2 gap-6 py-3">
              <h1 className="text-6xl  font-play">49:53</h1>
              <div className="flex gap-2 text-3xl items-baseline">
                <button>
                  <FaRegStopCircle />
                </button>
                <button
                  className="rounded-full"
                  style={{ backgroundColor: theme.colors.headers_bg }}
                >
                  <FaPlayCircle />
                </button>
              </div>
            </div>
          </div>

          {/* tasks div */}
          <div
            className="flex flex-col  w-full rounded-xl"
            style={{ backgroundColor: theme.colors.section_bg }}
          >
            <div
              className="flex justify-between items-center py-2 px-2 text-md rounded-t-xl"
              style={{ backgroundColor: theme.colors.headers_bg }}
            >
              <h3 className="flex items-center">
                Tasks
                <span>
                  <MdOutlineArrowDropDown />
                </span>
              </h3>
              <button className="text-LG">
                <SlOptions />
              </button>
            </div>
            <div className="flex items-center justify-between px-2 gap-6 py-3">
              <ul className=" bg-transparent">
                {tasks.map((task) => (
                  <li key={task.id}>
                    <form>
                      <input
                        className=" bg-transparent"
                        type="checkbox"
                        checked={task.completed}
                        // onChange={() => handleCheckboxChange(task.id)}
                      />
                      <input
                        type="text"
                        className=" bg-transparent"
                        value={task.text}
                        // onChange={(e) =>
                        //   handleInputChange(task.id, e.target.value)
                        // }
                      />
                    </form>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* chat div */}
          <div className="flex-grow"></div>
        </div>
      </div>
    </div>
  );
}
export default Room;
