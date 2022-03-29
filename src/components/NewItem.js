import React, { Component } from 'react'

export class NewItem extends Component {

    render() {
        let { title, description, imageUrl, newUrl, author, date, source } = this.props;
        author = author == null ? "Unknown" : author;
        date = new Date(date).toGMTString();
        
        return (
            <div>
                <div className="card">
                    <span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{zIndex:"1",left:"75%"}}>
                        {source}
                    </span>
                    <img src={imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p><small className="text-muted">By {author} on {date}</small></p>
                        <a href={newUrl} target="_blank " className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewItem