import { PanelBody, Button } from '@wordpress/components';
import { MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

const ImagePanel = ({ attributes, setAttributes, onSelectImageOne, onRemoveImageOne }) => {
  const { imageOneUrl, imageOneId } = attributes;

  return (
    <PanelBody title={__('Настройки изображения', 'theme')} initialOpen={false}>
      <MediaUploadCheck>
        <MediaUpload
          onSelect={onSelectImageOne}
          allowedTypes={['image']}
          value={imageOneId}
          render={({ open }) => (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {!imageOneUrl ? (
                <Button onClick={open} variant="primary" icon="upload">
                  {__('Выбрать изображение', 'theme')}
                </Button>
              ) : (
                <Button
                  onClick={onRemoveImageOne}
                  variant="tertiary"
                  icon="trash"
                  isDestructive
                >
                  {__('Удалить изображение', 'theme')}
                </Button>
              )}
            </div>
          )}
        />
      </MediaUploadCheck>
    </PanelBody>
  );
};

export default ImagePanel;
