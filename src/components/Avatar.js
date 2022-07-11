import "../Assets/Styles/Avatar.css";

function Avatar({ mname, mimg, scale, borderw, borderc }) {
  return <img className="shape" alt={mname} src={mimg} style={{ width: scale, height: scale, borderWidth: borderw, borderColor: borderc }} />;
}

export default Avatar;
