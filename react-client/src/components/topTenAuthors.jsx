import React from 'react';

// Build out the view for the top ten HackerNews stories here. 
// Each story should have a title, author, and score. 
// You may wish to refactor the existing component structure - that's fine.
var TopTenAuthors = (props) => {
    props.TenAuthors();
    var authors = props.data.map(author => {
        return (<tr key={author.id}>
            <td>{author.by.id}</td>
            <td>{author.by.about}</td>
            <td>{author.by.karma}</td>
        </tr>)
    });
    return (
        <div>

            <table>
                <thead>
                    <tr>
                        <th>Author</th>
                        <th>About</th>
                        <th>Karma</th>
                    </tr>
                </thead>
                <tbody>
                    {authors}
                </tbody>
            </table>
        </div>
    );
}

export default TopTenAuthors;