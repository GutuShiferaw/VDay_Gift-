import React, { useState } from "react";
import Envelope from "../assets/images/Envelope_closed.jpg";
import Wax from "../assets/images/wax-seal.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faGrinHearts } from "@fortawesome/free-solid-svg-icons";
import Trivia from "./Trivia";
export default function Home() {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [trialCount, setTrialCount] = useState(0);
  const [isPasscode, setIsPasscode] = useState("");
  const [isPassBoxVisible, setIsPassBoxVisible] = useState(false);
  const [isFailBoxVisible, setIsFailBoxVisible] = useState(false);
  const [isTriviaVisible, setIsTriviaVisible] = useState(false);
  const possiblePasswords = ["Mamaye", "Mammaye"];
  const handlesealclick = () => {
    setPopupVisible(!isPopupVisible);
  };
  const trialHandler = (e) => {
    e.preventDefault();
    if (possiblePasswords.includes(isPasscode)) {
      setIsPassBoxVisible(!isPassBoxVisible);
    } else {
      setTrialCount(trialCount + 1);
      if (trialCount < 2) {
        setIsPasscode("");
      } else {
        setIsFailBoxVisible(!isFailBoxVisible);
        setTrialCount(0);
      }
    }
  };
  const handleInputChange = (e) => {
    setIsPasscode(e.target.value);
  };
  const handletriviadisplay = (e) => {
    e.preventDefault();
    setIsFailBoxVisible(!isFailBoxVisible);
    setPopupVisible(!isPopupVisible);
    setIsTriviaVisible(!isTriviaVisible);
  };
  return (
    <div className="flex home-cont w-screen h-screen font-sans">
      <div className="w-11/12 sm:w-2/5 h-1/2 mx-auto mt-20 relative">
        <div className=" mb-12  bg-slate-300 bg-opacity-60 rounded-lg">
          <h1 className="typing-text  text-4xl text-center font-extrabold text-red-500 ">
            HAPPY VALENTINES DAY BABY{" "}
          </h1>
          <h2 className=" typing-text2 text-4xl text-red-600 ml-2 text-center">
            THIS IS A CUTE LIL GIFT
          </h2>{" "}
          <h3 className=" typing-text3 text-4xl text-red-700 text-center">
            FOR YOU
            <span>
              <FontAwesomeIcon icon={faHeart} />
            </span>{" "}
          </h3>
        </div>

        <div className="popup relative w-full h-full z-0">
          <div className="absolute h-full w-full">
            <img
              src={Envelope}
              alt=" Envelope-Closed"
              className="w-full h-full rounded-lg"
            />
          </div>
          <Link onClick={handlesealclick}>
            <div className=" wax-seal-cont absolute w-28 z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer">
              <img src={Wax} alt="Wax-seal" className="w-full h-full" />
            </div>
          </Link>
          {isPopupVisible && (
            <div className="popup absolute w-3/4 h-1/2 z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  bg-white border-2 border-black ">
              <div className=" px-3">
                <h1 className=" text-center mt-2 text-red-500 font-bold">
                  Not So Fast Princess <span className=" text-red-500">😍</span>{" "}
                </h1>
                <p className=" text-xs text-center">
                  {" "}
                  Before you can unwrap your beautiful gift, you have three
                  attempts to enter the passcode , P.S the passcode is a sinlge
                  word!{" "}
                </p>
              </div>
              <div className="w-1/2 mx-auto mt-2 ">
                <form onSubmit={trialHandler} className=" text-center">
                  <input
                    type="text"
                    placeholder=" Enter Passcode..."
                    required={true}
                    value={isPasscode}
                    onChange={handleInputChange}
                    className="border-red border-2 w-full text-center text-sm rounded-lg"
                  />
                  <br />
                  <button
                    type="submit"
                    className=" p-1 w-16 bg-red-400 mt-2 rounded-lg text-xs cursor-pointer hover:bg-red-500"
                  >
                    Enter
                  </button>
                </form>
              </div>
              <div className=" w-11/12 text-end ">
                <p>
                  {trialCount}
                  <span>/3</span>
                </p>
              </div>
            </div>
          )}
          {isPassBoxVisible && (
            <div
              id="passbox"
              className="popup absolute w-3/4 h-1/2                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  bg-white border-2 border-black "
            >
              <diV className=" p-3 text-center">
                <h1 className=" text-red-500  mb-2 text-lg">
                  Congrats Baby You Have Passed 😊
                </h1>
                <p className="  text-sm">
                  Click the button to Access Your Gift
                </p>
                <div className=" mt-7 text-sm w-24 rounded-full mx-auto  p-2 bg-red-400 hover:bg-red-500 ">
                  <a href="#" className="heart-button   ">
                    {" "}
                    Your Gift
                  </a>
                </div>
              </diV>
            </div>
          )}
          {isFailBoxVisible && (
            <div
              id="failbox"
              className="popup absolute w-3/4 h-1/2 z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  bg-white border-2 border-black "
            >
              {" "}
              <diV className=" p-3 text-center">
                <h1 className=" text-red-500 text-center mb-2 text-sm sm:text-base">
                  Oh No! You have Failed 😞
                </h1>
                <p className=" text-center text-xs sm:text-sm">
                  Dont Worry Babes You can Still get your Gift LOL. You Just
                  need to Pass this Trivia Questions ! Its 6 Questions. Ps.{" "}
                  <span className=" font-bold">
                    The first letter of each answer is a letter from the
                    passcode so remember it.
                  </span>
                </p>
                <div className=" mt-5 text-sm w-24 rounded-full mx-auto  p-1 sm:p-2 bg-red-400 hover:bg-red-500 cursor-pointer ">
                  <a
                    onClick={handletriviadisplay}
                    className="heart-button  text-xs sm:text-sm  "
                  >
                    {" "}
                    Start Trivia
                  </a>
                </div>
              </diV>
            </div>
          )}
          {isTriviaVisible && (
            <div className="popup absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  ">
              <Trivia />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
