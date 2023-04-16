import React from "react";
import { Link } from "react-router-dom";

type PostProps = {
    id: number;
    title: string;
};

export default function Post({ id, title }: PostProps) {
    console.log(`Hello from Post`)
    return (
        <Link to={`/post/${id}`} target="_blank" className="post">
            <span className="post-title">{id}: {title}</span>
        </Link>
    );
}
