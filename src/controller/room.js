import {findIndex}from "../common/booking.js"

let rooms = [

  {
    id: 1,
    class: "A/C class Coach",
    status: true,
    price: 10000,
  },
  {
    id: 2,
    class: "5 Star Hotel",
   status: true,
   price: 20000,
  },
  {
    id: 3,
    class: "Ac room",
    status: true,
    price: 3000,
  },
  {
    id: 4,
    class: "Non Ac rooms",
    status: false,
    price: 2000,
  },
  {
    id: 5,
    class: "Daj Hotel",
    status: false,
    price: 40000,
  },
];

let customer = [
  
  
  {
    id: 1,
    customer_id: 1,
    name: "Abimanyu",
    date: "31/1/2024 -16/02/2024",
    start: "10:00 AM",
    end: "10:00 PM",
  },
  {
    id: 2,
    customer_id: 2,
    name: "Rohit",
    date: "01/02/2024 -17/02/2024",
    start: "10:00 AM",
   end: "11:00 PM",
  },
  {
    id: 3,
    customer_id: 3,
    name: "Jhon Doe",
    date: "11/02/2024-15/02/2024 ",
    start: "10:00 AM",
    end: "10:00 PM",
  },
  {
    id: 4,
    customer_id: 4,
    name: "Captain America",
    date: "12/02/2024-21/02/2024",
    start: "10:00 AM",
    end: "10:00 PM",
  },
];

let bookedRooms = (req, res) => {
  try {
    let bookedRoom = [];
    for (let i = 0; i < rooms.length; i++) {
      for (let j = 0; j < customer.length; j++) {
        if (rooms[i].id === customer[j].id) {
          bookedRoom.push({
            Room_name: rooms[i].class,
            booked_status: rooms[i].status,
            Rent_Price:rooms[i].price,
            customer: customer[j],
          });
        }
      }
    }
    if (rooms[i].status=== false) {
      bookedRoom.push(rooms[i]);
    }
    res.status(200).send(bookedRoom);
  } catch (error) {
    res.status(500).send({
      alert: "No rooms available",
    });
  }
};

let allCustomer = (req, res) => {
  try {
    let bookedRoom = [];
    for (let i = 0; i < rooms.length; i++) {
      for (let j = 0; j < customer.length; j++) {
        if (rooms[i].id === customer[j].id) {
          
          bookedRoom.push({
            Customer: customer[j].name,
            Room_type: rooms[i].class,
            Date: customer[j].date,
            ChcekIntime: customer[j].start,
            CheckOutTime: customer[j].end,
            Booked_status: rooms[i].status,
          });
        }
      }
    }
    res.status(200).send(bookedRoom);
  } catch (error) {
    res.status(500).send({
      alert: "Booking failed",
    });
  }
};

let createRoom = (req, res) => {
  try {
    let id = rooms.length ? rooms[rooms.length - 1].id + 1 : 1;
    req.body.id = id;
    req.body.class = `class-${id}`;
    req.body.status = false;

    rooms.push(req.body);
    console.log(req.body);
    res.status(200).send({
      alert: "Room created succesfully",
    });
  } catch (error) {
    res.status(500).send({
     alert: "Room creation failed",
    });
  }
};

let deleteRoom = (req, res) => {
  try {
    let { id } = req.params;
    let index = findIndex(rooms, id);
    if (index !== -1) {
      console.log("enter room id again");
      rooms.splice(index, 1);
      res.status(200).send({
        alert: "rooms deleted succesfully",
      });
    } else {
      res.status(400).send({
        alert: "enter correct id",
      });
    }
  } catch (error) {
    res.status(500).send({
      alert: "failed to delete",
    });
  }
};

let Booking = (req, res) => {
  try {
    let { id } = req.params;
    let room_id = +id;
    let index = findIndex(rooms, id);
    let temp = { ...rooms[index] };
    temp.status = true;

    if (index !== -1 && rooms[index].status== false) {
      rooms.splice(index, 1, temp);
      let { name, date, start, end } = req.body;
      let id = customer.length
        ? customer[customer.length - 1].customer_id + 1:1;
       
      let newCustomer = {
        customer_id:id,
        name,
        date,
       start,
        end,
        room_id: id,
      };
      customer.push(newCustomer);
      res.status(200).send({
        alert: "room booked successfully",
      });
    } else if (rooms[index].status === true) {
      res.status(500).send({
        alert: "failed to book",
      });
    }
  } catch (error) {
    res.status(500).send({
      alert: "Server down",
    });
  }
};

export default{
    bookedRooms,
    allCustomer,
    createRoom,
    deleteRoom,
    Booking
}