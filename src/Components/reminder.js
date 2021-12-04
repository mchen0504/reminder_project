import "./App.css";
import ReminderInfoBox from "./reminderDetailInfo";
import { useState } from "react";

export default function Reminder(props) {
  const [content, setContent] = useState("");
  const [showInfo, setShowInfo] = useState(false);
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [date, setDate] = useState();
  const [expandTime, setExpandTime] = useState(false);

  // complete a reminder
  const handleComplete = () => {
    props.completeReminder(props.time);
  };

  // handle when user edits the reminder
  const handleEdit = (e) => {
    setContent(e.target.value);
    props.editContent(e.target.value, props.time);
    if (e.target.value.length !== 0) {
      setShowInfo(true);
    }
  };
    // set reminder date
    const handleDateUpdate = (e) => {
        setDate(e.target.value);
    }

  return (
    <div className="reminder-info">
      <div>
        <input type="checkbox" id="check-circle" onClick={handleComplete} />
        <label htmlFor="text-field"></label>
        <input id="text-field" value={content} onInput={handleEdit} />
        <br></br>
        {expandTime === true ? date : ""}
      </div>
      {showInfo ? (
        <span className="info-icon" onClick={() => setDetailsOpen(true)}>
          &#9432;
        </span>
      ) : (
        ""
      )}
      {detailsOpen === true ? (
        <ReminderInfoBox content={content} setDetailsOpen={setDetailsOpen} setExpandTime={setExpandTime} handleDateUpdate={handleDateUpdate} />
      ) : (
        ""
      )}
    </div>
  );
}