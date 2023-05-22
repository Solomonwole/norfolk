import styled from "styled-components";
import PropTypes from "prop-types";

const getInitials = (name) => {
  const nameArray = name.split(" ");
  const initials = nameArray
    .map((n) => n[0])
    .join("")
    .toUpperCase();
  return initials;
};

const Flex = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  .colum {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-left: 10px;

    .name {
      color: #0f172a;
      font-weight: 700;
      font-size: 16px;
    }
  }

  @media (max-width: 480px) {
    .colum {
      display: none;
    }
  }
`;



const AvatarWrapper = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #6e47ff;
  border: 2px solid #afadff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 120%;
  font-weight: bold;
  color: #fff;
`;

const StatusText = styled.p`
  color: ${(props) => (props.status === "active" ? "#00D964" : "#ff0000")};
  text-transform: capitalize;
`;

const Avatar = ({ name, status, onClick }) => {
  const initials = getInitials(name);

  return (
    <Flex onClick={onClick}>
      <AvatarWrapper>{initials}</AvatarWrapper>
      <div className="colum">
        <p className="name"> {name}</p>
        <StatusText status={status}>{status}</StatusText>
      </div>
    </Flex>
  );
};

Avatar.propTypes = {
  name: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Avatar;
