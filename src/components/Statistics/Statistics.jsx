import { FaRegThumbsUp } from "react-icons/fa";
import { MdPeople, MdOutlineProductionQuantityLimits } from "react-icons/md";
import { GiTreeDoor } from "react-icons/gi";
import { StatisticsItem } from "..";
import style from "./Statistics.module.css";

const icons = [
  <FaRegThumbsUp />,
  <MdPeople />,
  <MdOutlineProductionQuantityLimits />,
  <GiTreeDoor />,
];

export const Statistics = ({ stats, title }) => {
  return (
    <>
      {title && <h2 className={style.title}>{title}</h2>}
      <ul className={style.list}>
        {stats.map(({ id, title, total }, index) => (
          <StatisticsItem
            icon={icons[index]}
            key={id}
            title={title}
            total={total}
          />
        ))}
      </ul>
    </>
  );
};
