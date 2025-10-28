import { PanelBody, TextareaControl, __experimentalInputControl as InputControl, Button, Flex } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { useTypograf } from '../../../utils/useTypograf'; // путь подкорректируй под свой проект

const FieldLabelWithButton = ({ label, onTypograph, hasValue }) => (
  <Flex justify="space-between" align="center">
    <span>{label}</span>
    {hasValue && (
      <Button
        variant="tertiary"
        size="small"
        onClick={onTypograph}
        title={__('Типографировать это поле', 'theme')}
        style={{ minWidth: 'auto', padding: '4px 8px' }}
      >
        🎨
      </Button>
    )}
  </Flex>
);

const ContentPanel = ({ attributes, setAttributes }) => {
  const { supTitle, title, description, button } = attributes;

  // Подключаем общий хук
  const { typographField, typographAllFields } = useTypograf(attributes, setAttributes, [
    'supTitle',
    'title',
    'description',
    'button',
  ]);

  const hasTextToTypograph = supTitle || title || description || button;

  return (
    <PanelBody title={__('Настройки контента', 'theme')} initialOpen={true}>
      {hasTextToTypograph && (
        <div style={{ marginBottom: '20px', padding: '10px', background: '#f6f7f7', borderRadius: '4px' }}>
          <Flex direction="column" gap="10px">
            <Button
              variant="primary"
              onClick={typographAllFields}
              style={{ width: '100%' }}
            >
              {__('Типографировать все поля', 'theme')}
            </Button>
            <div style={{ fontSize: '12px', color: '#757575', textAlign: 'center' }}>
              {__('Расставит кавычки, тире и неразрывные пробелы', 'theme')}
            </div>
          </Flex>
        </div>
      )}

      <TextareaControl
        label={
          <FieldLabelWithButton
            label={__('Текст над заголовком', 'theme')}
            onTypograph={() => typographField('supTitle')}
            hasValue={!!supTitle}
          />
        }
        value={supTitle}
        onChange={(value) => setAttributes({ supTitle: value })}
        placeholder={__('Текст...', 'theme')}
        rows={2}
      />

      <TextareaControl
        label={
          <FieldLabelWithButton
            label={__('Заголовок', 'theme')}
            onTypograph={() => typographField('title')}
            hasValue={!!title}
          />
        }
        value={title}
        onChange={(value) => setAttributes({ title: value })}
        placeholder={__('Введите заголовок...', 'theme')}
        rows={2}
      />

      <TextareaControl
        label={
          <FieldLabelWithButton
            label={__('Описание', 'theme')}
            onTypograph={() => typographField('description')}
            hasValue={!!description}
          />
        }
        value={description}
        onChange={(value) => setAttributes({ description: value })}
        placeholder={__('Введите описание...', 'theme')}
        rows={5}
      />

      <InputControl
        label={
          <FieldLabelWithButton
            label={__('Текст кнопки', 'theme')}
            onTypograph={() => typographField('button')}
            hasValue={!!button}
          />
        }
        value={button}
        onChange={(value) => setAttributes({ button: value })}
        placeholder={__('Кнопка', 'theme')}
      />
    </PanelBody>
  );
};

export default ContentPanel;
