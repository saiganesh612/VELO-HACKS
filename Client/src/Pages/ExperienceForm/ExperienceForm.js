import React, { useState } from 'react';
import { Card, Row, Col, Button } from 'react-bootstrap';
import FileBase from 'react-file-base64';
import useStyles from './styles.js'
import { Container } from 'react-bootstrap';
import axios from "axios"
import { useAuth0 } from "@auth0/auth0-react"

const ExperienceForm = () => {
    const { user, isAuthenticated, isLoading, getAccessTokenSilently } = useAuth0()

    const [inputList, setInputList] = useState([{ name: "", linkedinUrl: "" }]);
    const [postData, setPostData] = useState({
        Hackerthonname: '', Organizer: '', eventDate: '', detailedDescription: '', BriefDescription: '',
        projectTheme: '', techStack: '', selectedFile: '', repolink: '', YoutubeLink: ''
    });
    const classes = useStyles();

    if (isLoading) return "Loading..."
    if (!isAuthenticated) return window.location.href = "/"

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
        setInputList([...list]);
    };

    // handle click event of the Add button
    const handleAddClick = () => {
        setInputList([...inputList, { name: "", linkedinUrl: "" }]);
    };
    console.log('data',postData)
    const handleSubmit = async (e) => {
        e.preventDefault();

        const satisfy = !postData.Hackerthonname || !postData.Organizer || !postData.eventDate || !postData.detailedDescription
            || !postData.BriefDescription || !postData.projectTheme || !postData.techStack || !postData.repolink || !postData.YoutubeLink
        if (satisfy) {
            alert("Enter each ans every field...")
            return
        }

        const teamSatisfy = inputList.some(team => !team.name || !team.linkedinUrl)
        if (teamSatisfy) {
            alert("Enter team details properly...")
            return
        }

        const data = { ...postData, TeamDetails: [...inputList], username: user.nickname,profileImage : user.picture }
        const token = await getAccessTokenSilently()
       
        axios({
            method: "POST",
            url: "/create-new-hackathon",
            headers: {
                "authorization": `Bearer ${token}`
            },
            data
        }).then(() => {
            window.location.href = "/projects"
        }).catch(err => {
            console.log(err.response)
            alert("Something went wrong...")
            window.location.reload()
        })
    }

    return (
        <div className={classes.eventForm}>
            <Container>
                <Card className="shadow p-3 mb-5 bg-white rounded" >
                    <h2 align="center"> Post your Experience</h2>
                    <br />
                    <form autoComplete="off" noValidate onSubmit={handleSubmit}>
                        <Row>
                            <Col sm={6}>
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" name="Hackname" id="floatingInput" placeholder="Reha" value={postData.Hackerthonname} onChange={(e) => setPostData({ ...postData, Hackerthonname: e.target.value })} />
                                    <label htmlFor="floatingInput">Hackerthon Name</label>
                                </div>
                            </Col>
                            <Col>
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" name="organised" id="floatingInput" placeholder="Reha" value={postData.Organizer} onChange={(e) => setPostData({ ...postData, Organizer: e.target.value })} />
                                    <label htmlFor="floatingInput">Organizer</label>
                                </div>
                            </Col>
                            <Col>
                                <div className="form-floating mb-3">
                                    <input type="date" className="form-control" name="eventDate" id="floatingInput" value={postData.eventDate} onChange={(e) => setPostData({ ...postData, eventDate: e.target.value })} />
                                    <label htmlFor="floatingInput">Date of Hackerthon</label>
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
                                    <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: "150px" }} value={postData.detailedDescription} onChange={(e) => setPostData({ ...postData, detailedDescription: e.target.value })}></textarea>
                                    <label htmlFor="floatingTextarea2">Project Detailed Description</label>
                                </div>
                            </Col>
                        </Row>

                        <br />
                        <Row>
                            <Col>
                                <div className="form-floating">
                                    <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: "60px" }} value={postData.BriefDescription} onChange={(e) => setPostData({ ...postData, BriefDescription: e.target.value })}></textarea>
                                    <label htmlFor="floatingTextarea2">Project Brief Description(less than 25 words)</label>
                                </div>
                            </Col>
                        </Row>
                        <br />
                        <Row>
                            <Col>
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" name="projecttheme" id="floatingInput" placeholder="Reha" value={postData.projectTheme} onChange={(e) => setPostData({ ...postData, projectTheme: e.target.value })} />
                                    <label htmlFor="floatingInput">Theme of Project</label>
                                </div>
                            </Col>

                            <Col>
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" name="techstack" id="floatingInput" placeholder="Tech Stack" value={postData.techStack} onChange={(e) => setPostData({ ...postData, techStack: e.target.value })} />
                                    <label htmlFor="floatingInput">Tech stacks used</label>
                                </div>
                            </Col>

                            <Col>
                                <div className="form-floating mb-3">
                                    <input type="url" className="form-control" name="repolink" id="floatingInput" placeholder="Repo Link" value={postData.repolink} onChange={(e) => setPostData({ ...postData, repolink: e.target.value })} />
                                    <label htmlFor="floatingInput">Repository Link</label>
                                </div>
                            </Col>
                            <Col>
                                <div className="form-floating mb-3">
                                    <input type="url" className="form-control" name="youtubelink" id="floatingInput" placeholder="Youtube Link" value={postData.YoutubeLink} onChange={(e) => setPostData({ ...postData, YoutubeLink: e.target.value })} />
                                    <label htmlFor="floatingInput">Youtube link(Hackerthon experience)</label>
                                </div>
                            </Col>
                        </Row>

                        {inputList.map((x, i) => {
                            return (
                                <Row key={i}>
                                    <Col>
                                        <div className="form-floating mb-3">
                                            <input type="text" className="form-control" name="name" id="floatingInput" placeholder="Team mate" value={x.name} onChange={e => handleInputChange(e, i)} />
                                            <label htmlFor="floatingInput">Enter Team mate name</label>
                                        </div>
                                    </Col>

                                    <Col>
                                        <div className="form-floating mb-3">
                                            <input type="URL" className="form-control" name="linkedinUrl" id="floatingInput" placeholder="LinkedIn" value={x.linkedinUrl} onChange={e => handleInputChange(e, i)} />
                                            <label htmlFor="floatingInput">Enter Linkedin URL</label>
                                        </div>
                                    </Col>
                                    <Col>
                                        {inputList.length !== 1 && <button className="btn btn-danger" style={{ margin: "7px" }} onClick={() => handleRemoveClick(i)}>Remove</button>}
                                        {inputList.length - 1 === i && <button className="btn btn-success" style={{ margin: "7px" }} onClick={handleAddClick}>Add</button>}

                                    </Col>
                                </Row>
                            );
                        })}

                        <div className={classes.fileInput}>
                            <FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} />
                        </div>
                        <Row>
                            <Col>
                                <br />
                                <Button className="btn btn-info w-100" size="large" type="submit">Submit</Button>
                            </Col>

                        </Row>
                    </form>

                </Card>
            </Container>
        </div>
    )
}

export default ExperienceForm;
