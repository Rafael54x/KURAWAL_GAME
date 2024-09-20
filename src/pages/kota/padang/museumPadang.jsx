import React, { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import makanan1 from "./gambar/makananPadang1.png";
import makanan2 from "./gambar/makananPadang2.png";
import makanan3 from "./gambar/makananPadang3.png";
import arenaCloud from "../../../gambar/arena.png";
import arenaRainy from "../../../gambar/rainy.gif";
import arenaThunder from "../../../gambar/thunder.gif";
import arenaSunny from "../../../gambar/sunny.png";
import musuhSunny from "./gambar/musuh1Sunny.png";
import musuhRain from "./gambar/musuh1Rain.png";
import musuhCloud from "./gambar/musuh1Cloud.png";
import charCeweRain from "./gambar/charCeweRain.png";
import charCeweSunny from "./gambar/charCeweSunny.png";
import charCeweCloud from "./gambar/charCeweCloud.png";
import charCowoRain from "./gambar/charCowoRain.png";
import charCowoSunny from "./gambar/charCowoSunny.png";
import charCowoCloud from "./gambar/charCowoCloud.png";
import charCeweRain1 from "./gambar/charCeweRain1.png";
import charCeweSunny1 from "./gambar/charCeweSunny1.png";
import charCeweCloud1 from "./gambar/charCeweCloud1.png";
import charCowoRain1 from "./gambar/charCowoRain1.png";
import charCowoSunny1 from "./gambar/charCowoSunny1.png";
import charCowoCloud1 from "./gambar/charCowoCloud1.png";
import bambu from "./gambar/bambu.png";
import peluru from "./gambar/peluru.png";
import Modal from "../../Modal";
import ModalButton from "../../ModalButton";
import nextt from "../../../gambar/nextt.png";
import backk from "../../../gambar/backk.png";
import museum1 from "../../../gambar/padang1.png";
import museum2 from "../../../gambar/padang2.png";
import museum3 from "../../../gambar/padang3.png";
import tembakmusuh from "../../../audio/hitMusuh.mp3";
import tembakchar from "../../../audio/hitKita.mp3";
import bgmMenang from "../../../audio/bsMenang.mp3";
import bgmKalah from "../../../audio/bsKalah.mp3";
import bgmBattle from "../../../audio/bsBattle.mp3";
import bgmMuseum from "../../../audio/bsMuseum.mp3";
import bgmHeal from "../../../audio/bsHeal.mp3";

const Museum = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { name, character, weather, weatherId } = location.state || {};
  const [money, setMoney] = useState(location.state?.money);
  const [health, setHealth] = useState(location.state?.health);
  const [healthMusuh, setMusuh] = useState(160);
  const [makananPadang1, setMakanan1] = useState(location.state?.makananPadang1);
  const [makananPadang2, setMakanan2] = useState(location.state?.makananPadang2);
  const [makananPadang3, setMakanan3] = useState(location.state?.makananPadang3);
  const [damage, setDamage] = useState(10);
  const [animate, setAnimate] = useState(false);
  const [animate1, setAnimate1] = useState(false);
  const [buff, setBuff] = useState(10);
  const [rainy, setRainy] = useState(false);
  const [sunny, setSunny] = useState(false);
  const [cloud, setCloud] = useState(false);
  const [skill, setSkill] = useState(false);
  const [page, setPage] = useState(false);
  const [arena, setArena] = useState();
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [showModalButton, setShowModalButton] = useState(false);
  const [modalMessageButton, setModalMessageButton] = useState("");
  const [museumMap, setMuseumMap] = useState([museum1, museum2, museum3]);
  const [currentMap, setCurrentMap] = useState(0);
  const [next, setNext] = useState(false);
  const [tengah, setTengah] = useState(false);
  const [musuhBattle, setMusuhBattle] = useState();
  const [charBattle, setCharBattle] = useState();

  const displayModal = (message) => {
    setModalMessage(message);
    setShowModal(true);
  };

  const displayModalButton = (message) => {
    setModalMessageButton(message);
    setShowModalButton(true);
  };

  const handleBuff = () => {
    if (weatherId > 199 && weatherId < 623) {
      setRainy(true);
    } else if (weatherId === 800) {
      setSunny(true);
    } else if (weatherId > 700 && weatherId < 805) {
      if (weatherId < 800) {
        setCloud(true);
      }
      if (weatherId > 800 && weatherId < 805) {
        setCloud(true);
      }
    } else {
      alert("error");
    }
  };

  const handleArena = () => {
    if (weatherId > 199 && weatherId < 233) {
      setArena(arenaThunder);
      setMusuhBattle(musuhRain);
      if (character === "/src/gambar/cewek.png"){
        setCharBattle(charCeweRain);
      } else if (character === "/src/gambar/cewek1.png"){
        setCharBattle(charCeweRain1);
      } else if (character === "/src/gambar/cowok.png"){
        setCharBattle(charCowoRain);
      } else if (character === "/src/gambar/cowok1.png"){
        setCharBattle(charCowoRain1);
      } else alert("error");

    } else if (weatherId > 299 && weatherId < 623) {
      setArena(arenaRainy);
      setMusuhBattle(musuhRain);
      if (character === "/src/gambar/cewek.png"){
        setCharBattle(charCeweRain);
      } else if (character === "/src/gambar/cewek1.png"){
        setCharBattle(charCeweRain1);
      } else if (character === "/src/gambar/cowok.png"){
        setCharBattle(charCowoRain);
      } else if (character === "/src/gambar/cowok1.png"){
        setCharBattle(charCowoRain1);
      } else alert("error");

    } else if (weatherId === 800) {
      setArena(arenaSunny);
      setMusuhBattle(musuhSunny);
      if (character === "/src/gambar/cewek.png"){
        setCharBattle(charCeweSunny);
      } else if (character === "/src/gambar/cewek1.png"){
        setCharBattle(charCeweSunny1);
      } else if (character === "/src/gambar/cowok.png"){
        setCharBattle(charCowoSunny);
      } else if (character === "/src/gambar/cowok1.png"){
        setCharBattle(charCowoSunny1);
      } else alert("error");

    } else if (weatherId > 700 && weatherId < 805) {
      if (weatherId < 800) {
        setArena(arenaCloud);
        setMusuhBattle(musuhCloud);
        if (character === "/src/gambar/cewek.png"){
        setCharBattle(charCeweCloud);
      } else if (character === "/src/gambar/cewek1.png"){
        setCharBattle(charCeweCloud1);
      } else if (character === "/src/gambar/cowok.png"){
        setCharBattle(charCowoCloud);
      } else if (character === "/src/gambar/cowok1.png"){
        setCharBattle(charCowoCloud1);
      } else alert("error");

      
      } else if (weatherId > 800 && weatherId < 805) {
        setArena(arenaCloud);
        setMusuhBattle(musuhCloud);
        if (character === "/src/gambar/cewek.png"){
          setCharBattle(charCeweCloud);
        } else if (character === "/src/gambar/cewek1.png"){
          setCharBattle(charCeweCloud1);
        } else if (character === "/src/gambar/cowok.png"){
          setCharBattle(charCowoCloud);
        } else if (character === "/src/gambar/cowok1.png"){
          setCharBattle(charCowoCloud1);
        } else alert("error");
      }
    } else {
      alert("error");
    }
  };

  const handleTambah1 = () => {
    if (makananPadang1 < 1) {
      displayModal("Anda tidak memiliki makanan");
    } else {
      handleBuff();
      if (sunny === true) {
        setMakanan1(makananPadang1 - 1);
        setDamage(buff + 10);
        if (health > 124 && health < 126){
          setHealth(health + buff + 5);
          handleAnimateDarah15();
        }else if (health > 129 && health < 131) {
          setHealth(health + buff);
          handleAnimateDarahNormal();      
        } else if (health > 134 && health < 136){
          setHealth(health + buff - 5);
          handleAnimateDarahNerf();
        } else if (health > 139) {
          setHealth(health);
          setTimeout(() => {
            charkita.classList.add("animate-pulse");
          }, 1)
          setTimeout(() => {
            charkita.classList.remove("animate-pulse");
          }, 2000);
        } else {
          setHealth(health + buff + 10);
          handleAnimateDarahBuff();
        }
        setSkill(true);
      } else if (cloud === true) {
        setMakanan1(makananPadang1 - 1);
        setDamage(buff - 5);
        if (health > 139) {
          setHealth(health);
          setTimeout(() => {
            charkita.classList.add("animate-pulse");
          }, 1)
          setTimeout(() => {
            charkita.classList.remove("animate-pulse");
          }, 2000);
        } else {
          setHealth(health + buff - 5);
          handleAnimateDarahNerf();
        }
        setSkill(true);
      } else if (rainy === true) {
        setMakanan1(makananPadang1 - 1);
        setDamage(buff);
        if (health > 134 && health < 136) {
          setHealth(health + buff - 5);
          handleAnimateDarahNerf();
        } else if (health > 139) {
          setHealth(health);
          setTimeout(() => {
            charkita.classList.add("animate-pulse");
          }, 1)
          setTimeout(() => {
            charkita.classList.remove("animate-pulse");
          }, 2000);
        }else {
          setHealth(health + buff);
          handleAnimateDarahNormal();
        }
        setSkill(true);
      }
    }
  };

  const handleTambah2 = () => {
    if (makananPadang2 < 1) {
      displayModal("Anda tidak memiliki makanan");
    } else {
      handleBuff();
      if (cloud === true) {
        setMakanan2(makananPadang2 - 1);
        if (health > 124 && health < 126){
          setHealth(health + buff + 5);
          handleAnimateDarah15();
        }else if (health > 129 && health < 131) {
          setHealth(health + buff);
          handleAnimateDarahNormal();      
        } else if (health > 134 && health < 136){
          setHealth(health + buff - 5);
          handleAnimateDarahNerf();
        } else if (health > 139) {
          setHealth(health);
          setTimeout(() => {
            charkita.classList.add("animate-pulse");
          }, 1)
          setTimeout(() => {
            charkita.classList.remove("animate-pulse");
          }, 2000);
        } else {
          setHealth(health + buff + 10);
          handleAnimateDarahBuff();
        }
        setSkill(true);
      } else if (rainy === true) {
        setMakanan2(makananPadang2 - 1);
        if (health > 139) {
          setHealth(health);
          setTimeout(() => {
            charkita.classList.add("animate-pulse");
          }, 1)
          setTimeout(() => {
            charkita.classList.remove("animate-pulse");
          }, 2000);
        } else {
          setHealth(health + buff - 5);
          handleAnimateDarahNerf();
        }
        setSkill(true);
      } else if (sunny === true) {
        setMakanan2(makananPadang2 - 1);
        if (health > 134 && health < 136) {
          setHealth(health + buff - 5);
          handleAnimateDarahNerf();
        } else if (health > 139) {
          setHealth(health);
          setTimeout(() => {
            charkita.classList.add("animate-pulse");
          }, 1)
          setTimeout(() => {
            charkita.classList.remove("animate-pulse");
          }, 2000);
        }else {
          setHealth(health + buff);
          handleAnimateDarahNormal();
        }
        setSkill(true);
      }
    }
  };

  const handleTambah3 = () => {
    if (makananPadang3 < 1) {
      displayModal("Anda tidak memiliki makanan");
    } else {
      handleBuff();
      if (rainy === true) {
        setTimeout(() => {
          charkita.classList.add("animate-pulse");
        }, 1)
        setTimeout(() => {
          charkita.classList.remove("animate-pulse");
        }, 2000);
        setMakanan3(makananPadang3 - 1);
        setDamage(buff + 10);
        setSkill(true);
      } else if (sunny === true) {
        setTimeout(() => {
          charkita.classList.add("animate-pulse");
        }, 1)
        setTimeout(() => {
          charkita.classList.remove("animate-pulse");
        }, 2000);
        setMakanan3(makananPadang3 - 1);
        setDamage(buff - 5);
        setSkill(true);
      } else if (cloud === true) {
        setTimeout(() => {
          charkita.classList.add("animate-pulse");
        }, 1)
        setTimeout(() => {
          charkita.classList.remove("animate-pulse");
        }, 2000);
        setMakanan3(makananPadang3 - 1);
        setDamage(buff);
        setSkill(true);
      }
    }
  };

  const handleKurang = () => {
    handleAnimate();
    if (skill === true) {
      setMusuh(healthMusuh - damage);
      setHealth(health - 10);
      setSkill(false);
    } else if (skill === false) {
      setMusuh(healthMusuh - 10);
      setHealth(health - 10);
      setSkill(false);
    }
    handleAttackMusuh();
    handleMenang();
  };

  const handleKalah = () => {
    navigate("/character", {
      state: {
        name: name,
      },
    });
  };

  const handleMenang = () => {
    if (healthMusuh <= 10) {
      let totalMoney = money;
      let count1 = makananPadang1;
      let count2 = makananPadang2;
      let count3 = makananPadang3;

      if (makananPadang1 > 0) {
        while (count1 > 0) {
          setMakanan1(makananPadang1 - 1);
          count1 -= 1;
          totalMoney += 10;
        }
      }

      if (makananPadang2 > 0) {
        while (count2 > 0) {
          setMakanan2(makananPadang2 - 1);
          count2 -= 1;
          totalMoney += 10;
        }
      }

      if (makananPadang3 > 0) {
        while (count3 > 0) {
          setMakanan3(makananPadang3 - 1);
          count3 -= 1;
          totalMoney += 10;
        }
      }
      setMoney(totalMoney);
      displayModalButton("MENANG BOS");
      let charmusuh = document.getElementById("charmusuh");
        charmusuh.classList.add("animate-[ping_2.5s_ease-in-out_infinite]");
      if (music) {
         audioRefMenang.current.play();
         audioRefBattle.current.pause();
      }
      setTimeout(() => {
        navigate("/mappekanbaru", {
          state: {
            name: name,
            character: character,
            health: health,
            money: totalMoney,
          },
        });
      }, 2000);
    } else if (health <= 10) {
      setTimeout(() => {
        displayModalButton("KALAH BOS");
        if (music) {
          audioRefKalah.current.play();
          audioRefBattle.current.pause();
       }
      }, 500);
      
      setTimeout(() => {
        handleKalah();
      }, 3000);

    }
  };

  const handlePage = () => {
    setPage(true);
    handleBGMBattle();
  };

  const handleNext = () => {
    setCurrentMap(currentMap + 1);
    setTengah(true);
  };

  const handleTengahNext = () => {
    setCurrentMap(currentMap + 1);
    setNext(true);
  }

  const handleTengahBack = () => {
    setCurrentMap(currentMap - 1);
    setTengah(false);
  }

  const handleBack = () => {
    setCurrentMap(currentMap - 1);
    setNext(false);
  };

  const handleAnimateDarahBuff = () => {
    let darah = document.getElementById("darah");
    let healthh = health + 20;
    let charkita = document.getElementById("charkita");
    setTimeout(() => {
      if (music) {
        audioRefHeal.current.play();
      }
      charkita.classList.add("animate-pulse");
      darah.style.width = `${(healthh * 3.60) / 2}px`;
    }, 1)
    setTimeout(() => {
      charkita.classList.remove("animate-pulse");
    }, 2000);
  
  };

  const handleAnimateDarahNormal = () => {
    let darah = document.getElementById("darah");
    let healthh = health + 10;
    let charkita = document.getElementById("charkita");
    setTimeout(() => {
      if (music) {
        audioRefHeal.current.play();
      }
      charkita.classList.add("animate-pulse");
      darah.style.width = `${(healthh * 3.60) / 2}px`;
    }, 1)
    setTimeout(() => {
      charkita.classList.remove("animate-pulse");
    }, 2000);
  };

  const handleAnimateDarahNerf = () => {
    let darah = document.getElementById("darah");
    let healthh = health + 5;
    let charkita = document.getElementById("charkita");
    setTimeout(() => {
      if (music) {
        audioRefHeal.current.play();
      }
      charkita.classList.add("animate-pulse");
      darah.style.width = `${(healthh * 3.60) / 2}px`;
    }, 1)
    setTimeout(() => {
      charkita.classList.remove("animate-pulse");
    }, 2000);
  };

  const handleAnimateDarah15 = () => {
    let darah = document.getElementById("darah");
    let healthh = health + 15;
    let charkita = document.getElementById("charkita");
    setTimeout(() => {
      if (music) {
        audioRefHeal.current.play();
      }
      charkita.classList.add("animate-pulse");
      darah.style.width = `${(healthh * 3.60) / 2}px`;
    }, 1)
    setTimeout(() => {
      charkita.classList.remove("animate-pulse");
    }, 2000);
  };

  const handleAttackMusuh = () => {
    let bambu2 = document.getElementById("bambu2");
    let darah = document.getElementById("darah");
    let darahmusuh = document.getElementById("darahmusuh");
    let charkita = document.getElementById("charkita");
    let charmusuh = document.getElementById("charmusuh");
    
    let healthMusuhh = healthMusuh - 10;
    setTimeout(() => {
      if (music) {
        audioRefMusuh.current.play();
      }
      charmusuh.classList.add("drop-shadow-[0_0_10px_rgba(255,0,0,1)]");
      darahmusuh.style.width = `${(healthMusuhh * 2.0475) / 1.3}px`;
    }, 500)

    setTimeout(() => {
    setAnimate1(true);
    charmusuh.classList.remove("drop-shadow-[0_0_10px_rgba(255,0,0,1)]");
    bambu2.classList.add("-translate-x-full");
    }, 1000)

    let healthh = health - 10;
    setTimeout(() => {
      audioRefChar.current.play();
      charkita.classList.add("drop-shadow-[0_0_10px_rgba(255,0,0,1)]");
    darah.style.width = `${(healthh * 3.60) / 2}px`;
    }, 1500)

    setTimeout(() => {
      setAnimate1(false);
      charkita.classList.remove("drop-shadow-[0_0_10px_rgba(255,0,0,1)]");
    }, 2000)
  };

  const handleAnimate = () => {
    setAnimate(true);
    setTimeout(() => {
      setAnimate(false);
    }, 700);
  };

  useEffect(() => {
    handleArena();
    handleBGMMuseum();
  }, []);

  const handleBGMBattle = () => {
    if (music) {
      audioRefBattle.current.play();
      audioRefMuseum.current.pause();
   }
  };

  const handleBGMMuseum = () => {
    if (music) {
      audioRefMuseum.current.play();
   }
  }


  const [music, setMusic] = useState(true);
  const audioRefChar = useRef(null);
  const audioRefMusuh = useRef(null);
  const audioRefMenang = useRef(null);
  const audioRefKalah = useRef(null);
  const audioRefBattle = useRef(null);
  const audioRefMuseum = useRef(null);
  const audioRefHeal = useRef(null);

  return (
    <div className="font-custom">
      <audio ref={audioRefMusuh}
       src={tembakmusuh} 
      />
      <audio ref={audioRefChar}
      src={tembakchar}
      />
      <audio ref={audioRefKalah}
       src={bgmKalah} 
      />
      <audio ref={audioRefMenang}
      src={bgmMenang}
      />
      <audio ref={audioRefBattle}
       src={bgmBattle}
      />
      <audio ref={audioRefMuseum}
       src={bgmMuseum}
      />
      <audio ref={audioRefHeal}
      src={bgmHeal}
      />
      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        message={modalMessage}
      />
      <ModalButton
        isOpen={showModalButton}
        onClose={() => setShowModalButton(false)}
        message={modalMessageButton}
      />
      {page ? (
        <div className="w-full h-screen overflow-hidden">
          <div
            className="min-h-screen w-full bg-cover"
            style={{ backgroundImage: `url(${arena})` }}
          >
            <div className="relative">
              <div className="flex justify-between mx-16 pt-32">
                <div className="bg-green-100 w-1/4 text-center p-3 text-xl">
                  <h1>{name}</h1>
                  <h2>HEALTH : {health}/140</h2>
                  <div
                  id="darah"
                    className="bg-green-500 h-8 ml-[20px] transition-width duration-700"
                    style={{width: `252px`}}
                  ></div>
                  <button
                    onClick={handleKurang}
                    className="hover:bg-red-300 w-full active:ring active:bg-red-400"
                  >
                    BAMBU SAKTI
                  </button>
                </div>
                <div className="bg-green-100 w-1/4 text-center p-3 text-xl">
                  <h1>Mayor Jenderal Simon Hendrik Spoor</h1>
                  <h2>HEALTH : {healthMusuh}/160</h2>
                  <div
                  id="darahmusuh"
                    className="bg-green-500 h-8 ml-[20px] transition-width duration-700"
                    style={{ width: `252px` }}
                  ></div>
                  <h2>PIW PIW</h2>
                </div>
              </div>

                <div className="flex justify-between relative mx-40 mt-12">
                  <img
                    src={charBattle}
                    id="charkita"
                    alt="Character"
                    className="w-[150px] h-full"
                  />
                  <img 
                  src={musuhBattle} 
                  alt="cat2" 
                  id="charmusuh"
                  className="w-[150px] ml-8 h-full"/>
                  <div className="w-full top-0 absolute flex flex-row ">
                    <img
                      src={bambu}
                      alt="bambu"
                      className={`transition-transform duration-700 ${
                        animate ? "transform translate-x-full w-6/12" : "opacity-0"
                      }`}
                    />
                    <img
                      src={peluru}
                      alt="peluru"
                      id="bambu2"
                      className={`transition-transform duration-700 ${
                        animate1 ? "transform w-6/12" : "opacity-0"
                      }`}
                    />
                  </div>
              </div>

              <div className="absolute grid grid-cols-3 text-center mx-96 place-items-center">
                <div className="w-5/12">
                  <h3>{makananPadang1}/10</h3>
                  <img src={makanan1} alt="Makanan1" 
                  onClick={handleTambah1}
                  className="w-12/12 mx-auto cursor-pointer hover:drop-shadow-[0_15px_15px_rgba(0,0,0,0.8)]"/>
                </div>
                <div className="w-5/12">
                  <h3>{makananPadang2}/10</h3>
                  <img src={makanan2} alt="Makanan2" 
                  onClick={handleTambah2}
                  className="w-12/12 mx-auto cursor-pointer hover:drop-shadow-[0_15px_15px_rgba(0,0,0,0.8)]"/>
                </div>
                <div className="w-5/12">
                  <h3>{makananPadang3}/10</h3>
                  <img src={makanan3} alt="Makanan3"
                  onClick={handleTambah3} 
                  className="w-12/12 mx-auto cursor-pointer hover:drop-shadow-[0_15px_15px_rgba(0,0,0,0.8)]"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="absolute w-full h-screen overflow-hidden">
          <div
            className="absolute h-screen w-full bg-cover"
            style={{ backgroundImage: `url(${museumMap[currentMap]})` }}
          >
            <div className="relative">
              { next ? (
                <div className="place-items-center grid grid-cols-6 mt-[540px] mr-[28px]">
                <img src={backk} alt="back" onClick={handleBack} className="col-start-3 cursor-pointer w-20"/>
                <div className="grid place-items-center"> 
                <button onClick={handlePage} className="tanya text-4xl animate-bounce ">???</button>
                </div>
                </div>
              ) : (
                <div>
                { tengah ? (
                  <div className="place-items-center grid grid-cols-6 mt-[540px] mr-[28px]">
                  <img src={backk} alt="back" onClick={handleTengahBack} className="cursor-pointer w-20 col-start-3"/>
                  <img src={nextt} alt="next" onClick={handleTengahNext} className="cursor-pointer w-20" />
                  </div>
                ) : (
                  <div className="place-items-center grid grid-cols-6 mt-[540px] mr-[28px]">
                  <img src={nextt} alt="next" onClick={handleNext} className="col-start-4 cursor-pointer w-20" />
                  </div>
                )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Museum;
