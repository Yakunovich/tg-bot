import React from "react";
import Button from "../Button/Button";
import { useTelegram } from "../../hooks/useTelegram";
import "./Header.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Header = () => {
  const { user, onClose } = useTelegram();
  const navigate = useNavigate();

  return (
    <div className={"header"}>
      <Button onClick={onClose}>Закрыть</Button>
      <Button onClick={() => navigate(-1)}>Go back</Button>
      <Button onClick={() => navigate(1)}>Go forward</Button>
      <span className={"username"}>{user?.username}</span>
      <div>
        <Link to="/form">Form</Link>
      </div>
    </div>
  );
};

export default Header;
