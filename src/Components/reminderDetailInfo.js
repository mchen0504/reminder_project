import "./App.css";
import { useState } from "react";

function ReminderInfoBox(props) {
    //   const [expandTime, setExpandTime] = useState(false);
    
      return (
        <dialog id="detailBox" open>
          <h2>{props.content}</h2>
          <hr></hr>
          <div id="day-location-section">
            <span>remind me</span>
            <div id="day-location">
              <div className="detail-option">
                <input
                  type="checkbox"
                  id="day"
                  name="option"
                  value="day"
                  onClick={() => props.setExpandTime(!expandTime)}
                />
                <label htmlFor="day">On a Day</label>
              </div>
              {expandTime === true ? <input type="datetime-local" onChange={e => props.handleDateUpdate(e)} /> : ""}
              <div className="detail-option">
                <input
                  type="checkbox"
                  id="location"
                  name="option"
                  value="location"
                />
                <label htmlFor="location">At a Location</label>
              </div>
            </div>
          </div>
          {expandTime === true ? (
            <div id="repeat-section">
              <span>repeat</span>
              <select
                name="repeat"
                className="detail-option"
                id="repeat"
                defaultValue="none"
              >
                <option value="none">None</option>
                <option value="day">Every Day</option>
                <option value="week">Every Week</option>
                <option value="month">Every Month</option>
                <option value="year">Every Year</option>
              </select>
            </div>
          ) : (
            ""
          )}
          <hr></hr>
          <div id="priority-section">
            <span>priority</span>
            <select
              name="priority"
              className="detail-option"
              id="priority"
              defaultValue="none"
            >
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
              <hr></hr>
              <option value="none">None</option>
            </select>
          </div>
          <div id="note-section">
            <span>note</span>
            <label htmlFor="note"></label>
            <input
              type="text"
              id="note"
              name="note"
              placeholder="None"
              className="detail-option"
            />
          </div>
          <div id="detail-done-btn">
            <button type="button" onClick={() => props.setDetailsOpen(false)}>
              Done
            </button>
          </div>
        </dialog>
      );
    }
    