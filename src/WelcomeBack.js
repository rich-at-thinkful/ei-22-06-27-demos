import "./WelcomeBack.css";

export default function WelcomeBack({ 
  name = "valued customer", 
  language, 
}) {
  // All React Components MUST return a JSX element
  // let greeting;
  // if (language === "es") {
  //   greeting = "Hola";
  // } else {
  //   greeting = "Welcome back";
  // }

  const languages = {
    es: "Hola",
    fr: "Bonjour"
  };

  return (
    <div className="WelcomeBack card" style={ {width: "18rem"} }>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{languages[language] || "Hello"}, {name}!</p>
      </div>
    </div>
  );
}