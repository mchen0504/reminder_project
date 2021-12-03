import "./App.css";
import { useState } from "react";
import Reminder from "./Components/reminder";

function App() {
  const [allReminders, setAllReminders] = useState([]);

  const addAnEmptyReminder = () => {
    if (allReminders.length === 0 || allReminders.at(-1).content) {
      setAllReminders([...allReminders, { time: new Date(), content: "" }]);
    }
  };

  const completeReminder = (time) => {
    let allRemindersCopy = [...allReminders];
    let editedReminderIndex = allRemindersCopy.findIndex(
      (reminder) => reminder.time === time
    );
    allRemindersCopy.splice(editedReminderIndex, 1);
    setAllReminders(allRemindersCopy);
  };

  const editContent = (newContent, time) => {
    let allRemindersCopy = [...allReminders];
    let editedReminderIndex = allRemindersCopy.findIndex(
      (reminder) => reminder.time === time
    );
    allRemindersCopy[editedReminderIndex].content = newContent;
    setAllReminders(allRemindersCopy);
  };

  let reminderList = allReminders ? allReminders.map((eachReminder) => {
    return (
          <div key={eachReminder.time}>
            <Reminder
              time={eachReminder.time}
              editContent={editContent}
              completeReminder={completeReminder}
            />
          </div>
        );
      }) : "";

  return (
    <div>
      <div id="title-add">
        <h1>Reminders</h1>
        <button className="plus" onClick={addAnEmptyReminder}>
          +
        </button>
      </div>
      {reminderList}
    </div>
  );
}

export default App;
