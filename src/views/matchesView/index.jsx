import CircleTitle from "../../components/circleTitle";
import { themeColors } from "../../theme/theme";
import { Box } from "@mui/material";
import Image from "../../assets/images/Rectangle.png";
import { TypeAnimation } from "react-type-animation";
import { useWindowSize } from 'react-use';
import Confetti from 'react-confetti'

import { useState, useEffect } from "react";

import logo from "../../assets/logoCir.png";

import female1 from "../../assets/avatar_assets/female/1.png";
import female2 from "../../assets/avatar_assets/female/2.png";
import female3 from "../../assets/avatar_assets/female/3.png";
import female4 from "../../assets/avatar_assets/female/4.png";
import female5 from "../../assets/avatar_assets/female/5.png";
import female6 from "../../assets/avatar_assets/female/6.png";
import female7 from "../../assets/avatar_assets/female/7.png";
import female8 from "../../assets/avatar_assets/female/8.png";
import female9 from "../../assets/avatar_assets/female/9.png";
import female10 from "../../assets/avatar_assets/female/10.png";
import female11 from "../../assets/avatar_assets/female/11.png";
import female12 from "../../assets/avatar_assets/female/12.png";

import male1 from "../../assets/avatar_assets/male/1.png";
import male2 from "../../assets/avatar_assets/male/2.png";
import male3 from "../../assets/avatar_assets/male/3.png";
import male4 from "../../assets/avatar_assets/male/4.png";
import male5 from "../../assets/avatar_assets/male/5.png";
import male6 from "../../assets/avatar_assets/male/6.png";
import male7 from "../../assets/avatar_assets/male/7.png";



import ReactCardFlip from "react-card-flip";


