import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import React from 'react';

// Assuming your Contentful rich text JSON is in `content`
const RichText = ({ content }) => {
    console.log(content)
    return (
        <div>
            {documentToReactComponents(content, {
                renderNode: {
                    [BLOCKS.PARAGRAPH]: (node) => <p>{(node.content[0] as any)?.value}</p>,
                    // you can customize rendering for different node types
                },
            })}
        </div>
    );
};

export default RichText