import React from 'react';
import LaunchList from './components/LaunchList'
import LaunchProfile from './components/LaunchProfile'

const App: React.FC = () => {

  const [id, setId] = React.useState(42)
  const handleIdChange = React.useCallback(newId =>{
    setId(newId)
  }, [])

  return (
    <div className="App">
      <LaunchList handleIdChange={handleIdChange} />
      <LaunchProfile id={id} />
    </div>
  );
}

export default App;
