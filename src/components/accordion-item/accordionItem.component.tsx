import { useState } from "react";
import QuestionsAnswers from "./questions";
import { FiPlus, FiX } from "react-icons/fi";

// import arrow from "../../assets/icon-arrow-down.svg";
// import "./accordionItem.styles.css";
import Image from "next/image";
const AccordionItem = () => {
  const [selected, setSelected] = useState(null);

  const toggle = (index: any) => {
    if (selected === index) {
      return setSelected(null);
    }

    setSelected(index);
  };

  return (
    <>
      <div className="mx-auto max-w-screen-lg py-14 md:py-20 lg:py-28">
        <h3 className="w-full px-4 text-center text-fluid-sm-display-03 text-light-text-strong md:px-8 md:text-fluid-md-display-03 lg:px-10 lg:text-fluid-lg-display-03 xl:text-fluid-xl-display-03 2xl:text-[5.25rem] leading-[5.875rem] font-light">
          <p>Отвечаем на вопросы</p>
        </h3>
        <div className="mt-10 px-4">
          <div className="group flex flex-col gap-1 p-1 rounded-lg bg-light-field-01 theme-dark:bg-dark-layer-01 theme-light size-large align-right">
            {QuestionsAnswers.map((item, index) => (
              <div
                className="data-[state=open]:bg-light-field-02 theme-dark:data-[state=open]:bg-dark-field-02 rounded-md theme-light"
                key={item.id}
              >
                <div
                  className="items-center text-left text-heading-compact-01 cursor-pointer text-light-text-strong hover:bg-[#e3e3e8] w-full px-3 py-3.5 group-[.size-medium]:py-2.5 group-[.size-small]:py-1.5  disabled:text-light-text-disabled theme-dark:hover:bg-dark-layer-hover-02 rounded-md flex justify-between group-[.align-left]:flex-row-reverse group-[.align-left]:justify-end gap-4 theme-light"
                  onClick={() => toggle(index)}
                >
                  <h2 className="text-heading-compact-01">{item.question}</h2>
                  <span className="self-center">
                    {selected === index ? <FiX /> : <FiPlus />}
                  </span>
                </div>
                <div
                  className={
                    selected === index
                      ? "content show px-3.5 pt-2 pb-8"
                      : "content"
                  }
                >
                  <p className="prose prose-base text-[#374151] pb-[0.938rem]">
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AccordionItem;
