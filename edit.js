import { __ } from '@wordpress/i18n';
import {
    useBlockProps,
    MediaUpload,
    MediaUploadCheck,
    RichText,
    InspectorControls,
} from '@wordpress/block-editor';
import {
    Button,
    PanelBody,
    PanelRow,
    __experimentalNumberControl as NumberControl,
} from '@wordpress/components';

function Edit({ attributes, setAttributes }) {
    const { imageUrl, imageId, content, topPosition, rightPosition, bottomPosition, leftPosition } = attributes;

    const blockProps = useBlockProps({
        className: 'text-overlay-image'
    });

    const onSelectImage = (media) => {
        setAttributes({
            imageUrl: media.url,
            imageId: media.id,
        });
    };

    const onRemoveImage = () => {
        setAttributes({
            imageUrl: '',
            imageId: null,
        });
    };

    return (
        <>
            <InspectorControls>
                <PanelBody title={__('Text Box Position')} initialOpen={true}>
                    <PanelRow>
                        <NumberControl
                            label={__('Top Position (px)')}
                            value={topPosition}
                            onChange={(value) => setAttributes({ topPosition: parseInt(value) || 0 })}
                            min={-1000}
                            max={1000}
                        />
                    </PanelRow>
                    <PanelRow>
                        <NumberControl
                            label={__('Right Position (px)')}
                            value={rightPosition}
                            onChange={(value) => setAttributes({ rightPosition: parseInt(value) || 0 })}
                            min={-1000}
                            max={1000}
                        />
                    </PanelRow>
                    <PanelRow>
                        <NumberControl
                            label={__('Bottom Position (px)')}
                            value={bottomPosition}
                            onChange={(value) => setAttributes({ bottomPosition: parseInt(value) || 0 })}
                            min={-1000}
                            max={1000}
                        />
                    </PanelRow>
                    <PanelRow>
                        <NumberControl
                            label={__('Left Position (px)')}
                            value={leftPosition}
                            onChange={(value) => setAttributes({ leftPosition: parseInt(value) || 0 })}
                            min={-1000}
                            max={1000}
                        />
                    </PanelRow>
                </PanelBody>
            </InspectorControls>

            <div {...blockProps}>
                <div className="image-container">
                    <MediaUploadCheck>
                        <MediaUpload
                            onSelect={onSelectImage}
                            allowedTypes={['image']}
                            value={imageId}
                            render={({ open }) => (
                                <>
                                    {!imageUrl ? (
                                        <Button
                                            onClick={open}
                                            className="select-image-button"
                                            variant="secondary"
                                        >
                                            {__('Select Image')}
                                        </Button>
                                    ) : (
                                        <div className="image-wrapper">
                                            <img src={imageUrl} alt="" />
                                            <Button
                                                onClick={onRemoveImage}
                                                className="remove-image"
                                                variant="secondary"
                                            >
                                                {__('Remove Image')}
                                            </Button>
                                        </div>
                                    )}
                                </>
                            )}
                        />
                    </MediaUploadCheck>

                    {imageUrl && (
                        <div
                            className="text-box"
                            style={{
                                top: topPosition ? `${topPosition}px` : 'auto',
                                right: rightPosition ? `${rightPosition}px` : 'auto',
                                bottom: bottomPosition ? `${bottomPosition}px` : 'auto',
                                left: leftPosition ? `${leftPosition}px` : 'auto',
                            }}
                        >
                            <RichText
                                tagName="div"
                                value={content}
                                onChange={(content) => setAttributes({ content })}
                                placeholder={__('Add your text here...')}
                            />
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

export default Edit;
