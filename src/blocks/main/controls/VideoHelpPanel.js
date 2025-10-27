import { useState } from '@wordpress/element';
import { PanelBody, Button, Modal } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const VideoHelpPanel = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const videoPath = `${themeData.uploadUrl}/default.mov`;

  return (
    <>
      <PanelBody title={__('Помощь и инструкция', 'theme')} initialOpen={true}>
        <p>
          {__('Нажмите кнопку ниже, чтобы посмотреть видео-инструкцию по использованию блока.', 'theme')}
        </p>
        <Button
          variant="primary"
          onClick={() => setIsVideoOpen(true)}
          icon="video-alt3"
        >
          {__('Посмотреть видео', 'theme')}
        </Button>
      </PanelBody>

      {isVideoOpen && (
        <Modal
          title={__('Видео-инструкция', 'theme')}
          onRequestClose={() => setIsVideoOpen(false)}
          className="help-video-modal"
        >
          <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
            <video
              src={videoPath}
              controls
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                borderRadius: '8px',
              }}
            />
          </div>
        </Modal>
      )}
    </>
  );
};

export default VideoHelpPanel;
