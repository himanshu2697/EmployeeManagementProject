import React from 'react';

const BankDetails = ({ tabIndex, singleUserData, setBankName, setAccountNumber, setIFSCCode }) => {
    return (
        <div className={(tabIndex == 7) ? 'bank-details d-block' : 'd-none'}>
            <form className="needs-validation">
                <div className='row'>
                    <div className='col-md-4'>
                        <label>Bank Name</label>
                        <select className="form-control" onChange={e => setBankName(e.target.value)}>
                            <option value={''}>--- Select bank name ---</option>
                            <option>HDFC</option>
                            <option>ICICI</option>
                            <option>SBI</option>
                        </select>
                    </div>
                    <div className='col-md-4'>
                        <label>Account Number</label>
                        <input type="text" className="form-control" onChange={e => setAccountNumber(e.target.value)} placeholder="Enter account number" required />
                        <div className="invalid-feedback">Account number is required</div>
                    </div>
                    <div className='col-md-4'>
                        <label>IFSC Code</label>
                        <input type="text" className="form-control" onChange={e => setIFSCCode(e.target.value)} placeholder="Enter IFSC code" required />
                        <div className="invalid-feedback">IFSC code is required</div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default BankDetails
