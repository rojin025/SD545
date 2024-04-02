/**
 * Variables: You can directly use variables
 *  declared outside the JSX code:
 */

function App3() {
  /**
   * Variables: You can directly use variables
   *  declared outside the JSX code:
   */
  const name = "World";
  const element = <h1>Hello, {name}!</h1>;
  return <div class="result">{element}</div>;
}

/**
 * Expressions: Any valid JavaScript expression can be used:
 */
const age = 30;
const message = <p>You are {age} years old.</p>;

/**
 * Function Calls: You can call functions and
 * include the result in the JSX:
 */

function formatName(user) {
  return user.firstName + " " + user.lastName;
}

const user = { firstName: "Rojin", lastName: "Bijukchhe" };
const greeting = <h2>Welcome, {formatName(user)}</h2>;
