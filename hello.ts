import axios from "axios";

const message: string = "Hello! TypeScript!";
console.log(message);

const main = async () => {
  const response = await axios.get(
    "https://api.github.com/users/tktcorporation"
  );
  console.log(`response: ${JSON.stringify(response.data)}`);
  console.log(`response.status: ${response.status}`);
  console.log(
    `response.data.avatar_url: ${JSON.stringify(response.data.avatar_url)}`
  );

  const avatar = await axios.get(response.data.avatar_url);
};

main();
