import {
  useBlockProps,
  RichText,
  InspectorControls,
} from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

import ContentPanel from './controls/ContentPanel';
import VideoHelpPanel from './controls/VideoHelpPanel';

const Edit = ({ attributes, setAttributes }) => {
  const { supTitle, title, description, button, backgroundColor } = attributes;

  const blockProps = useBlockProps({
    className: 'main-block',
    style: { backgroundColor },
  });

  return (
    <>
      <InspectorControls>
        <VideoHelpPanel />
        <ContentPanel attributes={attributes} setAttributes={setAttributes} />
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
              image
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Edit;
