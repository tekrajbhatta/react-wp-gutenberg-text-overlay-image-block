import { useBlockProps, RichText } from '@wordpress/block-editor';

function save({ attributes }) {
    const { imageUrl, content, topPosition, rightPosition, bottomPosition, leftPosition } = attributes;
    const blockProps = useBlockProps.save({
        className: 'text-overlay-image'
    });

    // Function to generate style object
    const getTextBoxStyles = () => {
        const styles = {};
        
        // Only add position if it has a value
        if (topPosition !== undefined) styles.top = `${topPosition}px`;
        if (rightPosition !== undefined) styles.right = `${rightPosition}px`;
        if (bottomPosition !== undefined) styles.bottom = `${bottomPosition}px`;
        if (leftPosition !== undefined) styles.left = `${leftPosition}px`;
        
        return styles;
    };

    return (
        <div {...blockProps}>
            <div className="image-container">
                {imageUrl && (
                    <>
                        <img src={imageUrl} alt="" />
                        <div
                            className="text-box"
                            style={getTextBoxStyles()}
                        >
                            <RichText.Content value={content} />
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default save;
