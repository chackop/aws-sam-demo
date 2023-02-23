const dayjs = require("dayjs");

exports.clock = async (event) => {
  console.log("Clock Function Run");

  try {
    const message = dayjs().format(); //import dayjs from 'dayjs' // ES 2015

    const response = {
      statusCOde: 200,
      status: JSON.stringify(message),
    };

    return response;
  } catch (error) {
    console.log("Error", error);
  }
};
