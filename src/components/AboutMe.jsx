import React from "react";

function AboutMe() {
  return (
    <>
      <div id="bigBox-aboutMe">
        <div id="aboutMe">
          <div id="aboutMe-text">
            <h2>Acerca de mí</h2>
            <div id="aboutMe-text-content">
              <div>¿Quién soy?</div>
              <div>
                Me llamo Alan García, soy un Desarrollador Web Fullstack Jr con
                ganas de aprender más todo el tiempo, disfruto mucho el trabajo
                en en equipo, asi como el conocimiento y el compañerismo que se
                genera por medio de éste. Me gusta mucho manterme aprendidiendo
                y seguir actualizado.
              </div>
              <div>
                Actualmente el ambito donde mejor me puedo desenvolver por ahora
                es en el front-end. Por el momento no he tenido una experiencia
                laboral, actualmente me encuentro en busca de experiencia y
                estoy abierto a oportunidades.
              </div>
              <div>
                En mi tiempo libre suelo patinar, jugar algún videojuego o ver
                alguna serie. Amo todo lo sci-fi
              </div>
            </div>
          </div>
          <div id="aboutMe-img-box">
            <img
              src="https://i.postimg.cc/TwDyN5rW/mifoto1.png"
              alt="picc"
              id="aboutMe-img"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutMe;
