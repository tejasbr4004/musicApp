import React from 'react'

const Spinner = () => {
    return (
        <div>
            <div class="d-flex justify-content-center" style={{color:"white"}}>
            <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
            </div>
        </div>
    )
}

export default Spinner;