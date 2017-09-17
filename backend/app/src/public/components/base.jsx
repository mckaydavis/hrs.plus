const React = require("react");
const styled = require("sytled-components").default;

const App = (module.exports = props => {
  const Header = styled.header`
    background: var(--silver);
    padding: 0.5rem 1rem;
    color: var(--black);
  `;

  return (
    <html>
      <head>
        <title>{props.title}</title>
      </head>
      <body>
        <Header>
          <h1>HRS+</h1>
        </Header>
        <div id="app">{props.children}</div>
        <script src="/static/js/app.js" />
      </body>
    </html>
  );
});
