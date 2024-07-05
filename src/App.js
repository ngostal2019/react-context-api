import './App.css';
import { UserProvider, useUser } from './userContext';

const LoggedInUser = () => {
  const {user} = useUser()
  return (
    <p>
      Hello <span className='Usercolored'>{user.name}</span>
    </p>
  )
}

const Header = () => {
  return (
    <header className='Username'>
      <h2>Blog App</h2>
      <LoggedInUser />
    </header>
  )
}

const Page = () => {
  const {user} = useUser()
  return (
    <div>
      <h2>What is Lorem ipsum?</h2>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </p>
      <p>Written by <span className='Usercolored'>{user.name}</span>
      </p>
      <span>Get in touch with the auther at <small className='Useremail'>{user.email}</small></span>
    </div>
  )
}

function App() {
  return (
    <div className="App">
        <Header />
        <Page />
    </div>
  );
}

function Root() {
  return (
  <UserProvider>
    <App />
  </UserProvider>
  )
}

export default Root;
