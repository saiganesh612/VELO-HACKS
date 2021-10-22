import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
    eventForm:{
        marginTop:"40px",
        zIndex:"1px"
    },
    spinner_overlay:{

        position: "fixed",
        left: "50%",
        top: "50%",
        width: "100%",
        height: "100%",
        backgroundColor: "#fff",
        opacity:" 0.2",
        zIndex: "1000"
    }
}))