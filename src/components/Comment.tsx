import React from "react"

type PostProps = {
    name: string;
    email: string;
    body: string;
}

export default function Comment({ name, email, body }: PostProps) {
    console.log(`Hello from Comment`)
    return (
        <>
            <div className="comment">
                <div className="comment-info">
                    <h5>{name}</h5>
                    <h6>{email}</h6>
                </div>
                <div className="comment-body">
                    <p>{body}</p>
                </div>
            </div>
        </>
    )
}
