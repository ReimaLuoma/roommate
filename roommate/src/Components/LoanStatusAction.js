import { Button } from '@mui/material';

const LoanStatusAction = ({ status, admin=false, movieID }) => {

    const handleCancel = (loanInstanceID) => {
        console.log('cancel: ', loanInstanceID);
        fetch(process.env.REACT_APP_SERVER_API + '/loanInstance/cancelRequest/' + loanInstanceID)
        .then((response) => response.json())
        .then((data) => {
            console.log(data.data);
        });
    };

    const handleRequest = () => {
        console.log('request handled');
    };

    const handleAccept = () => {
        console.log('accepted');
    };
    
    // status is a request, handle with cancel button
    if((status === 'loan requested' && !admin) || status === 'return requested' || status === 'return pending'){
        return (
            <div className="col-3">
                <h4 className='glow'>&lt;{status}&gt;</h4>
                <Button
                    variant="contained"
                    sx={{
                        color: "black",
                        bgcolor: "#e2c34b",
                        borderRadius: 2,
                        boxShadow: "3px 3px #1c1c1c",
                        ":hover": {
                        bgcolor: "#ffdc54",
                        color: "#2c2c2c",
                        boxShadow: "3px 3px #1c1c1c",
                        },
                    }}
                    onClick={handleCancel}
                >
                Cancel request
                </Button>
            </div>
        )
    };

    // status is loaned, handle with return requests actions
    if(status === 'loaned'){
        return (
            <div className="col-3">
                <h3 className='glow'>&lt;{status}&gt;</h3>
                <Button
                    variant="contained"
                    sx={{
                        color: "black",
                        bgcolor: "#e2c34b",
                        borderRadius: 2,
                        boxShadow: "3px 3px #1c1c1c",
                        ":hover": {
                        bgcolor: "#ffdc54",
                        color: "#2c2c2c",
                        boxShadow: "3px 3px #1c1c1c",
                        },
                    }}
                    onClick={handleRequest}
                >
                    {
                        admin
                        ?'Return'
                        :'Request return'
                    }
                </Button>
            </div>
        )
    };
    if(status === 'return pending' || (status === 'loan requested' && admin)){
        return (
            <div className="col-4 text-center">
                <h3 className='glow'>&lt;{status}&gt;</h3>
                <Button
                    variant="contained"
                    sx={{
                        color: "black",
                        bgcolor: "#6AC230",
                        borderRadius: 2,
                        mr: 1,
                        boxShadow: "3px 3px #1c1c1c",
                        ":hover": {
                        bgcolor: "#2BAD2E",
                        color: "white",
                        boxShadow: "3px 3px #1c1c1c",
                        },
                    }}
                    onClick={handleAccept}
                >
                Accept
                </Button>
                <Button
                    variant="contained"
                    sx={{
                        color: "white",
                        bgcolor: "red",
                        borderRadius: 2,
                        boxShadow: "3px 3px #1c1c1c",
                        ":hover": {
                        bgcolor: "maroon",
                        color: "white",
                        boxShadow: "3px 3px #1c1c1c",
                        },
                    }}
                    onClick={handleCancel}
                >
                Decline
                </Button>
            </div>
        )
    };
};

export default LoanStatusAction;