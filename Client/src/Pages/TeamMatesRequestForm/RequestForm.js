import React, { useState } from 'react';
import { Card, Row, Col, Button } from 'react-bootstrap';
import useStyles from './styles.js'
import { Container } from 'react-bootstrap';
import axios from "axios"
import { useAuth0 } from "@auth0/auth0-react"

const RequestForm = () => {
    const [postData, setPostData] = useState({ Hackerthonname: '', Organizer: '', eventDate: '', requirements: '', projectTheme: '', techStack: '', });
    const classes = useStyles();
    const { user } = useAuth0()

    const handleSubmit = async (e) => {
        e.preventDefault();

        const satisfy = !postData.Hackerthonname || !postData.Organizer || !postData.eventDate || !postData.requirements
            || !postData.projectTheme || !postData.techStack
        if (satisfy) {
            alert("Enter each and every field...")
            return
        }

        const data = { ...postData, username: user.nickname }
        axios.post("/create-new-requirement", { data })
            .then(() => window.location.href = "/team-feed")
            .catch(err => {
                console.log(err.response)
                alert("Something went wrong...")
                window.location.reload()
            })
    }

    return (
        <div className={classes.eventForm}>
            <Container>
                <Card className="shadow p-3 mb-5 bg-white rounded" >
                    <h2 align="center"> Post your Requirement</h2>
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
                        </Row>
                        <Row>
                            <Col>
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" name="projecttheme" id="floatingInput" placeholder="Reha" value={postData.projectTheme} onChange={(e) => setPostData({ ...postData, projectTheme: e.target.value })} />
                                    <label htmlFor="floatingInput">Theme of Project</label>
                                </div>
                            </Col>
                            <Col>
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" name="techstack" id="floatingInput" placeholder="Teck Stack" value={postData.techStack} onChange={(e) => setPostData({ ...postData, techStack: e.target.value })} />
                                    <label htmlFor="floatingInput">Tech stacks used</label>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <div className="form-floating">
                                <textarea className="form-control" placeholder="Leave a comment here" name="requirements" id="floatingTextarea2" style={{ height: "150px" }} value={postData.requirements} onChange={(e) => setPostData({ ...postData, requirements: e.target.value })}></textarea>
                                <label htmlFor="floatingTextarea2">Requirement </label>
                            </div>
                        </Row>
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

export default RequestForm;
