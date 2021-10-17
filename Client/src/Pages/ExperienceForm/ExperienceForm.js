import React,{ useState }  from 'react';
import { Card,Row,Col ,Button} from 'react-bootstrap';
import FileBase from 'react-file-base64';
import useStyles from './styles.js'
import { Container } from 'react-bootstrap';

const ExperienceForm=()=>{
    var styles = useStyles()
    const [inputList, setInputList] = useState([{ name: "", linkedinUrl: "" }]);
    const [postData, setPostData] = useState({ Hackerthonname: '',Organizer:'', eventDate: '', detailedDescription: '', BriefDescription:'',projectTheme: '',techStack:' ', selectedFile: '',repolink:'' ,YoutubeLink:'',teamCount:'',TeamDetails:[]});
    const classes = useStyles(); 
    let obj ={
        name :'',
        linkedinUrl:'',
    } 
    
    const handleInputChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...inputList];
        list[index][name] = value;
        setInputList(list);
      };
        
    // handle click event of the Remove button
    const handleRemoveClick = index => {
        const list = [...inputList];
        list.splice(index, 1);
        setInputList(list);
    };
    
    // handle click event of the Add button
    const handleAddClick = () => {
        setInputList([...inputList, { name: "", linkedinUrl: "" }]);
    };
    console.log(inputList)
    const handleSubmit = async (e) => {
        e.preventDefault();
        setPostData({ ...postData, TeamDetails: [...inputList]})
        console.log('pos',postData)
    // window.location.href = ('http://localhost:3000/');
    }
    console.log('postdata',postData) 
    return(
        <div className={classes.eventForm}>
            <Container>
            <Card className="shadow p-3 mb-5 bg-white rounded" >
            <h2 align="center"> Post your Experience</h2>
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

                {/* <div className="form-floating mb-3">
                        <input type="number" className="form-control" name="teamCount" id="floatingInput" value={postData.teamCount} onChange={(e) => setPostData({ ...postData, teamCount: e.target.value })}/>
                        <label for="floatingInput">No. team members</label>
                </div>
                {
                    Array?.apply(null, Array(Number(postData.teamCount)))?.map(Number.prototype.valueOf,0)?.map((data,index)=>{
                        return(
                            <div>
                               <Row>
                                   <Col>
                                   <div className="form-floating mb-3">
                                        <input type="text" className="form-control" name='name' index={index} id="floatingInput" value={postData.TeamDetails[index]} onChange={addTeamMember}/>
                                        <label for="floatingInput">Name</label>
                                    </div>
                                   </Col>
                                   <Col>
                                   <div className="form-floating mb-3">
                                        <input type="text" className="form-control" name="Linedin" index={index}  id="floatingInput" value={postData.TeamDetails[index]} onChange={addTeamMember}/>
                                        <label for="floatingInput">LinkedIn URL</label>
                                    </div>
                                   </Col>
                               </Row>
                            </div>
                        )
                    })
                } */}
            </Row>
           <Row>
               <Col>
               <div className="form-floating">
                    <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{height:"150px"}} value={postData.detailedDescription} onChange={(e) => setPostData({ ...postData,detailedDescription: e.target.value })}></textarea>
                    <label for="floatingTextarea2">Project Detailed Description</label>
                </div>
               </Col>
           </Row>

           <br/>
           <Row>
               <Col>
               <div className="form-floating">
                    <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{height:"60px"}} value={postData.BriefDescription} onChange={(e) => setPostData({ ...postData,BriefDescription: e.target.value })}></textarea>
                    <label for="floatingTextarea2">Project Brief Description(less than 25 words)</label>
                </div>
               </Col>
           </Row>
           <br/>
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

            <Col>
                <div className="form-floating mb-3">
                    <input type="url" className="form-control" name="repolink" id="floatingInput"  value={postData.repolink} onChange={(e) => setPostData({ ...postData, repolink: e.target.value })}/>
                    <label for="floatingInput">Repository Link</label>
                </div> 
            </Col>
            <Col>
                <div className="form-floating mb-3">
                    <input type="url" className="form-control" name="youtubelink" id="floatingInput"  value={postData.YoutubeLink} onChange={(e) => setPostData({ ...postData, YoutubeLink: e.target.value })}/>
                    <label for="floatingInput">Youtube link(Hackerthon experience)</label>
                </div> 
            </Col>
           </Row>

          
           {inputList.map((x, i) => {
            return (
                <Row>
                <Col>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" name="name" id="floatingInput"  value={x.name}  onChange={e => handleInputChange(e, i)}/>
                        <label for="floatingInput">Enter Team mate name</label>
                    </div> 
                </Col>
                
                <Col>
                <div className="form-floating mb-3">
                        <input type="URL" className="form-control" name="linkedinUrl" id="floatingInput"  value={x.linkedinUrl}  onChange={e => handleInputChange(e, i)}  />
                        <label for="floatingInput">Enter Linkedin URL</label>
                </div> 
                </Col>
                <Col>
                {inputList.length !== 1 && <button className="btn btn-danger"  style={{margin:"7px"}} onClick={() => handleRemoveClick(i)}>Remove</button>}
                {inputList.length - 1 === i && <button className="btn btn-success"  style={{margin:"7px"}}  onClick={handleAddClick}>Add</button>}
                
                </Col>
            </Row>
            );
      })}
            
        

                 <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} /></div>
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
export default ExperienceForm;