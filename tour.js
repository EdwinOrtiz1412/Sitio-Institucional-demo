const descriptions = {
  patio: {
    title: "Patio Principal",
    text: "Este espacio funciona como punto de encuentro para ceremonias, actividades cívicas y convivencia estudiantil.",
  },

  aula: {
    title: "Aula de Cómputo",
    text: "Espacio destinado al fortalecimiento de competencias digitales y actividades académicas.",
  },

  comedor: {
    title: "Comedor",
    text: "Los estudiantes del albergue reciben desayuno, comida y cena mediante una cuota de recuperación.",
  },

  albergue: {
    title: "Albergue Estudiantil",
    text: "Servicio dirigido a estudiantes foráneos, brindando hospedaje y atención integral.",
  },
};

function updateInfo(scene) {
  document.getElementById("scene-title").textContent =
    descriptions[scene].title;

  document.getElementById("scene-description").textContent =
    descriptions[scene].text;
}

const viewer = pannellum.viewer("panorama", {
  default: {
    firstScene: "patio",

    sceneFadeDuration: 1000,

    autoLoad: true,

    autoRotate: -2,

    compass: false,
  },

  scenes: {
    patio: {
      title: "Patio Principal",

      type: "equirectangular",

      panorama: "https://pannellum.org/images/alma.jpg",

      hotSpots: [
        {
          pitch: -5,
          yaw: 40,
          type: "scene",
          text: "Ir al Aula de Cómputo",
          sceneId: "aula",
        },

        {
          pitch: -3,
          yaw: 120,
          type: "scene",
          text: "Ir al Comedor",
          sceneId: "comedor",
        },

        {
          pitch: -2,
          yaw: -60,
          type: "scene",
          text: "Ir al Albergue",
          sceneId: "albergue",
        },
      ],
    },

    aula: {
      title: "Aula de Cómputo",

      type: "equirectangular",

      panorama: "https://pannellum.org/images/tocopilla.jpg",

      hotSpots: [
        {
          pitch: -4,
          yaw: 180,
          type: "scene",
          text: "Regresar al Patio",
          sceneId: "patio",
        },
      ],
    },

    comedor: {
      title: "Comedor",

      type: "equirectangular",

      panorama: "https://pannellum.org/images/lascar.jpg",

      hotSpots: [
        {
          pitch: -3,
          yaw: 180,
          type: "scene",
          text: "Regresar al Patio",
          sceneId: "patio",
        },

        {
          pitch: -2,
          yaw: 70,
          type: "scene",
          text: "Ir al Albergue",
          sceneId: "albergue",
        },
      ],
    },

    albergue: {
      title: "Albergue",

      type: "equirectangular",

      panorama: "https://i.imgur.com/G7t9QD9.jpg",

      hotSpots: [
        {
          pitch: -5,
          yaw: 180,
          type: "scene",
          text: "Ir al Comedor",
          sceneId: "comedor",
        },

        {
          pitch: -3,
          yaw: -90,
          type: "scene",
          text: "Regresar al Patio",
          sceneId: "patio",
        },
      ],
    },
  },
});

updateInfo("patio");

viewer.on("scenechange", function (sceneId) {
  updateInfo(sceneId);
});
