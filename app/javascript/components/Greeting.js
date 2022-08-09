import React from "react"
import PropTypes from "prop-types"
import { useSelector, useDispatch } from "react-redux"
import { getGreeting } from '../redux/greetingReducer';
const Greeting = () => {
  const dispatch = useDispatch();
  const randomGreeting = useSelector((state) => state.greeting);
  console.log(randomGreeting.greeting.message)

  const handleClick = () => {
    dispatch(getGreeting());
  };
  

  return (
    <div className="box">
      <p className="text">My greeting: {randomGreeting.greeting.message}</p>
      <button className="helloBtn" onClick={handleClick}>Get Greeting Randomnly</button>
    </div>
  );
};

Greeting.propTypes = {
  message: PropTypes.string,
};
export default Greeting;
