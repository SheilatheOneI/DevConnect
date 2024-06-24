import { Card } from "@nextui-org/react";
import { H5, H6, Subtitle2 } from "../components/typography.tsx";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();

  return (
    <section className="mx-auto w-max pl-0 md:pt-2">
      <div className="mb-4 mt-3 p-2 pl-0">
        <button
          className="mb-4 mt-3 text-[#1C5D99] hover:underline pl-0"
          onClick={() => navigate("/")}
          style={{ transform: "translateX(-8cm)" }}
        >
          &larr; Back
        </button>
      </div>
      <section className="flex flex-col h-max text-center  gap-y-1 md:mx-auto w-[60%] p-4 border-moonstone border-2 rounded-lg my-6 items-center justify-center">
        <span className="flex">
          <img
            src="/src/images/logo2.jpg"
            alt=""
            className="w-max h-[6rem] rounded-full"
          />
        </span>
        <H5 className="font-bold">Ruth Chepkoech</H5>
        <Subtitle2 className="font-bold">Front-End Software Engineer</Subtitle2>
        <Subtitle2 className="font-bold text-yellow-500">
          Rates: $200/hour
        </Subtitle2>
        <H6 className="underline italic">Bio</H6>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati sit
        ad veritatis laborum tempore.
        <Card className="w-[90%]">
          <H6 className="underline italic">Contacts</H6>
          <section className="p-0 flex flex-col my-1 gap-x-2 gap-y-2">
            <h6 className="text-start pl-2">Phone: +123 564 8904</h6>
            <h6 className="text-start pl-2">Email: ruthchep@gmail.com</h6>
          </section>
        </Card>
        <section></section>
      </section>
    </section>
  );
};

export default Profile;
