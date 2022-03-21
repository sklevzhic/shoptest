const OrderInfo = ({products,subTotal, user}) => {
    return <>

        <div className="d-flex justify-content-between align-items-center py-3">
            <h2 className="h5 mb-0"><a href="#" className="text-muted" /> Order #16123222</h2>
        </div>
        {/* Main content */}
        <div className="row">
            <div className="col-lg-8">
                {/* Details */}
                <div className="card mb-4">
                    <div className="card-body">

                        <table className="table table-borderless">
                            <tbody>
                            {
                                products.map(el => {
                                    return <tr key={el.id}>
                                        <td>
                                            <div className="d-flex mb-2">
                                                <div className="flex-shrink-0">
                                                    <img src="https://via.placeholder.com/280x280/87CEFA/000000" alt="" width={35} className="img-fluid" />
                                                </div>
                                                <div className="flex-lg-grow-1 ms-3">
                                                    <h6 className="small mb-0"><a href="#" className="text-reset">{el.title}</a></h6>
                                                    <span className="small">Color: Black</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td>{el.count}</td>
                                        <td className="text-end">${el.count * el.price}</td>
                                    </tr>
                                })
                            }

                            </tbody>
                            <tfoot>

                            <tr className="fw-bold">
                                <td colSpan={2}>TOTAL</td>
                                <td className="text-end">${subTotal}</td>
                            </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
            </div>
            <div className="col-lg-4">

                <div className="card mb-4">
                    <div className="card-body">

                        <h3 className="h6">Address</h3>
                        <address>
                            <strong>{user.name}</strong><br />
                            {user.address}
                        </address>
                    </div>
                </div>
            </div>
        </div>

    </>
}

export default OrderInfo