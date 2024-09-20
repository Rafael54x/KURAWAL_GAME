import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import bgmAboutUs from "../audio/bsAboutUs.mp3";
import bg from "../gambar/backgroundAboutUs.jpg";
import bgkita from "../gambar/bgMuka.png";
import emje from "../gambar/emje.png";
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
          <img src={bgkita} alt="background" className="fixed" />
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
                Special Thanks untuk @mjaudreysntss atas kontribusinya dalam
                  membantu proyek ini.
                </p>
                  <img
                    src={emje}
                    alt="background"
                    className="w-8/12 mx-auto"
                  />
                  </div>
                )}
              </div>
            ) : (
              <div>
                <p className="mt-[470px] mx-12 text-md">
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
                <p className="mt-2 mx-12 text-md">
                  Kami meminta maaf yang sebesar-besarnya apabila website kami
                  masih kurang memuaskan, karena kami juga masih dalam tahap
                  belajar saat membuat ini. Tetapi jika kalian merasa puas, kami
                  mengucapkan terima kasih karena seluruh kerja keras kami
                  terbayarkan melalui perasaan senang kalian. Sampai jumpa!
                </p>
                <button
                  onClick={handleBack}
                  className="text-3xl animate-bounce mt-4"
                >
                  ???
                </button>
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
              ???
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutUs;
