import React from 'react';
import SbEditable from 'storyblok-react';
import ReactMardown from 'react-markdown';

const ExampleComponent = (props) => {
  const TitleTag = `h${props.blok.title_size}`;

  return (
    <SbEditable content={props.blok}>
      <div>
        {props.blok.title && (
          <TitleTag style={{ marginBottom: '16px' }}>
            {props.blok.title}
          </TitleTag>
        )}
        <div>
          <ReactMardown source={props.blok.content} className="markdown" />
        </div>
      </div>
    </SbEditable>
  );
};

export default ExampleComponent;
