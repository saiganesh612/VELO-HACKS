import React,{ useState }  from 'react';
import { Card,Row,Col ,Button} from 'react-bootstrap';
import FileBase from 'react-file-base64';
import useStyles from './styles.js'
import { Container } from 'react-bootstrap';

const RequestForm=()=>{
    var styles = useStyles()
    const [postData, setPostData] = useState({ Hackerthonname: '',Organizer:'', eventDate: '', requirements: '', projectTheme: '',techStack:' ', });
    const classes = useStyles(); 
 
    const handleSubmit = async (e) => {
        e.preventDefault();
       
        console.log('pos',postData)
    // window.location.href = ('http://localhost:3000/');
    }
    console.log('postdata',postData) 
    return(
        <div className={classes.eventForm}>
            <Container>
            <Card className="shadow p-3 mb-5 bg-white rounded" >
            <h2 align="center"> Post your Requirement</h2>
                <br/>
            <form autoComplete="off" noValidate onSubmit={handleSubmit}>  
            <Row>
                <Col sm={6}>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" name="Hackname" id="floatingInput" placeholder="Reha" value={postData.Hackerthonname} onChange={(e) => setPostData({ ...postData, Hackerthonname: e.target.value })}/>
                    <label for="floatingInput">Hackerthon Name</label>
                </div>
                </Col>
                <Col>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" name="organised" id="floatingInput" placeholder="Reha" value={postData.Organizer} onChange={(e) => setPostData({ ...postData, Organizer: e.target.value })}/>
                    <label for="floatingInput">Organizer</label>
                </div>
                </Col>
                <Col>
                <div className="form-floating mb-3">
                    <input type="date" className="form-control" name="eventDate" id="floatingInput" value={postData.eventDate} onChange={(e) => setPostData({ ...postData, eventDate: e.target.value })}/>
                    <label for="floatingInput">Date of Hackerthon</label>
                </div>
                </Col>
            </Row>
            <Row>
            </Row>
           <Row>
           
           <Col>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" name="projecttheme" id="floatingInput" placeholder="Reha" value={postData.projectTheme} onChange={(e) => setPostData({ ...postData, projectTheme: e.target.value })}/>
                    <label for="floatingInput">Theme of Project</label>
                </div>      
            </Col>

            <Col>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" name="techstack" id="floatingInput"  value={postData.techStack} onChange={(e) => setPostData({ ...postData, techStack: e.target.value })}/>
                    <label for="floatingInput">Tech stacks used</label>
                </div> 
            </Col>

            </Row>
            <Row>
            <div className="form-floating">
                    <textarea className="form-control" placeholder="Leave a comment here"  name="requirements" id="floatingTextarea2" style={{height:"150px"}} value={postData.requirements} onChange={(e) => setPostData({ ...postData,requirements: e.target.value })}></textarea>
                    <label for="floatingTextarea2">Requirement </label>
                </div> 
            </Row>
           <Row>
            
               <Col>
               <br/>
                    <Button className="btn btn-info w-100"  size="large" type="submit" fullWidth>Submit</Button>
               </Col>
              
           </Row>
            </form>
            
            </Card>
            </Container>
        </div>
    )
}
export default RequestForm;