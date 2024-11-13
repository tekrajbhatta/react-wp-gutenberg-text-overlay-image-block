import { useBlockProps, RichText } from '@wordpress/block-editor';

function save({ attributes }) {
    const { imageUrl, content, topPosition, rightPosition, bottomPosition, leftPosition } = attributes;
    const blockProps = useBlockProps.save({
        className: 'text-overlay-image'
    });

    return (
        <div {...blockProps}>
            <div className="image-container">
                {imageUrl && (
                    <>
                        <img src={imageUrl} alt="" />
                        <div
                            className="text-box"
                            style={{
                                top: topPosition ? `${topPosition}px` : 'auto',
                                right: rightPosition ? `${rightPosition}px` : 'auto',
                                bottom: bottomPosition ? `${bottomPosition}px` : 'auto',
                                left: leftPosition ? `${leftPosition}px` : 'auto',
                            }}
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
