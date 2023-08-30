import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const data = [
  {
    id: 1,
    title: "accordion one",
    text: " Mollit amet sunt elit eu minim velit cupidatat enim tempor nostrud. Quis enim commodo sint elit non adipisicing reprehenderit irure. Aliqua adipisicing anim Lorem est.",
  },
  {
    id: 2,
    title: "accordion two",
    text: " Mollit amet sunt elit eu minim velit cupidatat enim tempor nostrud. Quis enim commodo sint elit non adipisicing reprehenderit irure. Aliqua adipisicing anim Lorem est.",
  },
  {
    id: 3,
    title: "accordion three",
    text: " Mollit amet sunt elit eu minim velit cupidatat enim tempor nostrud. Quis enim commodo sint elit non adipisicing reprehenderit irure. Aliqua adipisicing anim Lorem est.",
  },
];

function Accordion() {
  const [open, setOpen] = useState(null);
  const handleOpen = (id) => {
    setOpen(id === open ? null : id);
  };

  return (
    <div className="accordion">
      {data.map((item) => (
        <AccordionItem
          id={item.id}
          title={item.title}
          key={item.id}
          onOpen={handleOpen}
          open={open}
        >
          {item.text}
        </AccordionItem>
      ))}
      <AccordionItem
        id="4"
        title="Accordion four"
        onOpen={handleOpen}
        open={open}
      >
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga sit
          laboriosam omnis natus, animi repellendus doloribus facilis quas
          dolorem facere hic harum quos totam. Sit accusamus harum fuga ipsum?
          Maiores.
        </p>
        <ul>
          <li>one</li>
          <li>two</li>
        </ul>
        <a href="#">random link</a>
      </AccordionItem>
    </div>
  );
}

export default Accordion;

function AccordionItem({ id, title, onOpen, open, children }) {
  const isOpen = id === open;

  return (
    <div className={`accordion-item ${isOpen ? "accordion__expanded" : ""}`}>
      <div className="accordion-item__header" onClick={() => onOpen(id)}>
        <div>{title}</div>
        <ChevronDownIcon
          className="accordion-item__chevron"
          // style={{
          //   width: "1.2rem",
          //   transition: "all 0.2s ease-out",
          //   rotate: open ? "180deg" : "0deg",
          // }}
        />
      </div>
      <div className="accordion-item__content">{children}</div>
      {/* <div className="accordion-item__content">{item.text}</div> */}
    </div>
  );
}
