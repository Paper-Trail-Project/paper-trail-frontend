import React from 'react'

export default function Section({section, selectedChapter}) {
    return (
        <>
        <h1>{section.title}</h1>
        <p>{section.content}</p>
        </>
    )
}
