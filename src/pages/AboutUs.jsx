import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import bgmAboutUs from "../audio/bsAboutUs.mp3";
import bg from "../gambar/backgroundAboutUs.jpg";
import bgAboutUs from "../gambar/backgroundAboutUs.jpg";
import maskotImage from "../gambar/maskott.png";

const AboutUs = () => {
  const [music, setMusic] = useState(true);
  const audioRefAboutUs = useRef(null);
  const [page, setPage] = useState(false);
  const [back, setBack] = useState(false);
  const [login, setLogin] = useState(false);
  const navigate = useNavigate();

  const handlePage = () => {
    setPage(true);
  };

  const handleBack = () => {
    setBack(true);
    setTimeout(() => {
    setLogin(true);
    }, 5000);
  };

  const handleBGM = () => {
    if (music) {
      audioRefAboutUs.current.play();
    }
  };

  const handleLogin = () => {
    navigate('/');
  };

  useEffect(() => {
    handleBGM();
  }, []);

  return (
    <div>
      <audio ref={audioRefAboutUs} src={bgmAboutUs} />
      {page ? (
        <div className="fixed w-full h-screen font-custom">
          <img src={bgAboutUs} alt="background" className="fixed" />
          <div className="relative grid text-center text-white">
            {back ? (
              <div className="grid relative place-items-center">
                {login ? (
                  <div>
                    <img
                      src={maskotImage}
                      alt="Maskot "
                      onClick={handleLogin}
                      className="m-auto mt-64 w-6/12 motion-safe:animate-[bounce_2s_ease-in-out_infinite] max-sm:mt-16 max-sm:w-3/12 cursor-pointer"
                    />
                  </div>
                ) : (
                    <div className="fixed place-items-center text-center">
                        <p className="mt-[1000px] text-4xl mx-32 bg-slate-800">
                </p>
                  </div>
                )}
              </div>
            ) : (
              <div>
                <p className="mt-[50px] mx-12 text-5xl">
                  THANKS TO : KURAWAL 6.0
                </p>
                <p className="mt-[40px] mx-12 text-xl">
                  “Kita mau bikin apa yaa?”. Kata-kata ini menjadi awal mula
                  bagaimana kami bisa membuat website dengan tema "Nusantara"
                  dalam bentuk game pixel. Mengapa game pixel? Karena kami suka
                  game pixel. Kami jarang sekali melihat game pixel yang
                  memiliki unsur "Indonesia" didalamnya, sehingga hal ini
                  menjadi dorongan semangat bagi kami dalam pembuatan website
                  ini. Pulau Sumatera yang sudah berhasil kalian jelajahi
                  dipilih bukan karena sembarang alasan. Mayoritas dari kelompok
                  ini adalah anak rantau yang berasal dari pulau Sumatera,
                  sebagai anak rantau tentunya kami sangat rindu dengan daerah
                  asal kami tinggal. Kami rindu dengan makanannya, bahasanya,
                  masyarakatnya dan banyak hal lagi yang kami rindukan. Makanan
                  dan minuman yang kalian gunakan untuk membantu melawan para
                  penjahat itu, semuanya merupakan khas Sumatera. Orang-orang
                  yang sudah berhasil kalian taklukkan, dahulunya merupakan para
                  penjajah yang terlibat dalam perang-perang Indonesia saat
                  menuju kemerdekaan. Kami mengangkat berbagai perang penting
                  yang terjadi di pulau Sumatera pada masa penjajahan kala itu
                  sebagai bentuk penghargaan kepada para pahlawan yang telah
                  berjuang dan berhasil membawa Indonesia pada kemerdekaan.
                </p>
                <p
                  className="text-md mt-10"
                >
                  BG SOUND SOURCE: <br></br>
                  bsAceh : https://youtu.be/ZbtQZ34NDTk?si=_6LFLrK1FWB7xFar <br></br>

                  bsPadang : https://youtu.be/FTAtMZ7j8ZI?si=wRVFe_PCgj4C7jPl <br></br>

                  bsPalembang : https://youtu.be/EPS5xSqOVHI?si=T7wTgY_ZlFou7BWQ <br></br>

                  bsPekanbaru : https://youtu.be/wjy5W6pJ_JI?si=YrwulCsJmQt_DnVX<br></br>

                  bsAboutUs : https://youtu.be/0BIaDVnYp2A?si=mspYl9dCYhToxcG4<br></br>

                  bsWin : https://youtu.be/teUWsONJkk8?si=NHZKV5yTsaqFS7Zi <br></br>

                  bsKalah : https://www.youtube.com/watch?v=bceGNIg-rqI <br></br>

                  bsBattle : https://youtu.be/4JgMoZEGfJ8?si=5rjLO7jaAPR6PuWW <br></br>

                  bsMuseum : https://youtu.be/8TKy9bzrk24?si=MMgV9GiMwJUf9Z5Z <br></br>

                  bsRestoran : https://youtu.be/3V5Mf6tJcKM?si=AGBl6HSSteWKVzfD
                </p>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="fixed w-full h-screen font-custom">
          <img src={bg} alt="background" className="fixed w-full h-screen" />
          <div className="grid place-items-center relative text-white">
            <h1 className="text-6xl mt-52">CONGRATULATIONS</h1>
            <h1 className="text-3xl mt-4">Selamat Anda Sudah Menyelesaikan</h1>
            <h1 className="text-4xl mt-4">"Jelajahi Soematra"</h1>
            <button
              onClick={handlePage}
              className="text-8xl animate-bounce mt-32"
            >
              CREDIT
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutUs;
