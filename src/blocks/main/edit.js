import {
  useBlockProps,
  RichText,
  InspectorControls,
} from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

import VideoHelpPanel from './controls/VideoHelpPanel';
import ContentPanel from './controls/ContentPanel';
import ImagePanel from './controls/ImagePanel';

const Edit = ({ attributes, setAttributes }) => {
  const { supTitle, title, description, button, imageOneUrl, imageOneId, backgroundColor } = attributes;

  const blockProps = useBlockProps({
    className: 'main-block',
    style: { backgroundColor },
  });

  const onSelectImageOne = (media) => {
    setAttributes({
      imageOneUrl: media.url,
      imageOneId: media.id,
    });
  };

  const onRemoveImageOne = () => {
    setAttributes({ imageOneUrl: '', imageOneId: 0 });
  };

  return (
    <>
      <InspectorControls>
        <VideoHelpPanel />
        <ContentPanel attributes={attributes} setAttributes={setAttributes} />
        <ImagePanel
          attributes={attributes}
          setAttributes={setAttributes}
          onSelectImageOne={onSelectImageOne}
          onRemoveImageOne={onRemoveImageOne}
        />
      </InspectorControls>

      <div {...blockProps}>
        <div className="advanced-block">
          <div className="block-info">🎨 Заглавный блок</div>

          <div className="advanced-block-content">
            <div className="advanced-block-text">
              <RichText.Content tagName="span" value={supTitle} className="sup-title" />

              <RichText.Content tagName="h1" value={title} className="title" />

              <RichText.Content tagName="p" value={description} className="description" />

              {button && (
                <RichText.Content tagName="span" value={button} className="theme-button" />
              )}
            </div>
            <div className="advanced-block-image">
              {imageOneUrl && (
                <div className="advanced-block-image">
                  <img src={imageOneUrl} className="advanced-image-preview" />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Edit;
