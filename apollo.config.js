module.exports = {
  client: {
    includes: ["./src/**/*.{tsx,ts}"],
    tagName: "gql",
    service: {
      name: "instaclone-backend",
      url: "http://localhost:4000/graphql",
    },
  },
};

const parser = input => {
  let curr;


}