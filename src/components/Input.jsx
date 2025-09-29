const Input = ({ label, textarea, ...props }) => {
  return (
    <p>
      <label>{label}</label>
      {textarea ? <textarea {...props}></textarea> : <input {...props} />}
    </p>
  );
};

export default Input;
