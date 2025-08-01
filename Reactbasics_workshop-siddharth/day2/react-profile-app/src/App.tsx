import ProfileCard from './components/ProfileCard';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Mini Profile Card App</h1>
        <p>React & TypeScript Fundamentals - Day 2 Exercise</p>
      </header>
      
      <main className="profile-cards-container">
        <ProfileCard 
          name="Alice Johnson" 
          age={28} 
          email="alice.johnson@email.com"
        >
          Alice is a passionate software engineer who loves building user-friendly applications. 
          She specializes in React and has been coding for over 5 years.
        </ProfileCard>

        <ProfileCard 
          name="Bob Smith" 
          age={34} 
          email="bob.smith@email.com"
        >
          Bob is a software engineer with expertise in full-stack development. 
          He enjoys solving complex problems and mentoring junior developers.
        </ProfileCard>

        <ProfileCard 
          name="Carol Davis" 
          age={26} 
          email="carol.davis@email.com"
        >
          Carol is a UX/UI designer turned frontend developer. 
          She brings a unique perspective to web development with her design background.
        </ProfileCard>

        <ProfileCard 
          name="David Wilson" 
          age={31} 
          email="david.wilson@email.com"
        >
          David is a DevOps engineer who loves automating processes and improving system reliability. 
          He has a strong background in cloud technologies and containerization.
        </ProfileCard>
      </main>
    </div>
  );
}

export default App;

