import WelcomeBack from "./WelcomeBack";

export default function WelcomeList() {
  const users = [
    {name: "Rich", language: "es"},
    {name: "Joe", language: "fr"},
    {},
  ];

  const usersList = users.map((user, index) => {
    return <WelcomeBack key={index} name={user.name} language={user.language} />;
  });

  return (
    <div>
      {usersList}
    </div>
  );
}