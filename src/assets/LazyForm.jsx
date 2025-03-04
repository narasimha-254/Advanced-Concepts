import React from 'react'

const LazyForm = () => {
    return (
        <div>
            <form>
                <label>Enter Your Name: <input type="text" /></label><br /><br />
                <label>Enter Your Email: <input type="text" /></label>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default LazyForm