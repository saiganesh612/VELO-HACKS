import React, { useState } from 'react'
import { Modal, Button, Form } from 'react-bootstrap'
import { useAuth0 } from "@auth0/auth0-react"
import axios from "axios"

const Reply = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [comment, setComment] = useState('')
  const { isAuthenticated, user, getAccessTokenSilently } = useAuth0()

  const handlePost = async () => {
    if (!isAuthenticated) {
      alert("You need to login to post any comment.")
      return
    }
    if (!comment) {
      alert("Enter any message to post a comment.")
      return
    }

    const token = await getAccessTokenSilently()
    const data = { username: user.nickname, profile: user.picture, hackathon_id: props.projectId, comment, time: new Date(), replyTo: props.commentId }

    axios({
      method: "POST",
      url: "/create-new-subComment",
      headers: {
        "authorization": `Bearer ${token}`
      },
      data
    }).then((res) => {
      props.setComments(res.data.comments)
      document.getElementById("sub-comment").value = ""
      handleClose()
    })
      .catch(err => console.log(err.response))
  }

  return (
    <>
      <span onClick={handleShow} style={{ color: "black", fontSize: "12px", margin: "0px 12px" }}>
        <span style={{ color: "black", fontSize: "12px", margin: "0px 4px" }}>{props.reply}</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-reply-all-fill" viewBox="0 0 16 16">
          <path d="M8.021 11.9 3.453 8.62a.719.719 0 0 1 0-1.238L8.021 4.1a.716.716 0 0 1 1.079.619V6c1.5 0 6 0 7 8-2.5-4.5-7-4-7-4v1.281c0 .56-.606.898-1.079.62z" />
          <path d="M5.232 4.293a.5.5 0 0 1-.106.7L1.114 7.945a.5.5 0 0 1-.042.028.147.147 0 0 0 0 .252.503.503 0 0 1 .042.028l4.012 2.954a.5.5 0 1 1-.593.805L.539 9.073a1.147 1.147 0 0 1 0-1.946l3.994-2.94a.5.5 0 0 1 .699.106z" />
        </svg>
      </span>

      <Modal key={props.index} show={show} onHide={handleClose} backdrop="static" keyboard={false} >
        <Modal.Body>
          <Form.Group className="mb-3">
            <Form.Label> <b>Reply</b> to {props.replyTo}</Form.Label>
            <Form.Control as="textarea" id="sub-comment" rows={3} onChange={(e) => setComment(e.target.value)} />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handlePost}>Post</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Reply
