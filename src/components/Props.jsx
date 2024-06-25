function Props(props) {
  return (
    <div>
      <h3>
        Welcome <span className="name">{props.name}</span> to React Props. Your
        age is <span className="age">{props.age}</span> yrs. Your Profession is
        <span className="profession">{props.profession}</span>
      </h3>
    </div>
  );
}

export default Props;
