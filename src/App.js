import './App.css';
import TasksList from './Components/TasksList';
import { Grid, Button, Icon } from 'semantic-ui-react'

function App() {
  return (
    <>
    <Grid>
      <Grid.Row>
        <Grid.Column width={8}>
          <TasksList headerTitle="To Do"/>
          <TasksList headerTitle="Doing"/>
        </Grid.Column>
        <Grid.Column width={8}>
          <TasksList headerTitle="Done"/>
          <TasksList headerTitle="Do Later"/>
        </Grid.Column>
      </Grid.Row>
    </Grid>
    </>
  );
}

export default App;
