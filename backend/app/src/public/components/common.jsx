const React = require("react");
const styled = require("styled-components").default;
const { Box } = require("rebass");

const OuterContainer = styled(Box)`
  width: 100%;
  padding-right: 5%;
`;

const { createApolloFetch } = require("apollo-fetch");
const apolloFetch = createApolloFetch({
  uri: "https://api-hxisxfilmx.now.sh/graphql"
});

module.exports = {
  OuterContainer,
  apolloFetch
};
