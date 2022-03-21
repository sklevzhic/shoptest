const FormOrder = ({setVisibleModal, setUserInfo }) => {


    function handleSubmit(event) {
        event.preventDefault()
        const target = event.target;
        let obj = {
            address: target.address.value,
            name: target.name.value,
        }
        setUserInfo(obj)
        setVisibleModal()
    }

    return <>
        <div className="row">
            <form className="form-horizontal" onSubmit={handleSubmit}>
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h4 className="panel-title">Contact info</h4>
                    </div>
                    <div className="panel-body">
                        <div className="form-group">
                            <label className="col-sm-2 control-label">Address</label>
                            <div className="col-sm-10">
                                <input type="text" name="address" className="form-control" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-sm-2 control-label">Name</label>
                            <div className="col-sm-10">
                                <input type="text" name="name" className="form-control" />
                            </div>
                        </div>
                    </div>
                </div>
                <input className="btn btn-success" type="submit"  value={"Order"}/>
            </form>
        </div>
    </>
}

export default FormOrder