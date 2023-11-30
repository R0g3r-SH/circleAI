import { Person, Email } from "@mui/icons-material";
import {
  Box,
  Button,
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Typography
} from "@mui/material";
import { useState, useEffect } from "react";
import CircleTitle from "../../components/circleTitle";
import { themeColors } from "../../theme/theme";
import ClipLoader from "react-spinners/ClipLoader";
import logo from "../../assets/logoCir.png";
import ReactPlayer from 'react-player';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import axios from 'axios';

import { TypeAnimation } from 'react-type-animation';

import { json, useNavigate } from "react-router-dom";


const RegisterView = ({ data, setData }) => {

  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isConnected, setIsConnected] = useState(false);

  const [results, setResults] = useState(null);

  const [form, setForm] = useState({
    email: "",
  });

  const validateEmail = (email) => {
    // Regular expression for basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };


  const handleSubmit = async () => {

    //validate email
    if (form.email === "") {
      toast.error("Ingresa un email válido");
      return;
    }

    //validate email
    if (!validateEmail(form.email)) {
      toast.error("Ingresa un email válido");
      return;
    }

    //validate email

    console.log("form", form);
    try {
      setIsLoading(true);

      // Make an HTTP request using Axios
      const response = await axios.get("https://circle-ai-388822.uc.r.appspot.com/get_top_predictions/" + form.email);  // Replace this with your API URL
      // Handle the response data as needed
      console.log(response.data);

      console.log("response.data", response.data);

      setData(response.data);



    } catch (error) {
      console.error('Error submitting form:', error);
      // Handle the error as needed
    } finally {


      setTimeout(() => {

        setIsLoading(false);
        navigate("/matches");

      }, 6000);

    }

  };

  if (isLoading) return (

    <div style={{
      height: "100vh", width: "100%", overflow: "hidden",
      overflowX: "hidden",
      overflowY: "hidden !important",
      borderBox: "box-sizing",
      marginTop: "20px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#292F3F",
    }} >

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
          zIndex: 1000,

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
              'Buscando a tus mejores aliados...',
              1000, // wait 1s before replacing "Mice" with "Hamsters"
              'Tu asistente de Networking asistido por IA',
              1000,
              'Optimiza tu red de contactos',
              1000,
              ' Cilcle AI networking asistido por IA .......'
            ]}

            wrapper="span"
            speed={50}
            style={{ fontSize: '1em', display: 'inline-block', color: "white", }}
            repeat={Infinity}
          />
        </div>


      </div>


    </div >

  );




  return (

    <>

      <ToastContainer />


      <div style={{
        height: "100vh", width: "100%", backgroundColor: '#292F3F', display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between",
        boxSizing: "border-box",
        paddingTop: "50px",
        paddingBottom: "100px",

      }}>


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
                'Hola soy Cirlce !',
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                'Tu asistente de Networking asistido por IA',
                1000,
                'Optimiza tu red de contactos',
                1000,
                'Encuentra a las personas que necesitas conocer',
                1000,
                '¡Y mucho más!',
                1000,
                'Ingresa tu email para comenzar',
                1000,


              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: '1em', display: 'inline-block', color: "white", }}
              repeat={Infinity}
            />
          </div>


        </div>

        <div
          style={{
            width: "90%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >

          <FormControl

            variant='outlined'
            sx={{
              width: "100%",
              backgroundColor: themeColors.inputBlack,
              borderRadius: "11px",
              marginTop: "-50px",
            }}>


            <InputLabel
              sx={{
                color: themeColors.inputFont,
                fontWeight: 300,
                letterSpacing: "1px",

              }}
              htmlFor='name' >
              Ingresa con tu Email
            </InputLabel>

            <OutlinedInput

              id='email'
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              value={form.email}
              type={"text"}
              sx={{
                borderRadius: "11px",
                color: themeColors.inputFont,
              }}
              endAdornment={
                <InputAdornment position='end'>
                  <Email
                    sx={{
                      color: themeColors.inputFont,
                      backgroundColor: themeColors.inputGray,
                      height: "49px",
                      width: "46px",
                      marginRight: "-14px",
                      padding: "3px",
                      borderRadius: "0 11px 11px 0",
                    }}
                  />
                </InputAdornment>
              }
              label='Nombre'
            />
          </FormControl>
        </div>

        <button

          style={{
            width: "100%",
            backgroundColor: isHovered
              ? themeColors.greenAccent
              : themeColors.blueAccent,
            color: "white",
            height: "50px",
            fontSize: "20px",
            fontWeight: 600,
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            outline: "none",
            transition: "background-color 0.3s ease",
          }}

          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}

          onClick={() => handleSubmit()}

        >
          LOG IN
        </button>


      </div>

    </>
  );
};

export default RegisterView;
