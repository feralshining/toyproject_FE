import React from "react";

const AuthButton: React.FC = () => {
  return (
    <div className="auth-container">
      <button className="auth-button">
        <div className="auth-text">로그인</div>
      </button>
    </div>
  );
};

export default AuthButton;