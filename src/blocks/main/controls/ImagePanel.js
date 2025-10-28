import { PanelBody, Button } from '@wordpress/components';
import { MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

const ImagePanel = ({ attributes, setAttributes, onSelectImageOne, onRemoveImageOne, onSelectImageTwo, onRemoveImageTwo }) => {
  const { imageOneUrl, imageOneId, imageTwoUrl, imageTwoId } = attributes;

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
                  {__('Выбрать изображение 1', 'theme')}
                </Button>
              ) : (
                <Button
                  onClick={onRemoveImageOne}
                  variant="tertiary"
                  icon="trash"
                  isDestructive
                >
                  {__('Удалить изображение 1', 'theme')}
                </Button>
              )}
            </div>
          )}
        />

        <MediaUpload
          onSelect={onSelectImageTwo}
          allowedTypes={['image']}
          value={imageTwoId}
          render={({ open }) => (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {!imageTwoUrl ? (
                <Button onClick={open} variant="primary" icon="upload">
                  {__('Выбрать изображение 2', 'theme')}
                </Button>
              ) : (
                <Button
                  onClick={onRemoveImageTwo}
                  variant="tertiary"
                  icon="trash"
                  isDestructive
                >
                  {__('Удалить изображение 2', 'theme')}
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
