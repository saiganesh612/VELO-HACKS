import React, { useState } from 'react';
import { Card, Row, Col, Button } from 'react-bootstrap';
import useStyles from './styles.js'
import { Container } from 'react-bootstrap';
import axios from "axios"
import { useAuth0 } from "@auth0/auth0-react"
// import { EditorState } from 'draft-js';
// import { ContentState, convertToRaw } from 'draft-js';
import LoadingOverlay from 'react-loading-overlay';

// import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
const ExperienceForm = () => {
    const { user, isAuthenticated, isLoading, getAccessTokenSilently } = useAuth0()
    // const [editorState, setEditorState] = useState(
    //     () => EditorState.createEmpty(),
    // );
    let isActive = false;
    // let _contentState = ContentState.createFromText('Sample content state');
    // const raw = convertToRaw(_contentState)
    // const [contentState, setContentState] = useState(raw) // ContentState JSON

    const [inputList, setInputList] = useState([{ name: "", linkedinUrl: "" }]);
    const [postData, setPostData] = useState({
        Hackerthonname: '', Organizer: '', eventDate: '', detailedDescription: '', BriefDescription: '',
        projectTheme: '', techStack: '', selectedFile: '', repolink: '', YoutubeLink: ''
    });
    const classes = useStyles();

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

    const handleSubmit = async (e) => {
        e.preventDefault();
        const submitBtn = document.getElementById("submit")
        submitBtn.style.pointerEvents = "none"
        submitBtn.innerHTML = `
            <div class="d-flex justify-content-center">
                <div class="spinner-border" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
                <strong style="margin-left: 10px; padding-top: 5px;">Please wait...</strong>
            </div>
        `

        isActive = true
        const satisfy = !postData.Hackerthonname || !postData.Organizer || !postData.eventDate || !postData.detailedDescription || !postData.selectedFile
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

        const allowedFormats = ['jpeg', 'jpg', 'png']
        const coverPic = postData.selectedFile
        const type = coverPic.type.split("/")[1]
        if (!allowedFormats.includes(type)) {
            setPostData({ ...postData, selectedFile: '' })
            alert("Only 'JPEG', 'JPG', 'PNG' formats are allowed.")
            return
        }

        const utubeLink = postData.YoutubeLink.replace("watch?v=", "embed/")

        const formData = new FormData()
        formData.append("Hackerthonname", postData.Hackerthonname)
        formData.append("Organizer", postData.Organizer)
        formData.append("eventDate", postData.eventDate)
        formData.append("detailedDescription", postData.detailedDescription)
        formData.append("selectedFile", postData.selectedFile)
        formData.append("BriefDescription", postData.BriefDescription)
        formData.append("projectTheme", postData.projectTheme)
        formData.append("techStack", postData.techStack)
        formData.append("repolink", postData.repolink)
        formData.append("YoutubeLink", utubeLink)
        formData.append("TeamDetails", JSON.stringify(inputList))
        formData.append("username", user.nickname)
        formData.append("profileImage", user.picture)
        formData.append("uploadTime", new Date())

        const token = await getAccessTokenSilently()

        axios({
            method: "POST",
            url: "/create-new-hackathon",
            data: formData,
            headers: {
                "authorization": `Bearer ${token}`,
                'Content-Type': `multipart/form-data; boundary=${formData._boundary}`
            },
        }).then((res) => {
            console.log(res)
            window.location.href = "/projects"
        }).catch(err => {
            console.log(err.response)
            alert("Something went wrong...")
            window.location.reload()
        })
    }

    return (
        <>
            {
                ( isLoading ) ? (
                    <>
                        <LoadingOverlay active={true} spinner text='Loading'>
                            <div style={{ height: "90vh" }}></div>
                        </LoadingOverlay>
                    </>
                ) : (
                  ( ! isAuthenticated) ? (
                        <>
                            <LoadingOverlay active={true} spinner text='Please signin to post your experience'>
                                <div style={{ height: "100vh" }}></div>
                            </LoadingOverlay>
                        </>
                    ) : (
                        <LoadingOverlay active={isActive} spinner text='Loading your content...'>
                            <div className={classes.eventForm}>
                                <Container>
                                    <Card className="shadow p-3 mb-5 bg-white rounded" >
                                        <h2 align="center"> Post your Experience</h2>
                                        <br />
                                        <form autoComplete="off" onSubmit={handleSubmit}>
                                            <Row>
                                                <Col sm={6}>
                                                    <div className="form-floating mb-3">
                                                        <input required type="text" className="form-control" name="Hackname" id="floatingInput" placeholder="Reha" value={postData.Hackerthonname} onChange={(e) => setPostData({ ...postData, Hackerthonname: e.target.value })} />
                                                        <label htmlFor="floatingInput">Hackerthon Name</label>
                                                    </div>
                                                </Col>
                                                <Col>
                                                    <div className="form-floating mb-3">
                                                        <input type="text" className="form-control" required name="organised" id="floatingInput" placeholder="Reha" value={postData.Organizer} onChange={(e) => setPostData({ ...postData, Organizer: e.target.value })} />
                                                        <label htmlFor="floatingInput">Organizer</label>
                                                    </div>
                                                </Col>
                                                <Col>
                                                    <div className="form-floating mb-3">
                                                        <input required type="date" className="form-control" name="eventDate" id="floatingInput" value={postData.eventDate} onChange={(e) => setPostData({ ...postData, eventDate: e.target.value })} />
                                                        <label htmlFor="floatingInput">Date of Hackerthon</label>
                                                    </div>
                                                </Col>
                                            </Row>
                                            <Row>
                                            </Row>
                                            <Row style={{ padding: "2px" }}>
                                                <Col style={{ border: "1px solid lightgrey" }} >
                                                    <div className="form-floating">
                                                        <textarea required className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: "150px" }} value={postData.detailedDescription} onChange={(e) => setPostData({ ...postData, detailedDescription: e.target.value })}></textarea>
                                                        <label htmlFor="floatingTextarea2">Project Detailed Description</label>
                                                    </div>
                                                    {/* <Editor
                                                        defaultContentState={contentState}
                                                        onContentStateChange={setContentState}
                                                        wrapperClassName="wrapper-class"
                                                        editorClassName="editor-class"
                                                        toolbarClassName="toolbar-class"
                                                    /> */}
                                                </Col>
                                            </Row>

                                            <br />
                                            <Row>
                                                <Col>
                                                    <div className="form-floating">
                                                        <textarea required className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: "60px" }} value={postData.BriefDescription} onChange={(e) => setPostData({ ...postData, BriefDescription: e.target.value })}></textarea>
                                                        <label htmlFor="floatingTextarea2">Project Brief Description(less than 25 words)</label>
                                                    </div>
                                                </Col>
                                            </Row>
                                            <br />
                                            <Row>
                                                <Col>
                                                    {/* <div className="form-floating mb-3">
                                                        <input required type="text" className="form-control" name="projecttheme" id="floatingInput" placeholder="Reha" value={postData.projectTheme} onChange={(e) => setPostData({ ...postData, projectTheme: e.target.value })} />
                                                        <label htmlFor="floatingInput">Theme of Project</label>
                                                    </div> */}
                                                    <select className="form-select form-select-lg mb-3" name="projecttheme" value={postData.projectTheme} aria-label=".form-select-lg example" onChange={(e) => setPostData({ ...postData, projectTheme: e.target.value })} required>
                                                        <option defaultValue>Select your theme</option>
                                                        <option value="FIN-TECH">FIN-TECH</option>
                                                        <option value="EDU-TECH">EDU-TECH</option>
                                                        <option value="FOOD-TECH">FOOD-TECH</option>
                                                        <option value="MED-TECH">MED-TECH</option>
                                                        <option value="AGRI-TECH">AGRI-TECH</option>
                                                    </select>
                                                </Col>

                                                <Col>
                                                    <div className="form-floating mb-3">
                                                        <input required type="text" className="form-control" name="techstack" id="floatingInput" placeholder="Tech Stack" value={postData.techStack} onChange={(e) => setPostData({ ...postData, techStack: e.target.value })} />
                                                        <label htmlFor="floatingInput">Tech stacks used</label>
                                                    </div>
                                                </Col>

                                                <Col>
                                                    <div className="form-floating mb-3">
                                                        <input required type="url" className="form-control" name="repolink" id="floatingInput" placeholder="Repo Link" value={postData.repolink} onChange={(e) => setPostData({ ...postData, repolink: e.target.value })} />
                                                        <label htmlFor="floatingInput">Repository Link</label>
                                                    </div>
                                                </Col>
                                                <Col>
                                                    <div className="form-floating mb-3">
                                                        <input required type="url" className="form-control" name="youtubelink" id="floatingInput" placeholder="Youtube Link" value={postData.YoutubeLink} onChange={(e) => setPostData({ ...postData, YoutubeLink: e.target.value })} />
                                                        <label htmlFor="floatingInput">Youtube link(Hackerthon experience)</label>
                                                    </div>
                                                </Col>
                                            </Row>

                                            {inputList.map((x, i) => {
                                                return (
                                                    <Row key={i}>
                                                        <Col>
                                                            <div className="form-floating mb-3">
                                                                <input required type="text" className="form-control" name="name" id="floatingInput" placeholder="Team mate" value={x.name} onChange={e => handleInputChange(e, i)} />
                                                                <label htmlFor="floatingInput">Enter Team mate name</label>
                                                            </div>
                                                        </Col>

                                                        <Col>
                                                            <div className="form-floating mb-3">
                                                                <input required type="URL" className="form-control" name="linkedinUrl" id="floatingInput" placeholder="LinkedIn" value={x.linkedinUrl} onChange={e => handleInputChange(e, i)} />
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
                                                <input required type="file" accept="image/*" onChange={(e) => setPostData({ ...postData, selectedFile: e.target.files[0] })} />
                                            </div>
                                            <Row>
                                                <Col>
                                                    <br />
                                                    <Button className="btn btn-info w-100" id="submit" size="large" type="submit">Submit</Button>
                                                </Col>
                                            </Row>
                                        </form>
                                    </Card>

                                </Container>
                            </div>
                        </LoadingOverlay>
                    )
                )

            }

        </>
    )
}

export default ExperienceForm;
