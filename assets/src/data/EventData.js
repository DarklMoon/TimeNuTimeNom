export const EVENT_DATA_MOCK = [
  {
    event00: {
      title: "Running Time",
      categories: {
        WorkOut: "#FFA607",
      },
      place: "",
      startTime: "16:00",
      endTime: "17:00",
      description: "",
      image: "",
    },
  },
  {
    event01: {
      title: "Play Football",
      categories: {
        
      },
      place: "",
      startTime: "15:00",
      endTime: "",
      description: "",
      image: "",
    },
  },
  {
    event02: {
      title: "Lift Weights",
      categories: {
        WorkOut: "#FFA607",
      },
      place: "",
      startTime: "16:00",
      endTime: "17:00",
      description: "",
      image: "",
    },
  },
  {
    event03: {
      title: "Sit up",
      categories: [],
      place: "",
      startTime: "16:00",
      endTime: "16:30",
      description: "",
      image: "",
    },
  },
  {
    event04: {
      title: "Event-04",
      categories: [],
      place: "",
      startTime: "07:30",
      endTime: "12:00",
      description: "",
      image: "",
    },
  },
  {
    event05: {
      title: "Event-05",
      categories: [],
      place: "",
      startTime: "10:00",
      endTime: "19:00",
      description: "",
      image: "",
    },
  },
  {
    event06: {
      title: "Event-06",
      categories: [],
      place: "",
      startTime: "22:00",
      endTime: "",
      description: "",
      image: "",
    },
  },
];

const convertEventData = (events) => {
  const result = [];

  events.forEach((eventObj) => {
    for (const key in eventObj) {
      if (eventObj.hasOwnProperty(key)) {
        const event = eventObj[key];
        const startTime = event.startTime;
        const endTime = event.endTime ? ` - ${event.endTime}` : "";
        const formattedEvent = {
          key,
          value: `${event.title} ${startTime}${endTime}`,
        };
        result.push(formattedEvent);
      }
    }
  });

  return result;
};

export const EVENT_FOR_MUTI = convertEventData(EVENT_DATA_MOCK);
console.log("EVENT_DATA", EVENT_FOR_MUTI);

export const EVENT_DATA = [
  {
    // event00: {
    title: "Running Time",
    categories: {
      WorkOut: "#FFA607",
      Name: "WorkOut",
      bg: "#ffce47",
    },
    place: "",
    startTime: "16:00",
    endTime: "17:00",
    description: "",
    image: "",
    // },
  },
  {
    // event01: {
    title: "Play Football",
    categories: {
      WorkOut: "#FFA607",
      Sport: "#41D5E0",
      Name: "WorkOut",
      bg: "#47ffb3",
    },
    place: "",
    startTime: "15:00",
    endTime: "",
    description: "",
    image: "",
    // },
  },
  {
    // event02: {
    title: "Lift Weights",
    categories: {
      WorkOut: "#FFA607",
      Name: "excersice",
      bg: "#32a852",
    },
    place: "",
    startTime: "16:00",
    endTime: "17:00",
    description: "",
    image: "",
    // },
  },
  {
    // event03: {
    title: "Sit up",
    categories: [],
    place: "",
    startTime: "16:00",
    endTime: "16:30",
    description: "",
    image: "",
    // },
  },
  {
    // event04: {
    title: "Event-04",
    categories: [],
    place: "",
    startTime: "07:30",
    endTime: "12:00",
    description: "",
    image: "",
    // },
  },
  {
    // event05: {
    title: "Event-05",
    categories: [],
    place: "",
    startTime: "10:00",
    endTime: "19:00",
    description: "",
    image: "",
    // },
  },
  {
    // event06: {
    title: "Event-06",
    categories: [],
    place: "",
    startTime: "22:00",
    endTime: "",
    description: "",
    image: "",
    // },
  },
];

export default EVENT_DATA;


// const convertEventData = (events) => {
//   const result = [];

//   events.forEach((eventObj) => {
//     for (const key in eventObj) {
//       if (eventObj.hasOwnProperty(key)) {
//         const event = eventObj[key];
//         const startTime = event.startTime;
//         const endTime = event.endTime ? ` - ${event.endTime}` : "";
//         const formattedEvent = {
//           key,
//           value: `${event.title} ${startTime}${endTime}`,
//         };
//         result.push(formattedEvent);
//       }
//     }
//   });

//   return result;
// };

// export const EVENT_FOR_MUTI = convertEventData(EVENT_DATA);
// console.log(EVENT_FOR_MUTI);