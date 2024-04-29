import React from "react";
import "./index.css";

export const Todoitem = (props) => {
  let { todoItem, deletetodoItem, setUpdate, completetodoItem } = props;

  return (
    <div className="todoitem-container">
      <h3>ToDo Items</h3>
      <ul>
        {todoItem.map((each) => (
          <li className="task-edit-del" key={each.id}>
            <p className={each.status ? "task-complete" : " "}>{each.title}</p>
            <div className="action-btn">
              <button onClick={() => completetodoItem(each.id)}>
                Complete
              </button>
              {each.status ? null : (
                <button
                  onClick={() =>
                    setUpdate({
                      id: each.id,
                      title: each.title,
                      status: each.status ? true : false,
                    })
                  }
                >
                  Edit
                </button>
              )}
              <button onClick={() => deletetodoItem(each.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
