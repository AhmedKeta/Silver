import { useCallback, useState } from "react";
import { Accordion } from "react-bootstrap";

const JeenaAccordion2 = ({ accordionsData }) => {
  const [active, setActive] = useState(1);
  const toggleAccordion = useCallback(
    (value) => {
      setActive(value === active ? null : value);
    },
    [active]
  );

  return (
    <Accordion defaultActiveKey={active}>
      {accordionsData.map((accordion) => (
        <div className="accordion-item">
          <h5 className="accordion-header">
            <Accordion.Toggle
              as="button"
              className={`accordion-button ${
                accordion.id === active ? "" : "collapsed"
              }`}
              eventKey={accordion.id}
              onClick={() => toggleAccordion(accordion.id)}
            >
              {accordion.title}
            </Accordion.Toggle>
          </h5>
          <Accordion.Collapse
            eventKey={accordion.id}
            data-bs-parent="#faq-accordion"
          >
            <div className="accordion-body">
              <p>{accordion.answer}</p>
            </div>
          </Accordion.Collapse>
        </div>
      ))}
    </Accordion>
  );
};
export { JeenaAccordion2 };
