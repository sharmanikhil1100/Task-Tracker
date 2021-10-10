import { unmountComponentAtNode } from 'react-dom'
import { Grid, Button, Icon } from 'semantic-ui-react'

const TaskBox = ({title, description, headerTitle, taskCount}) => {
    const taskBoxWidth = 100

    function deleteTaskBox(id){
        unmountComponentAtNode(document.getElementById(id))
    }

    return (
        <div id={"taskNo"+headerTitle+taskCount}>
        <Grid className="taskBox" style={{"width": taskBoxWidth+"%", "margin":"0"}}>
            <Grid.Row className="taskRow">
                <Grid.Column style={{"padding": "0 14"}} as="span">
                    {title}
                </Grid.Column>
            </Grid.Row>

            <Grid.Row className="taskRow">
                <Grid.Column className="taskBoxElement" as="span" width={12}>
                    {description}
                </Grid.Column>
                <Grid.Column className="taskBoxElement" as="span" width={2}>
                    <Button icon>
                        <Icon name='calendar plus outline' aria-hidden='false' size='large' />
                    </Button>
                </Grid.Column>
                <Grid.Column className="taskBoxElement" as="span" width={2}>
                    <Button icon onClick={deleteTaskBox("taskNo"+headerTitle+taskCount)}> 
                        <Icon name='delete' aria-hidden='false' size='large'/>
                    </Button>
                </Grid.Column>
            </Grid.Row>
        </Grid>
        </div>
    )
}
 
export default TaskBox;