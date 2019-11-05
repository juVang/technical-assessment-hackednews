import React from 'react';
class RecommendeStories extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        // props.recommeded();
        var storeis = this.props.data.map(story => {
            return (<tr key={story.id}>
                <td>{story.title}</td>
                <td>{story.by.id}</td>
            </tr>)
        });
        return (
            <div>

                <table>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Author</th>
                        </tr>
                    </thead>
                    <tbody>
                        {storeis}
                    </tbody>
                </table>
            </div>
        );
    }
}
export default RecommendeStories;