import React from "react";
import TeamBox from "./TeamBox";

const Team = () => {
  return (
    <section className="bg-white p-4 my-4 rounded-lg">
      <h1 className="font-bold text-xl">Team</h1>
      <div className=" flex flex-col gap-4">
        <p>
          Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing arcu
          nibh. Eget mattis in mi integer sit egestas. Proin tempor id pretium
          quam. Facilisis purus convallis quam augue.
        </p>
        <TeamBox
          src={"/images/koinman.png"}
          name="John Smith"
          body=" Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit
        fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in
        nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque
        sed pellentesque viverra. Consectetur proin amet ut id facilisi quis
        consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est
        ipsum. Malesuada etiam mi gravida praesent interdu"
        />
        <TeamBox
          src={"/images/koinman1.png"}
          name="Elina Williams"
          body=" Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit
        fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in
        nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque
        sed pellentesque viverra. Consectetur proin amet ut id facilisi quis
        consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est
        ipsum. Malesuada etiam mi gravida praesent interdu"
        />
        <TeamBox
          src={"/images/koinman2.png"}
          name="John Smith"
          body=" Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit
        fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in
        nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque
        sed pellentesque viverra. Consectetur proin amet ut id facilisi quis
        consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est
        ipsum. Malesuada etiam mi gravida praesent interdu"
        />
      </div>
    </section>
  );
};

export default Team;
