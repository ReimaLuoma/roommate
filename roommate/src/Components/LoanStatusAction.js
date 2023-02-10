import { Button } from '@mui/material';
import { useRecoilState } from 'recoil';
import { loanUpdate } from '../Atoms/LoanUpdate';

const LoanStatusAction = ({ status, admin=false, _id }) => {

    const [loanUp, setLoanUp] = useRecoilState(loanUpdate);

    const handleCancel = () => {
        fetch(process.env.REACT_APP_SERVER_API + '/loanInstance/cancelRequest/' + _id, {method: 'POST'})
        .then(() => {
            setLoanUp(!loanUp);
        });
    };

    const handleRequest = (action) => {
        fetch(process.env.REACT_APP_SERVER_API + '/loanInstance/updateStatus/' + _id + '/' + action, {method: 'POST'})
        .then(() => {
            setLoanUp(!loanUp);
        });
    };

    const handleAccept = () => {
        fetch(process.env.REACT_APP_SERVER_API + '/loanInstance/updateStatus/' + _id + '/loaned', {method: 'POST'})
        .then(() => {
            setLoanUp(!loanUp);
        });
    };

    // ADMIN: return pending
    if(status === 'return pending' && admin){
        return (
            <div className="col-4 text-center">
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
                    onClick={handleCancel}
                >
                Accept
                </Button>
            </div>
        )
    };

    // USER: return pending
    if(status === 'return pending' && !admin){
        return (
            <div className="col-4 text-center">
                <h3 className='glow'>&lt;{status}&gt;</h3>
            </div>
        )
    };

    // ADMIN: request return
    if(status === 'return requested' && admin){
        return (
            <div className="col-4 text-center">
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
                    onClick={()=>handleRequest('loaned')}
                >
                Cancel
                </Button>
            </div>
        )
    };

    // USER: request return
    if(status === 'return requested' && !admin){
        return (
            <div className="col-4 text-center">
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
                    onClick={()=>handleRequest('return pending')}
                >
                Return
                </Button>
            </div>
        )
    };

    // ADMIN: loaned
    if(status === 'loaned' && admin){
        return (
            <div className="col-4 text-center">
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
                    onClick={()=>handleRequest('return requested')}
                >
                request return
                </Button>
            </div>
        )
    };

    // USER: loaned
    if(status === 'loaned' && !admin){
        return (
            <div className="col-4 text-center">
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
                    onClick={()=>handleRequest('return pending')}
                >
                return
                </Button>
            </div>
        )
    };


    //ADMIN: loan requested
    if(status === 'loan requested' && admin){
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

    // USER: loan requested
    if(status === 'loan requested' && !admin){
        return (
            <div className="col-4 text-center">
                <h3 className='glow'>&lt;{status}&gt;</h3>
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
                Cancel
                </Button>
            </div>
        )
    }
};

export default LoanStatusAction;