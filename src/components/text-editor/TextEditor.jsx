/* eslint-disable react/prop-types */
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function TextEditor({content, setContent}) {

  const handleEditorChange = (value) => {
    setContent(value);
  };

  return (
    <div className='pb-10 mb-10 lg:mb-8 mt-2'>
      <ReactQuill
     
        value={content}
        onChange={handleEditorChange}
        modules={{
          toolbar: {
            container: [
              [{ 'header': [1, 2, false] }],
              ['bold', 'italic', 'underline', 'strike', 'blockquote'],
              [{ 'color': [] }, { 'background': [] }],
              [{ 'list': 'ordered' }, { 'list': 'bullet' }],
              ['link', 'image'],
              ['clean']
            ]
          }
        }}
        style={{ height: '300px'}}
      />
    </div>
  );
}

export default TextEditor;
