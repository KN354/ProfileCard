import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillSet />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <img
      className="avatar"
      src="assets/images/ProfileImage.jpg"
      alt="ProfileName"
    />
  );
}

function SkillSet() {
  return (
    <div className="skill-list">
      <Skill Skill="C#.Net Core" Color="Blue" Emoji="💪" />
      <Skill Skill="WPF" Color="Red" Emoji="💪" />
      <Skill Skill="CAD Programming" Color="Orange" Emoji="💪" />
      <Skill Skill="Digital Twin" Color="Orange" Emoji="💪" />
    </div>
  );
}

function Skill(props) {
  const skillName = props.Skill;
  const color = props.Color;
  const emoji = props.Emoji;

  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skillName}</span>
      <span>{emoji}</span>
    </div>
  );
}

function Intro() {
  return (
    <div>
      <h1>Karthik Neduncheliyan</h1>
      <p>
        Software Architect focusing Digital Twin technology, providing complex
        engineering solutions. Like driving motor bike, nature and woods.
      </p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
