import React from 'react'
import Loader from 'react-loader-spinner'



export const Loading = () => {
    return (
        <div className="col-12 loader-container">
            <Loader
                type="Puff"
                color="#00BFFF"
                secondaryColor="#9575CD"
                height={80}
                width={80}


            />

        </div>
    )
}