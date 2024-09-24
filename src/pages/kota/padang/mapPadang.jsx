import React, {useState, useEffect} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import map from '../../../gambar/map.png';
import pointer from '../../../gambar/pointer.png';
import kunci from '../../../gambar/kunci.png';
import './Padang.css';
import ModalButtonn from "../../ModalButton";
import Modal from "../../Modal";
import axios from 'axios';

const MapPadang = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const urlWeather = "https://api.openweathermap.org/data/2.5/weather?lat=-0.9247587&lon=100.3632561&appid=ee3caa27713aaf95d3227ca5d5119cf4";
  const [weather, setWeather] = useState([]);
  const [weatherId, setWeatherId] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [modalButton, setModalButton] = useState("");

  const displayModal = (message) => {
    setModalMessage(message);
    setShowModal(true);
  };

  const displayModalButton = (message) => {
    setModalButton(message);
    setShowButton(true);
  };

  const handleWeather = () => {
    return axios.get(urlWeather).then((res) => {
      setWeather(res.data.weather[0].main);
      setWeatherId(res.data.weather[0].id);
    });
  };
  
  useEffect(() => {
    handleWeather();
  }, []);

  const { name, character } = location.state || {};
  const [makananPadang1, setMakanan1] = useState(0);
  const [makananPadang2, setMakanan2] = useState(0);
  const [makananPadang3, setMakanan3] = useState(0);
  const [money, setMoney] = useState(location.state?.money);
  const [health, setHealth] = useState(location.state?.health);

  const handleBuka = () => {
    displayModal("Map ini sudah selesai dijelajahi.");
  };

  const handleKunci = () => {
    displayModal("Kota ini masih terkunci!");
  };

  const handlePadang = () => {
    let totalMoney = money;
    totalMoney+=50;
    setMoney(totalMoney);
    setHealth(140);
      displayModalButton("Anda mendapatkan uang tambahan sejumlah 50!");
    setTimeout(() => {
      displayModalButton("Darah anda bertambah menjadi 140!");
    }, 1000);
    setTimeout(() => {
      displayModalButton("Perjalanan ke Padang Dimulai!!!");
    }, 2000);
    setTimeout(() => {
      navigate("/padang", { state: { name: name, character: character, health: health, money: totalMoney, weather: weather, weatherId: weatherId, makananPadang1: makananPadang1, makananPadang2:makananPadang2, makananPadang3:makananPadang3} });
    }, 4000);
    
  };

  return (
    <div className='font-custom'>
      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        message={modalMessage}
      />
      <ModalButtonn
        isOpen={showButton}
        onClose={() => setShowButton(false)}
        message={modalButton}
      />
      <div className='container-map '>
        <img src={map} alt="map" className='map ' />
        <div className='relative'>
        <img src={pointer} alt="pointer1" className='hover:animate-bounce' id='pointer1' onClick={handleBuka} />
        <img src={pointer} alt="pointer2" className='hover:animate-bounce' id='pointer2' onClick={handleBuka} />
        <img src={kunci} alt="pointer3" className='animate-bounce w-12' id='pointer3' onClick={handleKunci} />
        <img src={pointer} alt="kunci3" className='hover:animate-bounce' id='kunci3' onClick={handlePadang} />
        <img src={kunci} alt="kunci4" className='animate-bounce w-12' id='kunci4' onClick={handleKunci} />
        <img src={kunci} alt="kunci5" className='animate-bounce w-12' id='kunci5' onClick={handleKunci} />
      </div>
      </div>
    </div>
  );
};

export default MapPadang;
