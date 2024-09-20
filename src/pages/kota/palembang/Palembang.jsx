import React, { useState, useRef, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import restoran from "./gambar/restoran.png";
import hotel from "./gambar/hotel.png";
import museum from "./gambar/museum.png";
import background from "../../../gambar/backgroundKota.png";
import Modal from "../../Modal";
import bgkarakter from "../../../gambar/bgkarakter.png";
import bgmPalembang from "../../../audio/bsPalembang.mp3";

const Palembang = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { name, character, money, weather, weatherId } = location.state || {};
  const [health, setHealth] = useState(location.state?.health);
  const [makananPalembang1, setMakanan1] = useState(location.state?.makananPalembang1);

  const [makananPalembang2, setMakanan2] = useState(location.state?.makananPalembang2);

  const [makananPalembang3, setMakanan3] = useState(location.state?.makananPalembang3);

  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const displayModal = (message) => {
    setModalMessage(message);
    setShowModal(true);
  };

  const handleResto = () => {
    navigate("/restoranpalembang", {
      state: {
        name: name,
        character: character,
        health: health,
        money: money,
        weather: weather,
        weatherId: weatherId,
        makananPalembang1: makananPalembang1,
        makananPalembang2: makananPalembang2,
        makananPalembang3: makananPalembang3,
      },
    });
  };

  const handleMuseum = () => {
    navigate("/museumpalembang", {
      state: {
        name: name,
        character: character,
        health: health,
        money: money,
        weather: weather,
        weatherId: weatherId,
        makananPalembang1: makananPalembang1,
        makananPalembang2: makananPalembang2,
        makananPalembang3: makananPalembang3,
      },
    });
  };

  const handleHotel = () => {
    setHealth (180);
    displayModal("Anda sudah mengisi tenaga anda, darah anda sudah penuh !!!");
  };

  const [music, setMusic] = useState(true);
  const audioRefPalembang = useRef(null);

  const handleBGM = () => {
    if (music){
      audioRefPalembang.current.play();
    }
  };

  useEffect(() => {
    handleBGM();
  }, []);

  return (
    <div className="overflow-hidden absolute w-full h-screen font-custom">
      <audio ref={audioRefPalembang}
       src={bgmPalembang} 
      />
      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        message={modalMessage}
      />
      <div
        className="absolute min-h-screen w-full bg-cover"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="relative grid place-items-start ms-10 ">
            <img src={bgkarakter}  className="status absolute w-[270px] h-[500px]"/>
            <div className="status text-white grid place-items-center h-[500px] w-[270px] relative">
            <h1 className="mt-4 drop-shadow-[0_0_5px_rgba(0,0,0,1)]">Haloo, {name}</h1>
            <img src={character} alt="Character" className="w-8/12 drop-shadow-[0_0_10px_rgba(255,255,255,1)]" />
            <div className="p-1 mb-4 text-black">
              <h1 className="text-black bg-slate-50">STATUS</h1>
              <h2 className="bg-red-100 w-40 h-8 p-2 text-center">
                HEALTH : {health}/180
              </h2>
              <h2 className="bg-yellow-100 w-40 h-8 p-2 text-center">
                Money : {money}
              </h2>
              <h2 className="bg-green-100 w-40 h-8 p-2 text-center">
                Weather : {weather}
              </h2>
            </div>
          </div>
        </div>
        <div className="flex justify-around p-2 ">
          <div className="restoran ">
            
            <img
              src={restoran}
              alt="Restoran"
              onClick={handleResto}
              className="kota cursor-pointer"
            />
          </div>
          <div className="hotel">
            <img
              src={hotel}
              alt="Hotel"
              onClick={handleHotel}
              className=" kota  cursor-pointer "
            />
          </div>
          <div className="museum">
            <img
              src={museum}
              alt="Museum"
              onClick={handleMuseum}
              className="kota cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Palembang;