const MatchCard = ({ match, femaleImg, index }) => {

  const getRandomColor = () => {
    const getRandomValue = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

    const hue = getRandomValue(0, 360);
    const saturation = getRandomValue(40, 80);
    const lightness = getRandomValue(50, 70);
  
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  };




  const [isFlipped, setFlipped] = useState(false);

  const handleCardClick = () => {
    setFlipped(!isFlipped);
  };

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal"
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "10px",
        boxSizing: "border-box",
      }}

    >

      <div onClick={handleCardClick}

        style={{
          position: "relative",
          width: "98%",
        
          height: "480px",
          backgroundColor: "#1F232F",
          marginBottom: "20px",
          borderRadius: "20px",
          padding: "0",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage: `linear-gradient(to bottom right, ${getRandomColor()}, ${getRandomColor()})`,
        }}

      >

        <img src={femaleImg} style={{ width: "120%" }} />

        <p
          style={{
            position: "absolute",
            bottom: "10px",
            left: "30px",
            color: "white",
            fontWeight: "bold",
            fontSize: "25px",

          }}
        >
          {match["Indica tu nombre completo"]}

          <br />

          ({match["Nombre de la empresa o negocio"]})

        </p>
      </div>


      <div
        onClick={handleCardClick}

        style={{
          maxWidth: "calc(100% - 50px)",
          minHeight: "480px",
          maxHeight: "480px",
          backgroundColor: "#1F232F",
          marginBottom: "20px",
          borderRadius: "20px",
          padding: "0",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "start",
          padding: "25px",
          overflowY: "scroll",
        }}
      >


        <p className="title"> {match['Indica tu nombre completo']} </p>
        <p className="subtitle"> {match['Nombre de la empresa o negocio']} </p>


        <div style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          justifyContent: "start",
          zIndex: "99999",
          gap: "10px",
        }

        }>

          <p className="title"> Dimensiones de compatibilidad colaborativa </p>
          <div style={{ width: "100%", height: "1px", backgroundColor: "white", marginBottom: "10px" }}></div>

          <div style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "start",
            zIndex: "99999",
            gap: "10px",
          }

          }>
            <p className="label" style={{
              marginRight: "10px",

            }}> Empesarial : </p>
            <p className="subtitle"> {match['enterprise']} </p>

          </div>


          <div style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "start",
            zIndex: "99999",
            gap: "10px",
          }

          }>
            <p className="label" style={{


            }}> Geografica : </p>
            <p className="subtitle"> {match['geography']} </p>

          </div>
          <div style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "start",
            zIndex: "99999",
            gap: "10px",
          }

          }>
            <p className="label" style={{


            }}> Hobby : </p>
            <p className="subtitle"> {match['hobby']} </p>

          </div>

          <div style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "start",
            zIndex: "99999",
            gap: "10px",
          }

          }>
            <p className="label" style={{


            }}> Mercado : </p>
            <p className="subtitle"> {match['market']} </p>

          </div>


          <div style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "start",
            zIndex: "99999",
            gap: "10px",
          }

          }>
            <p className="label" style={{


            }}> Persona : </p>
            <p className="subtitle"> {match['person']} </p>

          </div>

          <div style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "start",
            zIndex: "99999",
            gap: "10px",
          }

          }>
            <p className="label" style={{


            }}> Producto: </p>
            <p className="subtitle"> {match['product']} </p>

          </div>

          <div style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "start",
            zIndex: "99999",
            gap: "10px",
          }

          }>
            <p className="label"> Thinking:</p>
            <p className="subtitle"> {match['product']} </p>

          </div>
          <div style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "start",
            zIndex: "99999",
            gap: "10px",
          }

          }>
            <p className="label"> Total Score:</p>
            <p className="subtitle"> {match['total_score']} </p>

          </div>


          <div style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}>

            <p className="title"> Perfilamiento  Empresa </p>
            <div style={{ width: "100%", height: "1px", backgroundColor: "white", marginBottom: "10px" }}></div>

          </div>

          <div style={{ width: "100%", display: "flex", flexDirection: "row", alignItems: "start", justifyContent: "start", zIndex: "99999", gap: "10px", }}>
            <p className="label"> Mercado bjetivo:</p>

          </div>

          <p className="subtitle"> {match['Descripción del mercado objetivo']} </p>
          <div style={{ width: "100%", display: "flex", flexDirection: "row", alignItems: "start", justifyContent: "start", zIndex: "99999", gap: "10px", }}>
            <p className="label"> Descripción del producto o servicio:</p>

          </div>
          <p className="subtitle"> {match['Descripción del producto o servicio']} </p>

          <div style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}>


            <p className="title"> 3 libros que recomendaría </p>
            <div style={{ width: "100%", height: "1px", backgroundColor: "white", marginBottom: "10px" }}></div>
          </div>



          <p
            style={{ zIndex: "99999", }}


            className="subtitle"> {match['Cuales son los 3 libros que recomendarías a alguien leer ']} </p>





          <div style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}>


            <p className="title"> Contacto </p>
            <div style={{ width: "100%", height: "1px", backgroundColor: "white", marginBottom: "10px" }}></div>

          </div>

          <p className="label" style={{
            marginRight: "10px",
          }}> Email:</p>
          <a
            style={{ zIndex: "99999", }}
            href={`mailto:${match['Correo electrónico ']}`}
            className="subtitle"> {match['Correo electrónico ']} </a>
          <p className="label" style={{
            marginRight: "10px",

          }}> LinkedIn :</p>

          <p
            style={{ zIndex: "99999", }}


            className="subtitle"> {match['Cual es tu LinkedIn']} </p>



          <div
            style={{
              width: "100%",
              height: "100px",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#1F232F",
              padding: "10px",
              position: "relative",
              marginTop: "20px",
              marginBottom: "40px",

            }}>

            <div

              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                width: "20%",
                position: "absolute",
                left: "-15px",
                top: "20px",
              }}
            >
              <img src={logo} style={{ height: "30px", borderRadius: "11px", marginRight: "10px" }} />
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "start",
                width: "80%",
                position: "absolute",
                top: "25px",
                left: "40px",
              }}>

              <p className="subtitle" style={{ fontSize: "15px", color: "white", textAlign: "justify" }}>
                {match['why_they_should_meet']}
              </p>


            </div>


          </div>





        </div>





      </div>




    </ReactCardFlip>
  );
};



