import React from "react";
import Button from "../SmallComponent/Button";
import {
  AiOutlineDeploymentUnit,
  AiFillAlert,
  AiFillControl,
  AiFillExperiment,
} from "react-icons/ai";
import { SparklineAreaData } from "../../data/data/dummy.js";
import { earningData } from "../../data/data/dummy.js";
import Line from "../Charts/Line";
import Stacked from "../Charts/Stacked";
import { useStateContext } from "../../context/ContextProvider";
function Ecommerce() {
  const { themeColor } = useStateContext();

  const StatusIcon = ({
    icon,
    amount,
    percentage,
    title,
    iconColor,
    iconBg,
    pcColor,
    
  }) => {
    return (
      <div className="flex dark:text-white bg-gray-600 w-full flex-col rounded-2xl p-3 justify-center items-center hover:text-orange-600 cursor-pointer">
        <div
          className=" w-16 h-16 rounded-full p-2 text-center "
          style={{ color: iconColor, fontSize: 50, backgroundColor: iconBg }}
        >
          {icon}
        </div>
        <div className="flex">
          <span className="font-bold text-3xl ml-6">{amount}</span>
          <span className={`font-bold text-${pcColor}`}>{percentage}</span>
        </div>
        <div>{title}</div>
      </div>
    );
  };
  return (
    <div className="p-2">
      <div className="mt-12 relative m-2 bg-hero-pattern h-56 w-full bg-center bg-cover">
        <div className="absolute top-3 left-3">
          <p className="text-gray-500">Earnings</p>
          <p className="font-bold text-3xl">$63,448.78</p>
          <Button color="white" bgColor={themeColor} content="Download" size="lg" />
        </div>
      </div>

      {/* <div className="mt-12 flex justify-between gap-2"> */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3  xl:grid-cols-4   gap-4 mt-12">
        {earningData.map(
          (
            { icon, amount, percentage, title, iconColor, iconBg, pcColor },
            index
          ) => {
            // console.log({ icon });
            return (
              <div className="" key={index}>
                <StatusIcon
                  icon={icon}
                  amount={amount}
                  percentage={percentage}
                  title={title}
                  iconColor={iconColor}
                  iconBg={iconBg}
                  pcColor={pcColor}
                />
              </div>
            );
          }
        )}
      </div>

      <div className="hover:drop-shadow-xl bg-gray-600 rounded-3xl p-12 mt-12">
        <div className="flex justify-between  cursor-pointer ">
          <p className="font-semibold">Revenue Updates</p>
          <div className="flex ">
            <div className="flex items-center">
              <div className="w-4 h-4 mx-2 bg-dark rounded-full"></div> Expense
            </div>
            <div className="flex items-center text-green-300">
              <div className="w-4 h-4 mx-2 bg-green-300 rounded-full"></div>{" "}
              Budget
            </div>
          </div>
        </div>
        <div className=" mt-7 ">
          <div>
            <div>
              <span className="font-bold text-3xl">$93,438 </span>
              <span className="font-sm p-1.5 bg-green-400 rounded-full">
                +23%{" "}
              </span>
              <p className="text-gray-500">Budget</p>
            </div>
            <div className="mt-6">
              <span className="font-bold text-3xl ">48,487 </span>
              {/* <span className="font-semibold text-green-600">+23% </span> */}
              <p className="text-gray-500">Expense</p>
            </div>
          </div>
          <div className="flex justify-between">
            <div>
              <div className="mt-10">
                <Line
                  height="100px"
                  width="300px"
                  id="sparkline"
                  type="Line"
                  color="blue"
                  currentColor="blue"
                  data={SparklineAreaData}
                />
              </div>
              <div className="mt-10">
                <Button
                  color="white"
                  bgColor={themeColor}
                  content="Download report"
                />
              </div>
            </div>
            <div>
              <Stacked
              width="500px"
              height="250px"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ecommerce;
