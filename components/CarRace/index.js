import { Fragment, useState } from "react";
import Winner from "../Winner";
import {
  CarButton,
  AllCarRoutes,
  DistanceHeadline,
  Distance,
  Track,
} from "./CarRace.styled";
import { initialCars, getRandomDistance } from "../../utils/utils";

const finishLine = 200;


// change the variable Name with from car to carState and from setCar to setCarState


export default function CarRace() {
  //----------version with UseState
  const [carsState, setCarsState] = useState(initialCars);



  //TO DO HERE!!!

  // function moveCar(clickedCar) {
  //   const coveredDistance = getRandomDistance();
  //   setCarsState({
  //     carsState.map((car) =>{

  //       if (carsState.emoji === clickedCar)





    console.log("clickedCar", clickedCar);
    console.log("coveredDistance", coveredDistance);
  }

  const winner = carsState.find((car) => car.position.x >= finishLine);

  return (
    <>
      {winner ? (
        <Winner winner={winner} onRestart={() => setCarsState(initialCars)} />
      ) : (
        <AllCarRoutes finishLine={finishLine}>
          <DistanceHeadline>Last Distance</DistanceHeadline>
          {carsState.map((car) => (
            <Fragment key={car.emoji}>
              <Track finishLine={finishLine}>
                <CarButton
                  onClick={() => moveCar(car)}
                  positionX={car.position.x}
                  lastDistance={car.position.lastDistance}
                  aria-label={`Move clicked car forward`}
                >
                  {car.emoji}
                </CarButton>
              </Track>
              <Distance>{car.position.lastDistance}</Distance>
            </Fragment>
          ))}
        </AllCarRoutes>
      )}
    </>
  );
}