function MatchesView({ data, setData }) {

  const [confetti_visible, setConfettiVisible] = useState(true);

  const [flips, setFlips] = useState(matches.map(() => false));

  const Hombres = ['Luis Armando Valtierra Gonzalez Madrid', 'Hector Manuel Aceves Ortega', 'Marcos Reyes Vargas', 'Miguel Armando Ramírez Morales', 'Jorge Buitron Arriola', 'Benjamin Bernardo Cervantes Vega', 'JUAN CARLOS FEREGRINO QUEZADA', 'CUAUHTEMOC TORRES CRUZ', 'Anibal Bustillo Leal', 'Ricardo Navarro', 'Ronal Arnaldo Delgado Diaz', 'Guillermo Medina', 'Roberto Gruest', 'Miguel Angel Sanabria Plascencia', 'Christopher Klasu Jareño Henríquez', 'Eric Servín de la Mora Salceda', 'GERARDO LÓPEZ DÍAZ', 'Roberto Rangel']
  const Mujeres = ['Mirna Ariadna Muñoz Mata', 'Julieta Domínguez Soberanes', 'Berta Alicia Valdez Aldrete', 'Salma Leticia Jalife Villalón', 'MAGDA PAOLA VIDAL GÓMEZ', 'Arturo Ramos Hernández', 'Gustavo Garcia Gonzalez', 'Marcelo Hinojosa', 'Me a Antonieta Zuloaga']


  const femaleImg = [female1, female2, female3, female4, female5, female6, female7, female8, female9, female10, female11, female12]

  const maleImg = [male1, male2, male3, male4, male5, male6, male7]



  const getRandomColor = () => {
    const getRandomValue = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

    // Define ranges for more friendly colors excluding green
    let hue;
    do {
      hue = getRandomValue(0, 360);
    } while ((hue >= 60 && hue <= 80) || (hue >= 90 && hue <= 150)); // Excluding green hues

    const saturation = getRandomValue(40, 80);
    const lightness = getRandomValue(50, 70);

    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  
  };

  const handleCardClick = (index) => {
    const newFlips = [...flips];
    newFlips[index] = !newFlips[index];
    setFlips(newFlips);
  };


  const getImg = (data) => {

    let random_index_max_len_femaleImg = Math.floor(Math.random() * femaleImg.length);
    let random_index_max_len_maleImg = Math.floor(Math.random() * maleImg.length);

    console.log(data['Indica tu nombre completo'])
    if (Hombres.includes(data['Indica tu nombre completo'])) {
      return maleImg[random_index_max_len_maleImg]
    }
    else {
      return femaleImg[random_index_max_len_femaleImg]
    }
  }


  if (data.length == 0) {
    return (

      <>

        
      <div
        style={{
          width: "100%",
          height: "100px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#1F232F",
          padding: "10px",
          position: "relative",
          marginTop: "20px",
          marginBottom: "20px",

        }}>

        <div

          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            width: "20%",
            position: "absolute",
            left: "20px",
            top: "20px",
          }}
        >
          <img src={logo} style={{ height: "30px", borderRadius: "11px", marginRight: "10px" }} />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "start",
            width: "70%",
            position: "absolute",
            left: "90px",
            top: "25px",
          }}>


          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              'Hola soy Cirlce ! no pude encontrar resulatados para ese email :(',
              1000, // wait 1s before replacing "Mice" with "Hamsters"


            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: '1em', display: 'inline-block', color: "white", }}
            repeat={Infinity}
          />
        </div>


      </div>


      </>

    )
  }


  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "#292F3F",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "15px",
        boxSizing: "border-box",

      }}
    >




      <div
        style={{
          width: "100%",
          height: "100px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#1F232F",
          padding: "10px",
          position: "relative",
          marginTop: "20px",
          marginBottom: "20px",

        }}>

        <div

          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            width: "20%",
            position: "absolute",
            left: "20px",
            top: "20px",
          }}
        >
          <img src={logo} style={{ height: "30px", borderRadius: "11px", marginRight: "10px" }} />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "start",
            width: "70%",
            position: "absolute",
            left: "90px",
            top: "25px",
          }}>


          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              'Hola soy Cirlce ! estos son tus resultados! 🥳',
              1000, // wait 1s before replacing "Mice" with "Hamsters"

              'Presiona la tajeta para ver mas información 🥳',
              1000, // wait 1s before replacing "Mice" with "Hamster
              '¡Buena suerte en tus nuevos desafíos!',
              1000,
              'Que la fuerza te acompañe 🌟',
              1000,
              'Encuentra a las personas que necesitas conocer',
              1000,
              '¡Y mucho más!',

            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: '1em', display: 'inline-block', color: "white", }}
            repeat={Infinity}
          />
        </div>


      </div>



      {data ?
        <>
          {data.map((match, index) => (
              <MatchCard  match={match} femaleImg={getImg(match)} index={0} />

          ))}
        </>
        :

        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "10px",
            boxSizing: "border-box",
            overflowY: "scroll",
          }}

        >

          <p

            style={{

            }}

          >Loading...</p>

        </div>

      }

    </div>
  );
}

const matches = [
  {
    id: 1,
    name: "Juan",
    age: 23,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nunc ut aliquet tincidunt, nisl quam ultricies mi, non ultricies nisl nunc quis nisl. Sed euismod, nunc ut aliquet tincidunt, nisl quam ultricies mi, non ultricies nisl nunc quis nisl.",
    image: "https://picsum.photos/200/300",
  },
  {
    id: 2,
    name: "Maria",
    age: 25,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nunc ut aliquet tincidunt, nisl quam ultricies mi, non ultricies nisl nunc quis nisl.",
    image: "https://picsum.photos/200/301",
  },
  {
    id: 3,
    name: "Carlos",
    age: 28,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nunc ut aliquet tincidunt, nisl quam ultricies mi, non ultricies nisl nunc quis nisl.",
    image: "https://picsum.photos/200/302",
  },
  {
    id: 4,
    name: "Ana",
    age: 22,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nunc ut aliquet tincidunt, nisl quam ultricies mi, non ultricies nisl nunc quis nisl.",
    image: "https://picsum.photos/200/303",
  },
  {
    id: 5,
    name: "Pedro",
    age: 30,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nunc ut aliquet tincidunt, nisl quam ultricies mi, non ultricies nisl nunc quis nisl.",
    image: "https://picsum.photos/200/304",
  },
];

export default MatchesView;
